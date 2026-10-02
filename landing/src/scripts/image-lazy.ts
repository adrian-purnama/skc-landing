function hydratePhoto(img: HTMLImageElement): void {
	const src = img.dataset.src;
	if (!src || img.getAttribute('src')) return;

	const markReady = (): void => {
		img.classList.add('is-ready');
	};
	img.addEventListener('load', markReady, { once: true });
	img.addEventListener('error', markReady, { once: true });
	img.src = src;
	img.removeAttribute('data-src');
	if (img.complete && img.naturalWidth > 0) markReady();
}

function markLoaded(el: HTMLElement): void {
	el.classList.add('is-loaded');
}

function bindLoad(el: HTMLElement, img: HTMLImageElement | null): void {
	if (!img) {
		markLoaded(el);
		return;
	}
	if (img.complete && img.naturalWidth > 0) {
		markLoaded(el);
		return;
	}
	img.addEventListener('load', () => markLoaded(el), { once: true });
	img.addEventListener('error', () => markLoaded(el), { once: true });
}

export function startImageLazy(): void {
	document.querySelectorAll<HTMLElement>('[data-logo-card]').forEach((card) => {
		const logo = card.querySelector<HTMLImageElement>('img.logo');
		const photo = card.querySelector<HTMLImageElement>('img.photo[data-src]');
		bindLoad(card, logo);

		const warm = (): void => {
			if (photo) hydratePhoto(photo);
		};

		const host = card.closest('a') ?? card;
		host.addEventListener('pointerenter', warm, { once: true, passive: true });
		host.addEventListener('focusin', warm, { once: true });
	});

	const deferred = document.querySelectorAll<HTMLImageElement>('img.photo[data-src]');
	if (deferred.length > 0 && 'IntersectionObserver' in window) {
		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					const img = entry.target as HTMLImageElement;
					hydratePhoto(img);
					io.unobserve(img);
				}
			},
			{ rootMargin: '200px' },
		);
		deferred.forEach((img) => io.observe(img));
	}

	document.querySelectorAll<HTMLElement>('[data-skeleton-img]').forEach((figure) => {
		bindLoad(figure, figure.querySelector('img'));
	});
}
