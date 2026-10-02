export interface MediaImage {
	src?: string;
	alt: string;
}

export const placeholderSrc = '/placeholder.png';

export const site = {
	name: 'MARQ',
	legalName: 'PT Sumber Kreasi Cemerlang',
	email: 'marketing@kreasicemerlang.co.id',
	url: 'https://kreasicemerlang.co.id',
	title: 'MARQ   Signage & Steel Structure | Sumber Kreasi Cemerlang',
	description:
		'MARQ (PT Sumber Kreasi Cemerlang) designs, fabricates, and installs indoor and outdoor signage plus steel structures across Indonesia from concept to handover for retail, hospitality, property, healthcare, and government projects.',
	ogImage: '/hero/1.jpg',
	logo: '/marq%20logo.svg',
	footerNote: 'Signage design, fabrication, installation & steel structure',
	copyright: '© 2026 MARQ · PT Sumber Kreasi Cemerlang',
};

export const nav = [
	{ label: 'About', href: '/#about' },
	{ label: 'Services', href: '/#services' },
	{ label: 'Workflow', href: '/#workflow' },
	{ label: 'Projects', href: '/#projects' },
	{ label: 'Clients', href: '/#clients' },
] as const;

export const quoteHref = '/#contact';

export const hero = {
	title: 'Brand presence that lasts.',
	lede: site.description,
	primaryCta: { label: 'See our projects', href: '/#projects' },
	secondaryCta: { label: 'Talk to our team', href: '/#contact' },
	stats: [
		{ value: '50+', label: 'Clients & corporate partners' },
		{ value: '15+', label: 'Project coverage cities' },
	],
	image: {
		src: placeholderSrc,
		alt: 'BSI Tower in central Jakarta with its rooftop signage',
	} satisfies MediaImage,
	tag: 'BSI Tower, Jakarta',
};

export interface TimelineItem {
	year: string;
	title: string;
	text: string;
	current?: boolean;
}

export const story = {
	title: 'From SKC to',
	subtitle: 'Same roots. A stronger mark.',
	copy: 'We turn brand identity into something you can see, touch and rely on. Precision you can see. Reliability you can count on.',
	timeline: [
		{
			year: '2023',
			title: 'PT Sumber Kreasi Cemerlang begins',
			text: 'Delivering signage and steel construction solutions for clients across Indonesia.',
		},
		{
			year: '2026',
			title: 'MARQ is introduced',
			text: 'A mark of the higher standard we have grown into, not a new company. Same team, same commitment, stronger execution.',
			current: true,
		},
	] satisfies TimelineItem[],
};

export interface ValueItem {
	letter: string;
	title: string;
	text: string;
}

export const values = {
	title: 'What        stands for',
	lede: 'Four commitments, one for each letter of our name, that guide every sign we build.',
	items: [
		{
			letter: 'M',
			title: 'Mastery',
			text: 'Consistently high standards at every stage of execution, with disciplined craftsmanship and strong technical expertise for precise, reliable results.',
		},
		{
			letter: 'A',
			title: 'Accountability',
			text: 'Transparency, accountability and integrity in every commitment we make and every result we deliver.',
		},
		{
			letter: 'R',
			title: 'Reliability',
			text: 'On-time delivery and dependable solutions that fully meet safety standards and structural requirements.',
		},
		{
			letter: 'Q',
			title: 'Quality driven',
			text: 'Carefully selected materials, precise construction and refined finishing for lasting quality and long-term impact for your brand.',
		},
	] satisfies ValueItem[],
};

export const coverage = {
	title: 'Consistent execution anywhere in Indonesia',
	lede: 'From Medan to Nabire, the same team and the same standard go wherever the project is.',
	cities: [
		'Jabodetabek',
		'Bandung',
		'Pekalongan',
		'Semarang',
		'Yogyakarta',
		'Solo',
		'Surabaya',
		'Malang',
		'Bali',
		'Balikpapan',
		'Medan',
		'Nabire, Papua Barat',
	],
	image: {
		src: '/map.jpg',
		alt: 'Map of Indonesia with MARQ project locations marked across Java, Bali, Sumatra, Kalimantan and Papua',
	} satisfies MediaImage,
};

export const clientsIntro = {
	title: 'Trusted by leading brands',
	lede: "Developers, hospitals, government bodies and the country's largest contractors.",
};

export interface Office {
	city: string;
	lines: readonly [string, string];
	streetAddress: string;
	addressLocality: string;
	addressRegion?: string;
	postalCode: string;
}

export const offices = [
	{
		city: 'Surabaya',
		lines: [
			'Jalan Jemursari II No 23, Jemurwonosari, Wonocolo',
			'Surabaya, Jawa Timur 60237',
		],
		streetAddress: 'Jalan Jemursari II No 23, Jemurwonosari, Wonocolo',
		addressLocality: 'Surabaya',
		addressRegion: 'Jawa Timur',
		postalCode: '60237',
	},
	{
		city: 'Jakarta',
		lines: [
			'Ruko Citywalk Grand Palm, Block D No 3, Jalan Kresek Raya',
			'Duri Kosambi, Cengkareng, Jakarta Barat 11750',
		],
		streetAddress:
			'Ruko Citywalk Grand Palm, Block D No 3, Jalan Kresek Raya, Duri Kosambi, Cengkareng',
		addressLocality: 'Jakarta Barat',
		postalCode: '11750',
	},
	{
		city: 'Workshop',
		lines: [
			'Komplek Industri Pergudangan Yugi, Jalan Kalibaru Blok B No 12A',
			'Kalibaru, Pakuhaji, Tangerang, Banten 15570',
		],
		streetAddress:
			'Komplek Industri Pergudangan Yugi, Jalan Kalibaru Blok B No 12A, Kalibaru, Pakuhaji',
		addressLocality: 'Tangerang',
		addressRegion: 'Banten',
		postalCode: '15570',
	},
] as const satisfies readonly Office[];

export const contact = {
	title: "Let's build your next sign",
	formTitle: 'Request a quote',
	services: [
		'Indoor signage',
		'Outdoor signage',
		'Parking signage',
		'Steel construction & structure',
		'Not sure yet',
	],
};

export const organizationJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: site.name,
	alternateName: ['Sumber Kreasi Cemerlang', 'PT Sumber Kreasi Cemerlang', 'SKC'],
	legalName: site.legalName,
	description: site.description,
	email: site.email,
	url: site.url,
	logo: new URL(site.logo, site.url).href,
	image: new URL(site.ogImage, site.url).href,
	knowsAbout: [
		'signage',
		'outdoor signage',
		'indoor signage',
		'parking signage',
		'steel structure',
		'signage fabrication',
		'signage installation',
	],
	address: offices.map((office) => ({
		'@type': 'PostalAddress',
		streetAddress: office.streetAddress,
		addressLocality: office.addressLocality,
		...(office.addressRegion ? { addressRegion: office.addressRegion } : {}),
		postalCode: office.postalCode,
		addressCountry: 'ID',
	})),
};
