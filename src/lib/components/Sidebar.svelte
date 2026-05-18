<script lang="ts">
	import { resolve } from '$app/paths';

	let isOpen = $state(false);

	const quizTopics = [
		{
			id: 'hydrocarbons',
			title: 'Hydrocarbons & Methane',
			description: 'Properties, reactions, and halogenation',
			href: '/',
			icon: 'HC'
		},
		{
			id: 'alkenes',
			title: 'Alkenes',
			description: 'Double bonds, isomerism, and addition reactions',
			href: '/alkenes',
			icon: 'C=C'
		},
		{
			id: 'alkynes-dienes',
			title: 'Alkynes & Dienes',
			description: 'Triple bonds, conjugation, and reactions',
			href: '/alkynes-dienes',
			icon: 'C#C'
		},
		{
			id: 'animal-diversity',
			title: 'Animal Diversity',
			description: 'Phyla, body plans, and chordate concepts',
			href: '/animal-diversity',
			icon: 'AD'
		},
		{
			id: 'plant-diversity',
			title: 'Plant Diversity',
			description: 'Bryophytes, seed plants, and angiosperms',
			href: '/plant-diversity',
			icon: 'PD'
		},
		{
			id: 'systematics',
			title: 'Systematics Tools',
			description: 'Morphology, DNA, barcoding, and NGS',
			href: '/systematics',
			icon: 'ST'
		}
	] as const;

	function toggle() {
		isOpen = !isOpen;
	}

	function close() {
		isOpen = false;
	}
</script>

<!-- Mobile hamburger button -->
<button
	class="fixed top-4 left-4 z-50 border-2 border-[#333] bg-[#111] p-2 text-white lg:hidden"
	onclick={toggle}
>
	{#if isOpen}
		X
	{:else}
		Menu
	{/if}
</button>

<!-- Overlay -->
{#if isOpen}
	<button
		type="button"
		aria-label="Close sidebar"
		class="fixed inset-0 z-30 bg-black/50 lg:hidden"
		onclick={close}
	></button>
{/if}

<aside
	class="fixed top-0 left-0 z-40 flex h-full w-72 flex-col border-r-2 border-[#ffffff15] bg-[#0a0a0a] p-6
		lg:translate-x-0
		{isOpen ? 'translate-x-0' : '-translate-x-full'}
		transition-transform duration-300"
>
	<!-- Header -->
	<div class="mb-8 border-b border-[#ffffff15] pb-6">
		<h2 class="text-2xl font-black tracking-tighter text-white uppercase italic">
			Study <span class="text-[#00f2ff]">Quizzes</span>
		</h2>
		<p class="mt-2 font-['JetBrains_Mono'] text-[10px] tracking-[0.2em] text-[#555] uppercase">
			Select Module
		</p>
	</div>

	<!-- Nav Links -->
	<nav class="flex-1 space-y-3 overflow-y-auto">
		{#each quizTopics as topic (topic.id)}
			<a
				href={resolve(topic.href)}
				class="group block border-2 border-[#333] bg-[#111] p-4 transition-all duration-200 hover:translate-x-1 hover:border-[#00f2ff]"
				onclick={close}
			>
				<div class="flex items-start gap-3">
					<span class="text-2xl">{topic.icon}</span>
					<div class="flex-1">
						<h3
							class="text-sm font-bold tracking-tight text-white uppercase transition-colors group-hover:text-[#00f2ff]"
						>
							{topic.title}
						</h3>
						<p class="mt-1 text-xs leading-relaxed text-[#888]">
							{topic.description}
						</p>
					</div>
				</div>
			</a>
		{/each}
	</nav>

	<!-- Footer -->
	<div class="mt-6 border-t border-[#ffffff15] pt-6">
		<p class="text-center font-['JetBrains_Mono'] text-[8px] tracking-widest text-[#444] uppercase">
			Quiz App v2.0
		</p>
	</div>
</aside>

<style>
	nav::-webkit-scrollbar {
		width: 4px;
	}
	nav::-webkit-scrollbar-track {
		background: #0a0a0a;
	}
	nav::-webkit-scrollbar-thumb {
		background: #333;
	}
	nav::-webkit-scrollbar-thumb:hover {
		background: #00f2ff;
	}
</style>
