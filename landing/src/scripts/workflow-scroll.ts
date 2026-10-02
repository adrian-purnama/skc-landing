import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function travel(stops: HTMLElement[]): number {
	const first = stops[0];
	const last = stops[stops.length - 1];
	if (!first || !last) return 0;
	return Math.max(0, last.offsetLeft - first.offsetLeft);
}

function paint(stops: HTMLElement[], progress: number): void {
	const index = progress * Math.max(1, stops.length - 1);

	stops.forEach((stop, i) => {
		const amount = gsap.utils.clamp(0, 1, 1 - Math.abs(i - index));
		stop.style.setProperty('--active', amount.toFixed(3));
	});
}

export function startWorkflowScroll(section: HTMLElement): void {
	const track = section.querySelector<HTMLElement>('[data-workflow-track]');
	const viewport = section.querySelector<HTMLElement>('[data-workflow-viewport]');
	if (!track || !viewport) return;

	const stops = [...track.querySelectorAll<HTMLElement>('.stop')];
	if (stops.length === 0) return;

	const motion = gsap.matchMedia();

	motion.add('(prefers-reduced-motion: no-preference)', () => {
		const tween = gsap.to(track, {
			x: () => -travel(stops),
			ease: 'none',
			scrollTrigger: {
				trigger: section,
				start: 'top top',
				end: () => `+=${travel(stops)}`,
				pin: true,
				scrub: true,
				invalidateOnRefresh: true,
				onUpdate: (self) => paint(stops, self.progress),
			},
		});

		paint(stops, 0);

		const reveal = (card: HTMLElement) => {
			const bounds = viewport.getBoundingClientRect();
			const cardBounds = card.getBoundingClientRect();
			const inView =
				cardBounds.top < window.innerHeight &&
				cardBounds.bottom > 0 &&
				cardBounds.left >= bounds.left - 1 &&
				cardBounds.right <= bounds.right + 1;
			if (inView) return;

			const trigger = tween.scrollTrigger;
			if (!trigger) return;
			const distance = travel(stops);
			if (distance <= 0) return;
			const offset = card.offsetLeft - (stops[0]?.offsetLeft ?? 0);
			const progress = gsap.utils.clamp(0, 1, offset / distance);
			const root = document.documentElement;
			const previous = root.style.scrollBehavior;
			root.style.scrollBehavior = 'auto';
			trigger.scroll(trigger.start + (trigger.end - trigger.start) * progress);
			root.style.scrollBehavior = previous;
		};

		const onFocusIn = (event: FocusEvent) => {
			const target = event.target;
			if (!(target instanceof Element)) return;
			const card = target.closest('li');
			if (!(card instanceof HTMLElement) || !track.contains(card)) return;
			reveal(card);
			requestAnimationFrame(() => reveal(card));
		};

		track.addEventListener('focusin', onFocusIn);
		void document.fonts.ready.then(() => {
			ScrollTrigger.refresh();
		});

		return () => {
			track.removeEventListener('focusin', onFocusIn);
		};
	});

	motion.add('(prefers-reduced-motion: reduce)', () => {
		const sync = () => {
			const distance = travel(stops);
			const progress = distance <= 0 ? 0 : gsap.utils.clamp(0, 1, viewport.scrollLeft / distance);
			paint(stops, progress);
		};
		sync();
		viewport.addEventListener('scroll', sync, { passive: true });
		return () => viewport.removeEventListener('scroll', sync);
	});
}
