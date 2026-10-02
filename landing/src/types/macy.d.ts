declare module 'macy' {
	export interface MacyOptions {
		container: string | HTMLElement;
		columns?: number;
		margin?: number | { x: number; y: number };
		trueOrder?: boolean;
		waitForImages?: boolean;
		breakAt?: Record<number, number | { columns?: number; margin?: number }>;
	}

	export interface MacyInstance {
		recalculate(refresh?: boolean, sync?: boolean): void;
		remove(): void;
	}

	export default function Macy(options: MacyOptions): MacyInstance;
}
