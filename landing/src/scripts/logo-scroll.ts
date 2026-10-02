import {
	AmbientLight,
	Box3,
	Color,
	DirectionalLight,
	Group,
	Mesh,
	MeshStandardMaterial,
	PerspectiveCamera,
	Scene,
	Vector3,
	WebGLRenderer,
	SRGBColorSpace,
} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

interface Pose {
	id: string;
	/** Viewport fraction. With `stick`, this is an offset from the mark: positive x moves right, positive y moves down. */
	x: number;
	/** Viewport fraction. With `stick`, this is an offset from the mark. */
	y: number;
	scale: number;
	rotX: number;
	rotY: number;
	rotZ: number;
	/** Element the logo stays glued to until `release`. */
	stick?: string;
	/** Heading bottom, as a fraction of the viewport. The logo lets go above this line. */
	release?: number;
}

const cameraFov = 32;
const cameraZ = 8;

const desktopPoses: Pose[] = [
	{ id: 'top', x: 0, y: 0.23, scale: 1.35, rotX: 0.06, rotY: 0.35, rotZ: -0.04 },
	{ id: 'about', x: 0, y: 0, scale: 0.9, rotX: 0.0, rotY: -0.1, rotZ: 0.10, stick: 'about-mark', release: 0.22 },
	{ id: 'values', x: 0.008, y: -0.01, scale: 0.8, rotX: 0, rotY: 0, rotZ: 0, stick: 'value-mark', release: 0.22 },
	
	
	// { id: 'services', x: 0.86, y: 0.4, scale: 0.44, rotX: -0.12, rotY: 1.4, rotZ: 0.18 },
	// { id: 'workflow', x: 0.9, y: 0.22, scale: 0.36, rotX: 0.28, rotY: -0.5, rotZ: 0.04 },
	// { id: 'projects', x: 0.88, y: 0.2, scale: 0.32, rotX: 0.06, rotY: 0.4, rotZ: 0.1 },
];

const mobileTune: Record<string, Pick<Pose, 'x' | 'y' | 'scale'>> = {
	top: { x: 0, y: 0.08, scale: 1 },
	// For stick poses, x/y are OFFSETS from the mark (not absolute viewport %).
	about: { x: 0, y: 0, scale: 0.8 },
	values: { x: 0.005, y: 0.005, scale: 0.45 },
	// services: { x: 0.84, y: -10, scale: 0.28 },
	// workflow: { x: 0.86, y: 0.12, scale: 0.26 },
	// projects: { x: 0.84, y: 0.12, scale: 0.24 },
};

const logoUrl = '/marq%20logo.glb';

function clamp01(value: number): number {
	return Math.min(1, Math.max(0, value));
}

function lerp(from: number, to: number, t: number): number {
	return from + (to - from) * t;
}

function damp(from: number, to: number, ease: number, limit: number): number {
	const step = (to - from) * ease;
	if (Math.abs(step) <= limit) return from + step;
	return from + Math.sign(step) * limit;
}

function smoothstep(t: number): number {
	const clamped = clamp01(t);
	return clamped * clamped * (3 - 2 * clamped);
}

function mixPose(from: Pose, to: Pose, t: number): Pose {
	return {
		id: to.id,
		x: lerp(from.x, to.x, t),
		y: lerp(from.y, to.y, t),
		scale: lerp(from.scale, to.scale, t),
		rotX: lerp(from.rotX, to.rotX, t),
		rotY: lerp(from.rotY, to.rotY, t),
		rotZ: lerp(from.rotZ, to.rotZ, t),
	};
}

function posesForWidth(mobile: boolean): Pose[] {
	if (!mobile) return desktopPoses;
	return desktopPoses.map((pose) => {
		const tune = mobileTune[pose.id];
		if (!tune) return pose;
		// Stick poses still use mark anchoring; tune x/y act as offsets in stuckPose.
		return { ...pose, ...tune };
	});
}

function logoWidthFraction(scale: number): number {
	const worldHeight = 2 * Math.tan((cameraFov * Math.PI) / 360) * cameraZ;
	const aspect = window.innerWidth / Math.max(window.innerHeight, 1);
	return scale / (worldHeight * aspect);
}

function logoHeightFraction(scale: number): number {
	const worldHeight = 2 * Math.tan((cameraFov * Math.PI) / 360) * cameraZ;
	return scale / worldHeight;
}

function stuckPose(pose: Pose, anchor: HTMLElement): Pose {
	const heading = anchor.parentElement ?? anchor;
	const head = heading.getBoundingClientRect();
	const mark = anchor.getBoundingClientRect();
	const inGap = mark.width > 8;
	const x =
		(inGap
			? (mark.left + mark.width / 2) / window.innerWidth
			: (mark.left + 16) / window.innerWidth + logoWidthFraction(pose.scale) / 2) + pose.x;
	const y = (head.top + head.height * (inGap ? 0.5 : 0.46)) / window.innerHeight + pose.y;
	return { ...pose, x, y };
}

/** Keep the hero logo left-aligned with the headline; on mobile sit in the band above it. */
function alignTopLeft(pose: Pose): Pose {
	if (pose.id !== 'top') return pose;
	const heading = document.getElementById('hero-heading');
	if (!heading) return pose;
	const rect = heading.getBoundingClientRect();
	const mobile = window.matchMedia('(max-width: 53.99rem)').matches;
	const x = rect.left / window.innerWidth + logoWidthFraction(pose.scale) / 2 + pose.x;
	if (!mobile) return { ...pose, x };
	// Snap into the empty spot above the headline (left edge) and track while scrolling.
	const y = rect.top / window.innerHeight - logoHeightFraction(pose.scale) / 2 - 0.02 + pose.y;
	return { ...pose, x, y };
}

function poseTarget(pose: Pose): Pose {
	if (!pose.stick) return alignTopLeft(pose);
	const anchor = document.getElementById(pose.stick);
	return anchor ? stuckPose(pose, anchor) : alignTopLeft(pose);
}

function readToken(name: string, fallback: string): Color {
	const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
	const color = new Color();
	color.setStyle(value || fallback);
	return color;
}

function withCoverageFade(pose: Pose): Pose {
	const coverage = document.getElementById('coverage');
	if (!coverage) return pose;
	const coverageTop = coverage.getBoundingClientRect().top;
	const fade = smoothstep((window.innerHeight * 1.35 - coverageTop) / (window.innerHeight * 0.45));
	return { ...pose, scale: pose.scale * (1 - fade) };
}

function targetPose(poses: Pose[], reducedMotion: boolean): { pose: Pose; locked: boolean } {
	const hero = poses[0];
	if (!hero) {
		return { pose: { id: 'top', x: 0.5, y: 0.19, scale: 0, rotX: 0, rotY: 0, rotZ: 0 }, locked: false };
	}

	if (reducedMotion) {
		const heroEl = document.getElementById(hero.id);
		if (!heroEl) return { pose: poseTarget(hero), locked: false };
		const visible = heroEl.getBoundingClientRect().bottom / window.innerHeight;
		return { pose: { ...poseTarget(hero), scale: hero.scale * clamp01(visible) }, locked: false };
	}

	const probe = window.innerHeight * 0.5;
	const points = poses.flatMap((pose) => {
		const el = document.getElementById(pose.id);
		if (!el) return [];
		return [{ pose, top: el.getBoundingClientRect().top }];
	});
	if (points.length === 0) return { pose: poseTarget(hero), locked: false };

	let index = 0;
	for (let i = 0; i < points.length; i += 1) {
		if (points[i].top <= probe) index = i;
	}

	const current = points[index];
	const next = points[index + 1];
	const anchor = current.pose.stick ? document.getElementById(current.pose.stick) : null;
	if (anchor) {
		const stuck = stuckPose(current.pose, anchor);
		const heading = (anchor.parentElement ?? anchor).getBoundingClientRect();
		const releaseAt = window.innerHeight * (current.pose.release ?? 0.22);
		// Glued to the mark   frame loop carries scroll so it doesn't lag once settled.
		if (!next || heading.bottom >= releaseAt) {
			return { pose: withCoverageFade(stuck), locked: true };
		}
		const travel = releaseAt - heading.bottom;
		const t = smoothstep(travel / (window.innerHeight * 0.45));
		const destination = poseTarget(next.pose);
		return { pose: withCoverageFade(mixPose(stuck, destination, t)), locked: false };
	}

	let mixed = poseTarget(current.pose);
	if (next) {
		const span = next.top - current.top;
		const traveled = probe - current.top;
		const blendStart = span * 0.55;
		const t = smoothstep((traveled - blendStart) / (span - blendStart || 1));
		mixed = mixPose(poseTarget(current.pose), poseTarget(next.pose), t);
	}

	return { pose: withCoverageFade(mixed), locked: false };
}

export function startLogoScroll(canvas: HTMLCanvasElement): void {
	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const mobileQuery = window.matchMedia('(max-width: 53.99rem)');

	let renderer: WebGLRenderer;
	try {
		renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true });
	} catch {
		canvas.remove();
		return;
	}

	renderer.setClearColor(new Color().setRGB(0, 0, 0), 0);
	renderer.outputColorSpace = SRGBColorSpace;
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

	const scene = new Scene();
	const camera = new PerspectiveCamera(cameraFov, 1, 0.1, 100);
	camera.position.set(0, 0, cameraZ);

	const white = new Color().setRGB(1, 1, 1);
	scene.add(new AmbientLight(white, 1.15));
	const key = new DirectionalLight(white, 2.1);
	key.position.set(3, 4, 6);
	scene.add(key);

	const holder = new Group();
	scene.add(holder);

	const shown: Pose = { ...posesForWidth(mobileQuery.matches)[0] };
	let alive = true;
	let wasLocked = false;
	let prevTargetX = shown.x;
	let prevTargetY = shown.y;

	function resize(): void {
		const width = window.innerWidth;
		const height = Math.max(window.innerHeight, 1);
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		renderer.setSize(width, height, false);
	}

	function applyPose(pose: Pose): void {
		const worldHeight = 2 * Math.tan((cameraFov * Math.PI) / 360) * cameraZ;
		const worldWidth = worldHeight * camera.aspect;
		holder.position.set((pose.x - 0.5) * worldWidth, (0.5 - pose.y) * worldHeight, 0);
		holder.rotation.set(pose.rotX, pose.rotY, pose.rotZ);
		holder.scale.setScalar(Math.max(pose.scale, 0));
	}

	function frame(time: number): void {
		if (!alive) return;
		const { pose, locked } = targetPose(posesForWidth(mobileQuery.matches), reducedMotion);
		const ease = reducedMotion ? 1 : 0.12;
		// Once already glued, carry the mark's scroll delta so shown doesn't lag.
		// First frame of lock skips this so arrival still damps in smoothly.
		if (locked && wasLocked && !reducedMotion) {
			shown.x += pose.x - prevTargetX;
			shown.y += pose.y - prevTargetY;
		}
		wasLocked = locked;
		prevTargetX = pose.x;
		prevTargetY = pose.y;
		shown.x = damp(shown.x, pose.x, ease, reducedMotion ? 1 : 0.012);
		shown.y = damp(shown.y, pose.y, ease, reducedMotion ? 1 : 0.012);
		shown.scale = damp(shown.scale, pose.scale, ease, reducedMotion ? 1 : 0.02);
		shown.rotX = damp(shown.rotX, pose.rotX, ease, reducedMotion ? 1 : 0.035);
		shown.rotY = damp(shown.rotY, pose.rotY, ease, reducedMotion ? 1 : 0.035);
		shown.rotZ = damp(shown.rotZ, pose.rotZ, ease, reducedMotion ? 1 : 0.035);
		applyPose(shown);
		// if (!reducedMotion) {
		// 	const t = time / 1000;
		// 	holder.position.y += Math.sin(t * 0.9) * 0.025;
		// 	holder.position.x += Math.sin(t * 0.6 + 1.3) * 0.01;
		// 	holder.rotation.x += Math.sin(t * 0.7) * 0.03;
		// 	holder.rotation.y += Math.sin(t * 0.5 + 2.1) * 0.05;
		// 	holder.rotation.z += Math.sin(t * 0.55 + 0.4) * 0.02;
		// }
		renderer.render(scene, camera);
		if (!document.hidden) requestAnimationFrame(frame);
	}

	function resume(): void {
		if (!document.hidden && alive) requestAnimationFrame(frame);
	}

	resize();
	window.addEventListener('resize', resize);
	document.addEventListener('visibilitychange', resume);
	requestAnimationFrame(frame);

	const loader = new GLTFLoader();
	loader.load(
		logoUrl,
		(gltf) => {
			if (!alive) return;
			const model = gltf.scene;
			const bounds = new Box3().setFromObject(model);
			const size = bounds.getSize(new Vector3());
			const center = bounds.getCenter(new Vector3());
			const maxDim = Math.max(size.x, size.y, size.z) || 1;
			// Parent scale keeps the centering offset inside the camera frustum.
			const fitted = new Group();
			model.position.sub(center);
			fitted.scale.setScalar(1 / maxDim);
			fitted.add(model);

			const brand = readToken('--color-primary', 'black');
			model.traverse((child) => {
				if (!(child instanceof Mesh)) return;
				const material = child.material;
				if (!material || (Array.isArray(material) && material.length === 0)) {
					child.material = new MeshStandardMaterial({ color: brand, metalness: 0.25, roughness: 0.4 });
				}
			});

			holder.add(fitted);
		},
		undefined,
		() => {
			alive = false;
			renderer.dispose();
			canvas.remove();
		},
	);
}
