import { readdirSync } from 'node:fs';
import { join } from 'node:path';

export interface Logo {
	src: string;
	alt: string;
}

export interface LogoGroup {
	title: string;
	logos: Logo[];
}

const publicDir = join(process.cwd(), 'public');
const imagePattern = /\.(avif|gif|jpe?g|png|webp)$/i;

function loadLogos(folder: string): Logo[] {
	const dir = join(publicDir, folder);

	return readdirSync(dir)
		.filter((name) => imagePattern.test(name))
		.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
		.map((name) => {
			const label = name.replace(/\s*logo\.(avif|gif|jpe?g|png|webp)$/i, '').replace(/[-_]+/g, ' ').trim();

			return {
				src: `/${folder}/${encodeURIComponent(name)}`,
				alt: label || name,
			};
		});
}

export const logoGroups: LogoGroup[] = [
	{ title: 'Clients', logos: loadLogos('client') },
	{ title: 'Contractors', logos: loadLogos('contractor') },
	{ title: 'Designers', logos: loadLogos('designer') },
];
