export interface Category {
	slug: string;
	label: string;
}

export const categories = [
	{ slug: 'healthcare', label: 'Healthcare' },
	{ slug: 'education', label: 'Education' },
	{ slug: 'commercial-retail', label: 'Commercial & retail' },
	{ slug: 'property-hospitality', label: 'Property & hospitality' },
	{ slug: 'public-landmark', label: 'Public & landmark' },
] as const satisfies readonly Category[];

export type CategorySlug = (typeof categories)[number]['slug'];

export function getCategory(slug: string): Category | undefined {
	return categories.find((category) => category.slug === slug);
}
