import { readdirSync, readFileSync, statSync } from 'node:fs';
import { basename, extname, join, relative, sep } from 'node:path';
import { categories, getCategory, type Category } from '../data/categories';

// Resolve from process.cwd() (Astro project root). import.meta.url breaks after Vite
// bundles this module for the static build, so readdir would silently return [].
const publicDir = join(process.cwd(), 'public');
const projectsDir = join(publicDir, 'projects');

const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.avif']);

export interface ProjectImage {
	src: string;
	alt: string;
}

export interface Project {
	slug: string;
	title: string;
	place: string;
	featured: boolean;
	category: Category;
	logo: ProjectImage;
	card: ProjectImage;
	gallery: ProjectImage[];
	href: string;
}

interface ProjectMeta {
	title: string;
	place: string;
	featured?: boolean;
}

function isImage(name: string): boolean {
	return imageExtensions.has(extname(name).toLowerCase());
}

function toPublicSrc(absolutePath: string): string {
	const rel = relative(publicDir, absolutePath).split(sep).join('/');
	return `/${rel
		.split('/')
		.map((part) => encodeURIComponent(part))
		.join('/')}`;
}

function isProjectMeta(value: unknown): value is ProjectMeta {
	if (typeof value !== 'object' || value === null) return false;
	const record = value as Record<string, unknown>;
	return (
		typeof record.title === 'string' &&
		record.title.trim() !== '' &&
		typeof record.place === 'string' &&
		record.place.trim() !== '' &&
		(record.featured === undefined || typeof record.featured === 'boolean')
	);
}

function readMeta(file: string): ProjectMeta {
	let raw: unknown;
	try {
		raw = JSON.parse(readFileSync(file, 'utf8'));
	} catch {
		throw new Error(`${file} must be JSON with "title" and "place".`);
	}
	if (!isProjectMeta(raw)) {
		throw new Error(`${file} needs string fields "title" and "place". "featured" is optional.`);
	}
	return {
		title: raw.title.trim(),
		place: raw.place.trim(),
		featured: raw.featured,
	};
}

function findNamedImage(dir: string, base: string): string {
	let names: string[] = [];
	try {
		names = readdirSync(dir);
	} catch {
		throw new Error(`Add a ${base} image in ${dir}.`);
	}
	const matches = names.filter((name) => {
		const stem = basename(name, extname(name)).toLowerCase();
		return stem === base && isImage(name);
	});
	if (matches.length === 1) return join(dir, matches[0] ?? '');
	if (matches.length === 0) {
		throw new Error(`Add one ${base} image in ${dir}, for example ${base}.jpg.`);
	}
	throw new Error(`Keep a single ${base} image in ${dir}.`);
}

function galleryImages(dir: string, alt: string): ProjectImage[] {
	const galleryDir = join(dir, 'gallery');
	let names: string[] = [];
	try {
		if (!statSync(galleryDir).isDirectory()) return [];
		names = readdirSync(galleryDir);
	} catch {
		return [];
	}
	return names
		.filter((name) => isImage(name))
		.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
		.map((name) => ({
			src: toPublicSrc(join(galleryDir, name)),
			alt,
		}));
}

function readProject(category: Category, slug: string): Project {
	if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
		throw new Error(
			`Rename "${category.slug}/${slug}" to a lowercase slug, such as bali-international-hospital.`,
		);
	}
	const dir = join(projectsDir, category.slug, slug);
	const meta = readMeta(join(dir, 'project.json'));
	const alt = `${meta.title}, ${meta.place}`;
	return {
		slug,
		title: meta.title,
		place: meta.place,
		featured: meta.featured ?? false,
		category,
		logo: { src: toPublicSrc(findNamedImage(dir, 'logo')), alt: meta.title },
		card: { src: toPublicSrc(findNamedImage(dir, 'card')), alt },
		gallery: galleryImages(dir, alt),
		href: `/projects/${category.slug}/${slug}`,
	};
}

export function loadProjects(): Project[] {
	let categoryNames: string[] = [];
	try {
		categoryNames = readdirSync(projectsDir);
	} catch {
		return [];
	}

	const order = new Map(categories.map((category, index) => [category.slug, index]));
	const projects: Project[] = [];

	for (const categoryName of categoryNames) {
		const categoryPath = join(projectsDir, categoryName);
		if (!statSync(categoryPath).isDirectory() || categoryName.startsWith('.')) continue;
		const category = getCategory(categoryName);
		if (!category) {
			throw new Error(`Add "${categoryName}" to src/data/categories.ts, or rename that folder.`);
		}
		for (const slug of readdirSync(categoryPath)) {
			const projectPath = join(categoryPath, slug);
			if (!statSync(projectPath).isDirectory() || slug.startsWith('.')) continue;
			projects.push(readProject(category, slug));
		}
	}

	return projects.sort((a, b) => {
		const categoryDelta = (order.get(a.category.slug) ?? 99) - (order.get(b.category.slug) ?? 99);
		if (categoryDelta !== 0) return categoryDelta;
		return a.title.localeCompare(b.title);
	});
}

export function projectsInCategory(projects: Project[], slug: string): Project[] {
	return projects.filter((project) => project.category.slug === slug);
}

export function findProject(category: string, slug: string): Project | undefined {
	return loadProjects().find((project) => project.category.slug === category && project.slug === slug);
}

export function featuredProjects(projects: Project[]): Project[] {
	return projects.filter((project) => project.featured);
}
