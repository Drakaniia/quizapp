<script lang="ts">
	import { systematicsQuizData } from '$lib/systematicsQuizData';
	import { backOut, cubicOut } from 'svelte/easing';
	import { resolve } from '$app/paths';
	import { fade, fly, slide } from 'svelte/transition';

	let currentStep = $state<'intro' | 'quiz' | 'results'>('intro');
	let currentIndex = $state(0);
	let score = $state(0);
	let selectedAnswer = $state<string | null>(null);
	let isAnswered = $state(false);
	let showExplanation = $state(false);
	let startTime = $state(0);
	let endTime = $state(0);
	let shuffledQuestions = $state<typeof systematicsQuizData>([]);
	let answers = $state<
		Array<{ selectedAnswer: string | null; isAnswered: boolean; showExplanation: boolean }>
	>([]);

	const currentQuestion = $derived(shuffledQuestions[currentIndex]);
	const progress = $derived(((currentIndex + 1) / shuffledQuestions.length) * 100);
	const timeTaken = $derived(endTime ? Math.floor((endTime - startTime) / 1000) : 0);

	function shuffleArray<T>(array: T[]): T[] {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	}

	function startQuiz() {
		currentStep = 'quiz';
		currentIndex = 0;
		score = 0;
		isAnswered = false;
		selectedAnswer = null;
		showExplanation = false;
		startTime = Date.now();
		endTime = 0;

		const shuffledOrder = shuffleArray(systematicsQuizData);
		shuffledQuestions = shuffledOrder.map((question) => ({
			...question,
			options: shuffleArray(question.options)
		}));
		answers = shuffledQuestions.map(() => ({
			selectedAnswer: null,
			isAnswered: false,
			showExplanation: false
		}));
	}

	function handleAnswer(option: string) {
		if (isAnswered) return;

		selectedAnswer = option;
		isAnswered = true;
		if (option === currentQuestion.answer) {
			score++;
		}

		answers[currentIndex] = { selectedAnswer: option, isAnswered: true, showExplanation: false };
		setTimeout(() => {
			showExplanation = true;
			answers[currentIndex].showExplanation = true;
		}, 400);
	}

	function nextQuestion() {
		if (currentIndex < shuffledQuestions.length - 1) {
			currentIndex++;
			const saved = answers[currentIndex];
			isAnswered = saved.isAnswered;
			selectedAnswer = saved.selectedAnswer;
			showExplanation = saved.showExplanation;
		} else {
			endTime = Date.now();
			currentStep = 'results';
		}
	}

	function prevQuestion() {
		if (currentIndex > 0) {
			currentIndex--;
			const saved = answers[currentIndex];
			isAnswered = saved.isAnswered;
			selectedAnswer = saved.selectedAnswer;
			showExplanation = saved.showExplanation;
		}
	}

	function refreshQuestion() {
		const original = systematicsQuizData.find((question) => question.id === currentQuestion.id);
		if (!original) return;

		shuffledQuestions[currentIndex] = {
			...original,
			options: shuffleArray(original.options)
		};
		answers[currentIndex] = { selectedAnswer: null, isAnswered: false, showExplanation: false };
		isAnswered = false;
		selectedAnswer = null;
		showExplanation = false;
	}

	function resetQuiz() {
		startQuiz();
	}

	function restart() {
		currentStep = 'intro';
	}
</script>

<svelte:head>
	<title>Approaches and Tools in Systematics Quiz</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Outfit:wght@300;400;700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main
	class="min-h-screen overflow-x-hidden bg-[#10100c] font-['Outfit'] text-[#f1eee3] selection:bg-[#f4c542] selection:text-[#10100c]"
>
	<div class="pointer-events-none fixed inset-0 opacity-30">
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,#f4c5422e,transparent_28%),radial-gradient(circle_at_82%_80%,#3fb6a82f,transparent_32%)]"
		></div>
		<div
			class="absolute inset-0 bg-[linear-gradient(90deg,#ffffff08_1px,transparent_1px),linear-gradient(180deg,#ffffff06_1px,transparent_1px)] bg-[length:36px_36px]"
		></div>
	</div>

	<div class="relative mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-12">
		<nav
			class="mb-6 flex items-center gap-2 font-['JetBrains_Mono'] text-[10px] tracking-widest text-[#888] uppercase"
			aria-label="Breadcrumb"
		>
			<a href={resolve('/')} class="transition-colors hover:text-[#00f2ff]">Home</a>
			<span aria-hidden="true" class="text-[#444]">/</span>
			<span class="text-[#00f2ff]">Systematics Tools</span>
		</nav>
		<header
			class="mb-12 flex items-end justify-between border-b border-[#ffffff18] pb-6"
			class:hidden={currentStep !== 'intro'}
		>
			<div>
				<p
					class="mb-3 font-['JetBrains_Mono'] text-[10px] tracking-[0.35em] text-[#f4c542] uppercase"
				>
					Systematics Module // Approaches and Tools
				</p>
				<h1
					class="text-4xl leading-none font-black tracking-tighter text-white uppercase italic md:text-6xl"
				>
					Systematics <span class="text-[#3fb6a8]">Tools</span>
				</h1>
			</div>
			<div class="hidden text-right md:block">
				<p class="font-['JetBrains_Mono'] text-[10px] text-[#9f9a87] uppercase">Source: PDF OCR</p>
				<p class="font-['JetBrains_Mono'] text-[10px] text-[#9f9a87] uppercase">
					Scope: Morphology to NGS
				</p>
			</div>
		</header>

		{#if currentStep === 'intro'}
			<section
				in:fade={{ duration: 700 }}
				class="flex flex-1 flex-col items-center justify-center space-y-8 text-center"
			>
				<div class="relative">
					<div class="absolute -inset-5 bg-[#f4c542] opacity-20 blur-2xl"></div>
					<div
						class="relative border-2 border-[#50472b] bg-[#17150f] p-10 shadow-[12px_12px_0_#050504] md:p-16"
					>
						<div class="mx-auto mb-8 grid max-w-xl grid-cols-2 gap-2 md:grid-cols-4">
							{#each ['Morphology', 'PCR', 'Barcoding', 'NGS'] as label (label)}
								<div class="border border-[#ffffff1c] bg-[#10100c] px-3 py-2">
									<p
										class="font-['JetBrains_Mono'] text-[9px] tracking-widest text-[#f4c542] uppercase"
									>
										{label}
									</p>
								</div>
							{/each}
						</div>
						<h2 class="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
							Identify the Evidence
						</h2>
						<p class="mx-auto mb-10 max-w-lg text-lg leading-relaxed font-light text-[#d3cbb3]">
							Practice the extracted lecture on morphology tools, diagnostic characters, molecular
							systematics, DNA sequencing, barcoding, NGS, and taxonomic publication sources.
						</p>
						<button
							onclick={startQuiz}
							class="group relative inline-flex items-center justify-center bg-[#f4c542] px-12 py-4 font-bold text-[#10100c] transition-all duration-200 hover:bg-white focus:outline-none"
						>
							<span class="relative text-sm tracking-widest uppercase">Start 25-Item Quiz</span>
							<div
								class="absolute -right-2 -bottom-2 -z-10 h-full w-full border-2 border-[#ffffff24] transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
							></div>
						</button>
					</div>
				</div>
				<p class="font-['JetBrains_Mono'] text-[10px] tracking-widest text-[#8a8062] uppercase">
					Total Items: {systematicsQuizData.length} // Mode: Expert Systematics
				</p>
			</section>
		{:else if currentStep === 'quiz'}
			<section class="flex flex-1 flex-col">
				<div class="relative mb-6 h-1 w-full overflow-hidden bg-[#2a2518]">
					<div
						class="absolute top-0 left-0 h-full bg-[#f4c542] transition-all duration-500 ease-out"
						style="width: {progress}%"
					>
						<div class="absolute top-0 right-0 h-full w-8 bg-white opacity-50 blur-md"></div>
					</div>
				</div>

				<div class="mb-8 flex items-center justify-between gap-4">
					<div class="flex flex-wrap gap-2">
						<button
							onclick={prevQuestion}
							disabled={currentIndex === 0}
							class="border border-[#50472b] px-4 py-2 font-['JetBrains_Mono'] text-xs tracking-widest text-[#c5b98f] uppercase transition-colors hover:border-[#f4c542] hover:text-[#f4c542] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#50472b] disabled:hover:text-[#c5b98f]"
						>
							&lt; Previous
						</button>
						<button
							onclick={refreshQuestion}
							class="border border-[#50472b] px-4 py-2 font-['JetBrains_Mono'] text-xs tracking-widest text-[#c5b98f] uppercase transition-colors hover:border-[#f4c542] hover:text-[#f4c542]"
						>
							Refresh
						</button>
					</div>
					<button
						onclick={resetQuiz}
						class="border border-[#3fb6a870] px-4 py-2 font-['JetBrains_Mono'] text-xs tracking-widest text-[#3fb6a8] uppercase transition-colors hover:border-[#3fb6a8] hover:bg-[#3fb6a812]"
					>
						Reset Quiz
					</button>
				</div>

				<div class="flex-1">
					{#key currentIndex}
						<div in:fly={{ y: 20, duration: 600, delay: 160, easing: cubicOut }} class="space-y-8">
							<div class="flex items-baseline gap-4">
								<span class="font-['JetBrains_Mono'] text-5xl font-black text-[#ffffff12]">
									{String(currentIndex + 1).padStart(2, '0')}
								</span>
								<div class="space-y-2">
									<h3 class="text-2xl leading-tight font-bold md:text-3xl">
										{currentQuestion.question}
									</h3>
									{#if currentQuestion.difficulty}
										<span
											class="inline-block rounded px-2 py-1 font-['JetBrains_Mono'] text-[10px] tracking-widest uppercase
											{currentQuestion.difficulty === 'expert' ? 'bg-[#f16d4d20] text-[#f16d4d]' : ''}"
										>
											{currentQuestion.difficulty}
										</span>
									{/if}
								</div>
							</div>

							{#if currentQuestion.illustration}
								<div
									class="systematics-illustration overflow-hidden border border-[#50472b] bg-[#17150f] p-3"
								>
									{@html currentQuestion.illustration}
								</div>
							{/if}

							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								{#each currentQuestion.options as option (option)}
									<button
										onclick={() => handleAnswer(option)}
										disabled={isAnswered}
										class="group relative flex min-h-24 items-center justify-between border-2 p-6 text-left transition-all duration-200
											{isAnswered && option === currentQuestion.answer
											? 'border-[#f4c542] bg-[#f4c542] text-[#10100c]'
											: ''}
											{isAnswered && option === selectedAnswer && option !== currentQuestion.answer
											? 'border-[#d65c47] bg-[#d65c47] text-white'
											: ''}
											{!isAnswered ? 'border-[#50472b] bg-[#17150f] hover:-translate-y-0.5 hover:border-[#3fb6a8]' : ''}
											{isAnswered && option !== currentQuestion.answer && option !== selectedAnswer
											? 'border-[#352f20] bg-[#17150f] opacity-45'
											: ''}"
									>
										<span class="text-lg font-medium tracking-tight">{option}</span>
										{#if isAnswered && option === currentQuestion.answer}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-6 w-6 shrink-0"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="3"
													d="M5 13l4 4L19 7"
												/>
											</svg>
										{/if}
									</button>
								{/each}
							</div>
						</div>
					{/key}
				</div>

				{#if showExplanation}
					<div
						in:slide={{ duration: 400, easing: cubicOut }}
						class="relative mt-12 overflow-hidden border-l-4 border-[#3fb6a8] bg-[#17150f] p-8"
					>
						<div
							class="absolute top-0 right-0 p-4 font-['JetBrains_Mono'] text-7xl font-black text-white opacity-5"
						>
							{String(currentIndex + 1).padStart(2, '0')}
						</div>
						<h4
							class="mb-2 font-['JetBrains_Mono'] text-xs tracking-widest text-[#3fb6a8] uppercase"
						>
							Evidence Note
						</h4>
						<p class="text-lg leading-relaxed font-light text-[#ded8c5]">
							{currentQuestion.explanation}
						</p>
						<div class="mt-8 flex flex-wrap items-center justify-between gap-3">
							<div class="flex flex-wrap gap-2">
								<button
									onclick={prevQuestion}
									disabled={currentIndex === 0}
									class="border border-[#50472b] px-6 py-3 text-sm font-black tracking-widest text-[#c5b98f] uppercase transition-colors hover:border-[#f4c542] hover:text-[#f4c542] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#50472b] disabled:hover:text-[#c5b98f]"
								>
									&lt; Previous
								</button>
								<button
									onclick={refreshQuestion}
									class="border border-[#50472b] px-6 py-3 text-sm font-black tracking-widest text-[#c5b98f] uppercase transition-colors hover:border-[#f4c542] hover:text-[#f4c542]"
								>
									Refresh
								</button>
							</div>
							<button
								onclick={nextQuestion}
								class="bg-white px-8 py-3 text-sm font-black tracking-widest text-[#10100c] uppercase transition-colors hover:bg-[#f4c542]"
							>
								{currentIndex < shuffledQuestions.length - 1 ? 'Continue >' : 'Finish >'}
							</button>
						</div>
					</div>
				{/if}
			</section>
		{:else if currentStep === 'results'}
			<section
				in:fly={{ y: 40, duration: 900, easing: backOut }}
				class="flex flex-1 flex-col items-center justify-center"
			>
				<div
					class="relative w-full max-w-2xl overflow-hidden border-2 border-[#50472b] bg-[#17150f] p-10 text-center md:p-12"
				>
					<div
						class="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#f4c542] via-[#3fb6a8] to-[#f16d4d]"
					></div>
					<h2
						class="mb-8 font-['JetBrains_Mono'] text-xs tracking-[0.5em] text-[#9f9a87] uppercase"
					>
						Systematics Assessment Complete
					</h2>

					<div class="mb-12">
						<div
							class="mb-2 text-[96px] leading-none font-black tracking-tighter text-white md:text-[120px]"
						>
							{Math.round((score / shuffledQuestions.length) * 100)}<span
								class="text-3xl text-[#f4c542]">%</span
							>
						</div>
						<p class="font-['JetBrains_Mono'] text-sm tracking-widest text-[#9f9a87] uppercase">
							Systematics Tools Score
						</p>
					</div>

					<div class="mb-12 grid grid-cols-2 gap-4 border-y border-[#ffffff12] py-8">
						<div>
							<p class="text-2xl font-bold text-white">{score} / {shuffledQuestions.length}</p>
							<p class="text-[10px] tracking-widest text-[#9f9a87] uppercase">Correct Items</p>
						</div>
						<div>
							<p class="text-2xl font-bold text-white">{timeTaken}s</p>
							<p class="text-[10px] tracking-widest text-[#9f9a87] uppercase">Duration</p>
						</div>
					</div>

					<div class="space-y-4">
						<button
							onclick={startQuiz}
							class="w-full bg-[#f4c542] py-4 font-black tracking-widest text-[#10100c] uppercase transition-colors hover:bg-white"
						>
							Restart Quiz
						</button>
						<button
							onclick={restart}
							class="w-full border-2 border-[#50472b] bg-transparent py-4 font-black tracking-widest text-white uppercase transition-colors hover:border-[#f4c542]"
						>
							Return to Intro
						</button>
					</div>
				</div>

				<footer class="mt-12 text-center opacity-40">
					<p class="font-['JetBrains_Mono'] text-[10px] tracking-widest uppercase">
						Source extracted from Approaches and Tools in Systematics.pdf
					</p>
				</footer>
			</section>
		{/if}
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background: #10100c;
	}

	button {
		cursor: pointer;
	}

	:global(.systematics-illustration svg) {
		display: block;
		width: 100%;
		height: auto;
	}

	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background: #10100c;
	}

	::-webkit-scrollbar-thumb {
		background: #50472b;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #f4c542;
	}

	.hidden {
		display: none;
	}

	@media (min-width: 768px) {
		.hidden {
			display: flex;
		}
	}
</style>
