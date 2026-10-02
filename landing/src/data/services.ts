import { type MediaImage } from './site';

export interface ServiceItem {
	name: string;
	detail?: string;
}

export interface ServiceTab {
	id: string;
	label: string;
	items: ServiceItem[];
	image: MediaImage;
}

export const servicesIntro = {
	title: 'From concept to completion',
	lede: 'Four service lines under one roof, so your signage and the structure holding it up are built by the same team.',
};

export const services: ServiceTab[] = [
	{
		id: 'indoor',
		label: 'Indoor signage',
		items: [
			{ name: 'Wall branding', detail: 'Acrylic, stainless, LED' },
			{ name: 'Wayfinding systems' },
			{ name: 'Directory boards' },
			{ name: 'Indoor neon boxes' },
			{ name: 'Office branding & interior signage' },
		],
		image: {
			src: '/services/indoor signage.png',
			alt: 'Icon Cancer Centre nurse station with wall branding',
		},
	},
	{
		id: 'outdoor',
		label: 'Outdoor signage',
		items: [
			{ name: 'Pylon signs & totems' },
			{ name: 'Outdoor neon boxes' },
			{ name: 'Facade signage' },
			{ name: 'Street & commercial signage' },
		],
		image: {
			src: '/services/outdoor signage.png',
			alt: 'Illuminated Westown View facade letters at night',
		},
	},
	{
		id: 'parking',
		label: 'Parking signage',
		items: [
			{ name: 'Directional signs' },
			{ name: 'Zone identification' },
			{ name: 'Parking slot numbering' },
			{ name: 'Traffic flow & supporting direction signs' },
			{ name: 'Floor & road marking' },
		],
		image: {
			src: '/services/parking signage.jpg',
			alt: 'No exit pylon at Upper West',
		},
	},
	{
		id: 'steel',
		label: 'Steel construction',
		items: [
			{ name: 'Steel structures for signage' },
			{ name: 'Foundation & civil work' },
			{ name: 'Welding & fabrication' },
			{ name: 'Installation with crane' },
			{ name: 'Custom structure projects' },
		],
		image: {
			src: '/services/steel construction.jpg',
			alt: 'Steel-framed lettering at Turyapada Tower, Bali',
		},
	},
];
