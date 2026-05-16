<script lang="ts">
	let isOpen = $state(false);

	const quizTopics = [
		{
			id: 'hydrocarbons',
			title: 'Hydrocarbons & Methane',
			description: 'Properties, reactions, and halogenation',
			href: '/',
			icon: '⚛️'
		},
		{
			id: 'alkenes',
			title: 'Alkenes',
			description: 'Double bonds, isomerism, and addition reactions',
			href: '/alkenes',
			icon: '⬡'
		},
		{
			id: 'alkynes-dienes',
			title: 'Alkynes & Dienes',
			description: 'Triple bonds, conjugation, and reactions',
			href: '/alkynes-dienes',
			icon: '🔗'
		}
	];

	function toggle() {
		isOpen = !isOpen;
	}

	function close() {
		isOpen = false;
	}
</script>

<!-- Mobile hamburger button -->
<button
	class="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#111] border-2 border-[#333] text-white"
	onclick={toggle}
>
	{#if isOpen}
		✕
	{:else}
		☰
	{/if}
</button>

<!-- Overlay -->
{#if isOpen}
	<div class="lg:hidden fixed inset-0 bg-black/50 z-30" onclick={close}></div>
{/if}

<aside
	class="fixed top-0 left-0 h-full w-72 bg-[#0a0a0a] border-r-2 border-[#ffffff15] z-40 flex flex-col p-6
		lg:translate-x-0
		{isOpen ? 'translate-x-0' : '-translate-x-full'}
		transition-transform duration-300"
>
	<!-- Header -->
	<div class="mb-8 pb-6 border-b border-[#ffffff15]">
		<h2 class="text-2xl font-black tracking-tighter text-white uppercase italic">
			Quiz <span class="text-[#00f2ff]">Topics</span>
		</h2>
		<p class="text-[10px] font-['JetBrains_Mono'] uppercase tracking-[0.2em] text-[#555] mt-2">
			Select Module
		</p>
	</div>

	<!-- Nav Links -->
	<nav class="flex-1 space-y-3 overflow-y-auto">
		{#each quizTopics as topic (topic.id)}
			<a
				href={topic.href}
				class="group block p-4 bg-[#111] border-2 border-[#333] hover:border-[#00f2ff] hover:translate-x-1 transition-all duration-200"
				onclick={close}
			>
				<div class="flex items-start gap-3">
					<span class="text-2xl">{topic.icon}</span>
					<div class="flex-1">
						<h3 class="text-sm font-bold text-white group-hover:text-[#00f2ff] transition-colors uppercase tracking-tight">
							{topic.title}
						</h3>
						<p class="text-xs text-[#888] mt-1 leading-relaxed">
							{topic.description}
						</p>
					</div>
				</div>
			</a>
		{/each}
	</nav>

	<!-- Footer -->
	<div class="mt-6 pt-6 border-t border-[#ffffff15]">
		<p class="text-[8px] font-['JetBrains_Mono'] text-[#444] uppercase tracking-widest text-center">
			Carbon Ledger v2.0
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
