<script lang="ts">
	import { resolve } from '$app/paths';
	import { quizModules, quizSubjects, totalQuestions } from '$lib/quizzes';
	import QuizCard from '$lib/components/QuizCard.svelte';

	const featured = $derived(quizModules.filter((module) => module.featured));
</script>

<svelte:head>
	<title>Study Quizzes // College Practice</title>
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
		<!-- Hero -->
		<header
			class="flex flex-col gap-10 border-b border-[#ffffff15] pb-12 md:flex-row md:items-end md:justify-between"
		>
			<div class="max-w-2xl">
				<p class="font-['JetBrains_Mono'] text-[10px] tracking-[0.3em] text-[#00f2ff] uppercase">
					Study Quizzes // College Practice
				</p>
				<h1
					class="mt-4 text-5xl leading-[0.95] font-black tracking-tighter text-white uppercase italic md:text-7xl"
				>
					Calibrate Your<br /><span class="text-[#00f2ff]">Knowledge</span>
				</h1>
				<p class="mt-6 max-w-xl text-base leading-relaxed font-light text-[#aaa] md:text-lg">
					Practice sets extracted from real lectures — chemistry, genetics, microbiology, and
					organismal biology. Pick a module, run the assessment, and track your proficiency.
				</p>
				<div class="mt-8 flex flex-wrap items-center gap-4">
					<a
						href={resolve('/quizzes')}
						class="group relative inline-flex skew-x-[-2deg] items-center justify-center bg-[#00f2ff] px-8 py-4 font-bold text-white transition-all duration-200 hover:bg-[#00d8e4] active:scale-[0.97]"
					>
						<span class="relative text-sm tracking-widest uppercase">Browse All Quizzes</span>
						<div
							class="absolute -right-2 -bottom-2 -z-10 h-full w-full border-2 border-[#ffffff20] transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
						></div>
					</a>
					<a
						href="#featured"
						class="border-2 border-[#333] px-8 py-4 font-['JetBrains_Mono'] text-sm tracking-widest text-[#888] uppercase transition-all duration-200 hover:border-[#00f2ff] hover:text-[#00f2ff] active:scale-[0.97]"
					>
						Explore Featured
					</a>
				</div>
			</div>

			<div class="shrink-0 border-2 border-[#333] bg-[#111] p-5 md:w-56">
				<p class="font-['JetBrains_Mono'] text-[9px] tracking-[0.25em] text-[#555] uppercase">
					System Status: <span class="text-[#bfff00]">Active</span>
				</p>
				<div class="mt-4 space-y-1.5">
					<p class="font-['JetBrains_Mono'] text-[10px] tracking-widest text-[#666] uppercase">
						Modules: {quizModules.length}
					</p>
					<p class="font-['JetBrains_Mono'] text-[10px] tracking-widest text-[#666] uppercase">
						Total Items: {totalQuestions}
					</p>
					<p class="font-['JetBrains_Mono'] text-[10px] tracking-widest text-[#666] uppercase">
						Subjects: {quizSubjects.length}
					</p>
				</div>
			</div>
		</header>

		<!-- Featured Modules -->
		<section id="featured" class="mt-14">
			<div class="mb-8 flex flex-wrap items-end justify-between gap-4">
				<div>
					<p class="font-['JetBrains_Mono'] text-[10px] tracking-[0.3em] text-[#00f2ff] uppercase">
						Select Module
					</p>
					<h2
						class="mt-2 text-3xl font-black tracking-tighter text-white uppercase italic md:text-4xl"
					>
						Featured <span class="text-[#00f2ff]">Modules</span>
					</h2>
				</div>
				<a
					href={resolve('/quizzes')}
					class="group font-['JetBrains_Mono'] text-xs tracking-widest text-[#888] uppercase transition-colors hover:text-[#00f2ff]"
				>
					View All Quizzes
					<span class="inline-block transition-transform group-hover:translate-x-1">→</span>
				</a>
			</div>

			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each featured as module, i (module.id)}
					<QuizCard {module} index={i} />
				{/each}
			</div>
		</section>

		<footer class="mt-auto pt-16 text-center opacity-30">
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
