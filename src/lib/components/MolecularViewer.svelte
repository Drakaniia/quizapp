<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	interface ViewerStyle {
		cartoon?: Record<string, unknown>;
		stick?: Record<string, unknown>;
		sphere?: Record<string, unknown>;
		line?: Record<string, unknown>;
	}

	interface HighlightSpec {
		chain?: string;
		resi?: number | number[];
		color?: string;
		style?: 'stick' | 'sphere' | 'cartoon';
	}

	let {
		pdbId,
		style = 'cartoon',
		colorScheme = 'spectrum',
		height = 340,
		backgroundColor = '#171312',
		autoRotate = true,
		highlights,
		title
	}: {
		pdbId: string;
		style?: 'cartoon' | 'stick' | 'sphere' | 'surface';
		colorScheme?: 'spectrum' | 'chain' | 'secondary' | 'amino';
		height?: number;
		backgroundColor?: string;
		autoRotate?: boolean;
		highlights?: HighlightSpec[];
		title?: string;
	} = $props();

	let viewerEl: HTMLDivElement;
	let loading = $state(true);
	let error = $state<string | null>(null);
	let viewer: unknown = null;

	function buildStyle(selStyle: string, selColor: string): ViewerStyle {
		const colorMap: Record<string, string> = {
			spectrum: 'spectrum',
			chain: 'chain',
			secondary: 'ssJmol',
			amino: 'amino'
		};
		const color = colorMap[selColor] || 'spectrum';

		switch (selStyle) {
			case 'stick':
				return { stick: { radius: 0.15, colorscheme: color } };
			case 'sphere':
				return { sphere: { scale: 0.6, colorscheme: color } };
			case 'surface':
				return { cartoon: { color: 'grey' }, surface: { opacity: 0.7, colorscheme: color } };
			case 'cartoon':
			default:
				return { cartoon: { color: color } };
		}
	}

	function applyHighlights(_mol3d: unknown, view: unknown, specs?: HighlightSpec[]) {
		if (!specs || !view) return;
		for (const h of specs) {
			const sel: Record<string, unknown> = {};
			if (h.chain) sel.chain = h.chain;
			if (h.resi !== undefined) sel.resi = h.resi;
			(view as Record<string, unknown>).addStyle(
				sel,
				((h.style === 'stick'
					? { stick: { radius: 0.2, color: h.color || '#ff6b6b' } }
					: h.style === 'sphere'
						? { sphere: { scale: 0.5, color: h.color || '#ff6b6b' } }
						: { cartoon: { color: h.color || '#ff6b6b' } }) as ViewerStyle)
			);
		}
	}

	onMount(async () => {
		if (!browser) return;

		try {
			const mol3d = await import('3dmol');
			const view = (mol3d as Record<string, unknown>).createViewer(
				viewerEl,
				{ backgroundColor }
			);
			viewer = view;

			const resp = await fetch(`https://files.rcsb.org/download/${pdbId}.pdb`);
			if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
			const pdbData = await resp.text();

			(view as Record<string, unknown>).addModel(pdbData, 'pdb');
			(view as Record<string, unknown>).setStyle({}, buildStyle(style, colorScheme));
			if (highlights) applyHighlights(mol3d, view, highlights);
			(view as Record<string, unknown>).zoomTo();
			(view as Record<string, unknown>).render();

			if (autoRotate) {
				(view as Record<string, unknown>).spin('y');
			}

			loading = false;
		} catch (e) {
			error = e instanceof Error ? e.message : 'Failed to load structure';
			loading = false;
		}
	});

	onDestroy(() => {
		if (viewer) {
			try {
				(viewer as Record<string, unknown>).clear();
			} catch {
				// ignore cleanup errors
			}
		}
	});

</script>

<div class="mol-wrapper" style="height:{height}px">
	{#if title}
		<div class="mol-header">
			<span class="mol-badge">{pdbId}</span>
			<span class="mol-title">{title}</span>
		</div>
	{/if}

	<div class="mol-viewer" bind:this={viewerEl} role="application" aria-label="Interactive 3D molecular structure of {pdbId}"></div>

	{#if loading}
		<div class="mol-overlay">
			<div class="mol-spinner"></div>
			<span>Loading structure…</span>
		</div>
	{/if}

	{#if error}
		<div class="mol-overlay mol-error">
			<span>⚠ {error}</span>
		</div>
	{/if}

	<div class="mol-footer">
		<span>Drag to rotate · Scroll to zoom</span>
		<span class="mol-credit">PDB {pdbId} · RCSB.org</span>
	</div>
</div>

<style>
	.mol-wrapper {
		position: relative;
		width: 100%;
		overflow: hidden;
		border: 1px solid #ffffff15;
		background: #171312;
	}

	.mol-header {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.6rem 1rem;
		background: linear-gradient(180deg, rgba(23, 19, 18, 0.85) 60%, transparent);
		pointer-events: none;
	}

	.mol-badge {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.6rem;
		font-weight: 700;
		color: #171312;
		background: var(--tertiary, #a78bfa);
		padding: 0.15rem 0.4rem;
		border-radius: 2px;
		letter-spacing: 0.05em;
	}

	.mol-title {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.7rem;
		color: #c4b8ad;
		letter-spacing: 0.05em;
	}

	.mol-viewer {
		width: 100%;
		height: 100%;
		cursor: grab;
	}

	.mol-viewer:active {
		cursor: grabbing;
	}

	.mol-overlay {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		background: rgba(23, 19, 18, 0.7);
		color: #c4b8ad;
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.75rem;
		pointer-events: none;
		z-index: 5;
	}

	.mol-error {
		color: #ff6b6b;
	}

	.mol-spinner {
		width: 1.5rem;
		height: 1.5rem;
		border: 2px solid #ffffff15;
		border-top-color: var(--tertiary, #a78bfa);
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.mol-footer {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 10;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 1rem;
		background: linear-gradient(0deg, rgba(23, 19, 18, 0.85) 60%, transparent);
	}

	.mol-footer span {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.58rem;
		color: #ffffff55;
	}

	.mol-credit {
		opacity: 0.6;
	}
</style>
