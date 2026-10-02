import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const READY = 'data-reveal-ready';

function revealHeroCopy(): void {
	const copy = document.querySelector<HTMLElement>('.hero .copy');
	if (!copy) return;

	const targets = copy.querySelectorAll<HTMLElement>('.lede, .ctas, .stats');
	if (targets.length === 0) return;

	gsap.from(targets, {
		opacity: 0,
		y: 20,
		duration: 0.75,
		stagger: 0.1,
		ease: 'power2.out',
		delay: 0.15,
		clearProps: 'transform',
	});
}

function revealScrollTargets(): void {
	const targets = gsap.utils.toArray<HTMLElement>(`[data-reveal]:not([${READY}])`);
	if (targets.length === 0) return;

	ScrollTrigger.batch(targets, {
		start: 'top 85%',
		once: true,
		onEnter: (batch) => {
			batch.forEach((el) => el.setAttribute(READY, ''));
			gsap.fromTo(
				batch,
				{ opacity: 0, y: 24 },
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					stagger: 0.08,
					ease: 'power2.out',
					overwrite: 'auto',
					clearProps: 'transform',
				},
			);
		},
	});
}

export function startSectionReveal(): void {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
			el.setAttribute(READY, '');
			el.style.opacity = '1';
			el.style.transform = 'none';
		});
		return;
	}

	revealHeroCopy();
	revealScrollTargets();

	const refresh = () => ScrollTrigger.refresh();
	void document.fonts.ready.then(refresh);
	window.addEventListener('load', refresh, { once: true });
}
