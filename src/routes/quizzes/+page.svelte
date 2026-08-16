<script lang="ts">
	import { resolve } from '$app/paths';
	import {
		quizModules,
		quizSubjects,
		totalQuestions,
		type QuizModule,
		type QuizSubject
	} from '$lib/quizzes';
	import QuizCard from '$lib/components/QuizCard.svelte';

	const groups = $derived.by(() => {
		const result: Array<{ subject: QuizSubject; modules: QuizModule[]; start: number }> = [];
		let start = 0;
		for (const subject of quizSubjects) {
			const modules = quizModules.filter((module) => module.subject === subject);
			result.push({ subject, modules, start });
			start += modules.length;
		}
		return result;
	});
</script>

<svelte:head>
	<title>All Quizzes // Study Quizzes</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Outfit:wght@300;400;700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main
	class="min-h-screen overflow-x-hidden bg-[#0a0a0a] font-['Outfit'] text-[#e0e0e0] selection:bg-[#00f2ff] selection:text-[#0a0a0a]"
>
	<!-- Background Effects -->
	<div class="pointer-events-none fixed inset-0 opacity-20">
		<div
			class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
		></div>
		<div
			class="absolute inset-0 bg-gradient-to-br from-[#00f2ff10] via-transparent to-[#bfff0005]"
		></div>
	</div>

	<div class="relative mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-12">
		<!-- Header -->
		<header class="border-b border-[#ffffff15] pb-10">
			<nav
				class="mb-6 flex items-center gap-2 font-['JetBrains_Mono'] text-[10px] tracking-widest text-[#888] uppercase"
				aria-label="Breadcrumb"
			>
				<a href={resolve('/')} class="transition-colors hover:text-[#00f2ff]">Home</a>
				<span aria-hidden="true" class="text-[#444]">/</span>
				<span class="text-[#00f2ff]">All Quizzes</span>
			</nav>
			<p class="font-['JetBrains_Mono'] text-[10px] tracking-[0.3em] text-[#00f2ff] uppercase">
				Quiz Catalog // All Modules
			</p>
			<h1
				class="mt-3 text-5xl leading-[0.95] font-black tracking-tighter text-white uppercase italic md:text-6xl"
			>
				All <span class="text-[#00f2ff]">Quizzes</span>
			</h1>
			<p class="mt-4 max-w-xl text-base leading-relaxed font-light text-[#aaa]">
				{quizModules.length} modules · {totalQuestions} items across {quizSubjects.length} subjects. Select
				a module to land on its intro screen, then initiate the assessment.
			</p>
		</header>

		<!-- Subject Groups -->
		{#each groups as group (group.subject)}
			<section class="mt-12">
				<div
					class="mb-6 flex flex-wrap items-baseline justify-between gap-2 border-b border-[#ffffff10] pb-3"
				>
					<h2
						class="font-['JetBrains_Mono'] text-sm font-bold tracking-[0.3em] text-[#00f2ff] uppercase"
					>
						{group.subject}
					</h2>
					<span class="font-['JetBrains_Mono'] text-[10px] tracking-widest text-[#555] uppercase">
						{group.modules.length} modules · {group.modules.reduce(
							(sum, module) => sum + module.items,
							0
						)} items
					</span>
				</div>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					{#each group.modules as module, i (module.id)}
						<QuizCard {module} index={group.start + i} />
					{/each}
				</div>
			</section>
		{/each}

		<footer class="mt-16 pt-8 text-center opacity-30">
			<p class="font-['JetBrains_Mono'] text-[10px] tracking-widest text-[#888] uppercase">
				College practice modules // All items extracted from lecture materials
			</p>
		</footer>
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background: #0a0a0a;
	}

	/* Custom Scrollbar */
	::-webkit-scrollbar {
		width: 8px;
	}
	::-webkit-scrollbar-track {
		background: #0a0a0a;
	}
	::-webkit-scrollbar-thumb {
		background: #333;
		border-radius: 0;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #00f2ff;
	}
</style>
