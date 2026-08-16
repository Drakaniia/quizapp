<script lang="ts">
	import { plantDiversityQuizData } from '$lib/plantDiversityQuizData';
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
	let shuffledQuestions = $state<typeof plantDiversityQuizData>([]);
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

		const shuffledOrder = shuffleArray(plantDiversityQuizData);
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
		const original = plantDiversityQuizData.find((question) => question.id === currentQuestion.id);
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
	<title>Plant Diversity Quiz</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Outfit:wght@300;400;700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main
	class="min-h-screen overflow-x-hidden bg-[#11120b] font-['Outfit'] text-[#f1f3df] selection:bg-[#d7ea58] selection:text-[#11120b]"
>
	<div class="pointer-events-none fixed inset-0 opacity-35">
		<div
			class="absolute inset-0 bg-[linear-gradient(115deg,#d7ea5815_0_18%,transparent_18%_52%,#66c08f12_52%_71%,transparent_71%_100%)]"
		></div>
		<div
			class="absolute inset-0 bg-[linear-gradient(90deg,#ffffff08_1px,transparent_1px),linear-gradient(180deg,#ffffff06_1px,transparent_1px)] bg-[length:34px_34px]"
		></div>
	</div>

	<div class="relative mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-12">
		<nav
			class="mb-6 flex items-center gap-2 font-['JetBrains_Mono'] text-[10px] tracking-widest text-[#888] uppercase"
			aria-label="Breadcrumb"
		>
			<a href={resolve('/')} class="transition-colors hover:text-[#00f2ff]">Home</a>
			<span aria-hidden="true" class="text-[#444]">/</span>
			<span class="text-[#00f2ff]">Plant Diversity</span>
		</nav>
		<header
			class="mb-12 flex items-end justify-between border-b border-[#ffffff18] pb-6"
			class:hidden={currentStep !== 'intro'}
		>
			<div>
				<p
					class="mb-3 font-['JetBrains_Mono'] text-[10px] tracking-[0.35em] text-[#d7ea58] uppercase"
				>
					Botany Module // Plant Diversity
				</p>
				<h1
					class="text-4xl leading-none font-black tracking-tighter text-white uppercase italic md:text-6xl"
				>
					Plant <span class="text-[#66c08f]">Diversity</span>
				</h1>
			</div>
			<div class="hidden text-right md:block">
				<p class="font-['JetBrains_Mono'] text-[10px] text-[#a5aa84] uppercase">
					Source: PDF Extraction
				</p>
				<p class="font-['JetBrains_Mono'] text-[10px] text-[#a5aa84] uppercase">
					Scope: Bryophytes to Angiosperms
				</p>
			</div>
		</header>

		{#if currentStep === 'intro'}
			<section
				in:fade={{ duration: 700 }}
				class="flex flex-1 flex-col items-center justify-center space-y-8 text-center"
			>
				<div class="relative">
					<div
						class="relative border-2 border-[#4f5b2d] bg-[#18190f] p-10 shadow-[12px_12px_0_#060704] md:p-16"
					>
						<div class="mx-auto mb-8 grid max-w-xl grid-cols-2 gap-2 md:grid-cols-4">
							{#each ['Bryophytes', 'Ferns', 'Conifers', 'Angiosperms'] as label (label)}
								<div class="border border-[#ffffff1c] bg-[#11120b] px-3 py-2">
									<p
										class="font-['JetBrains_Mono'] text-[9px] tracking-widest text-[#d7ea58] uppercase"
									>
										{label}
									</p>
								</div>
							{/each}
						</div>
						<h2 class="mb-6 text-3xl font-bold tracking-tight md:text-5xl">Map the Plant Line</h2>
						<p class="mx-auto mb-10 max-w-lg text-lg leading-relaxed font-light text-[#d7dac1]">
							Practice plant evolution, vascular tissue, seedless vascular groups, seed plants,
							gymnosperms, angiosperms, and monocot or eudicot traits.
						</p>
						<button
							onclick={startQuiz}
							class="group relative inline-flex items-center justify-center bg-[#d7ea58] px-12 py-4 font-bold text-[#11120b] transition-all duration-200 hover:bg-white focus:outline-none"
						>
							<span class="relative text-sm tracking-widest uppercase">Start 25-Item Quiz</span>
							<div
								class="absolute -right-2 -bottom-2 -z-10 h-full w-full border-2 border-[#ffffff24] transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
							></div>
						</button>
					</div>
				</div>
				<p class="font-['JetBrains_Mono'] text-[10px] tracking-widest text-[#90966c] uppercase">
					Total Items: {plantDiversityQuizData.length} // Mode: Expert Botany
				</p>
			</section>
		{:else if currentStep === 'quiz'}
			<section class="flex flex-1 flex-col">
				<div class="relative mb-6 h-1 w-full overflow-hidden bg-[#2c311a]">
					<div
						class="absolute top-0 left-0 h-full bg-[#d7ea58] transition-all duration-500 ease-out"
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
							class="border border-[#4f5b2d] px-4 py-2 font-['JetBrains_Mono'] text-xs tracking-widest text-[#c6c99b] uppercase transition-colors hover:border-[#d7ea58] hover:text-[#d7ea58] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#4f5b2d] disabled:hover:text-[#c6c99b]"
						>
							&lt; Previous
						</button>
						<button
							onclick={refreshQuestion}
							class="border border-[#4f5b2d] px-4 py-2 font-['JetBrains_Mono'] text-xs tracking-widest text-[#c6c99b] uppercase transition-colors hover:border-[#d7ea58] hover:text-[#d7ea58]"
						>
							Refresh
						</button>
					</div>
					<button
						onclick={resetQuiz}
						class="border border-[#66c08f70] px-4 py-2 font-['JetBrains_Mono'] text-xs tracking-widest text-[#66c08f] uppercase transition-colors hover:border-[#66c08f] hover:bg-[#66c08f12]"
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
											{currentQuestion.difficulty === 'expert' ? 'bg-[#e08d6420] text-[#e08d64]' : ''}"
										>
											{currentQuestion.difficulty}
										</span>
									{/if}
								</div>
							</div>

							{#if currentQuestion.illustration}
								<div
									class="plant-diversity-illustration overflow-hidden border border-[#4f5b2d] bg-[#18190f] p-3"
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
											? 'border-[#d7ea58] bg-[#d7ea58] text-[#11120b]'
											: ''}
											{isAnswered && option === selectedAnswer && option !== currentQuestion.answer
											? 'border-[#d95d4c] bg-[#d95d4c] text-white'
											: ''}
											{!isAnswered ? 'border-[#4f5b2d] bg-[#18190f] hover:-translate-y-0.5 hover:border-[#66c08f]' : ''}
											{isAnswered && option !== currentQuestion.answer && option !== selectedAnswer
											? 'border-[#34391f] bg-[#18190f] opacity-45'
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
						class="relative mt-12 overflow-hidden border-l-4 border-[#66c08f] bg-[#18190f] p-8"
					>
						<div
							class="absolute top-0 right-0 p-4 font-['JetBrains_Mono'] text-7xl font-black text-white opacity-5"
						>
							{String(currentIndex + 1).padStart(2, '0')}
						</div>
						<h4
							class="mb-2 font-['JetBrains_Mono'] text-xs tracking-widest text-[#66c08f] uppercase"
						>
							Botany Note
						</h4>
						<p class="text-lg leading-relaxed font-light text-[#e0e2c9]">
							{currentQuestion.explanation}
						</p>
						<div class="mt-8 flex flex-wrap items-center justify-between gap-3">
							<div class="flex flex-wrap gap-2">
								<button
									onclick={prevQuestion}
									disabled={currentIndex === 0}
									class="border border-[#4f5b2d] px-6 py-3 text-sm font-black tracking-widest text-[#c6c99b] uppercase transition-colors hover:border-[#d7ea58] hover:text-[#d7ea58] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#4f5b2d] disabled:hover:text-[#c6c99b]"
								>
									&lt; Previous
								</button>
								<button
									onclick={refreshQuestion}
									class="border border-[#4f5b2d] px-6 py-3 text-sm font-black tracking-widest text-[#c6c99b] uppercase transition-colors hover:border-[#d7ea58] hover:text-[#d7ea58]"
								>
									Refresh
								</button>
							</div>
							<button
								onclick={nextQuestion}
								class="bg-white px-8 py-3 text-sm font-black tracking-widest text-[#11120b] uppercase transition-colors hover:bg-[#d7ea58]"
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
					class="relative w-full max-w-2xl overflow-hidden border-2 border-[#4f5b2d] bg-[#18190f] p-10 text-center md:p-12"
				>
					<div
						class="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#d7ea58] via-[#66c08f] to-[#e08d64]"
					></div>
					<h2
						class="mb-8 font-['JetBrains_Mono'] text-xs tracking-[0.5em] text-[#a5aa84] uppercase"
					>
						Plant Assessment Complete
					</h2>

					<div class="mb-12">
						<div
							class="mb-2 text-[96px] leading-none font-black tracking-tighter text-white md:text-[120px]"
						>
							{Math.round((score / shuffledQuestions.length) * 100)}<span
								class="text-3xl text-[#d7ea58]">%</span
							>
						</div>
						<p class="font-['JetBrains_Mono'] text-sm tracking-widest text-[#a5aa84] uppercase">
							Plant Diversity Score
						</p>
					</div>

					<div class="mb-12 grid grid-cols-2 gap-4 border-y border-[#ffffff12] py-8">
						<div>
							<p class="text-2xl font-bold text-white">{score} / {shuffledQuestions.length}</p>
							<p class="text-[10px] tracking-widest text-[#a5aa84] uppercase">Correct Items</p>
						</div>
						<div>
							<p class="text-2xl font-bold text-white">{timeTaken}s</p>
							<p class="text-[10px] tracking-widest text-[#a5aa84] uppercase">Duration</p>
						</div>
					</div>

					<div class="space-y-4">
						<button
							onclick={startQuiz}
							class="w-full bg-[#d7ea58] py-4 font-black tracking-widest text-[#11120b] uppercase transition-colors hover:bg-white"
						>
							Restart Quiz
						</button>
						<button
							onclick={restart}
							class="w-full border-2 border-[#4f5b2d] bg-transparent py-4 font-black tracking-widest text-white uppercase transition-colors hover:border-[#d7ea58]"
						>
							Return to Intro
						</button>
					</div>
				</div>

				<footer class="mt-12 text-center opacity-40">
					<p class="font-['JetBrains_Mono'] text-[10px] tracking-widest uppercase">
						Source extracted from PLANT DIVERSITY.pdf
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
		background: #11120b;
	}

	button {
		cursor: pointer;
	}

	:global(.plant-diversity-illustration svg) {
		display: block;
		width: 100%;
		height: auto;
	}

	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background: #11120b;
	}

	::-webkit-scrollbar-thumb {
		background: #4f5b2d;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #d7ea58;
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
