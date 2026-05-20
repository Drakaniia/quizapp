<script lang="ts">
	import { humanGeneticsQuizData } from '$lib/humanGeneticsQuizData';
	import { backOut, cubicOut } from 'svelte/easing';
	import { fade, fly, slide } from 'svelte/transition';

	let currentStep = $state<'intro' | 'quiz' | 'results'>('intro');
	let currentIndex = $state(0);
	let score = $state(0);
	let selectedAnswer = $state<string | null>(null);
	let isAnswered = $state(false);
	let showExplanation = $state(false);
	let startTime = $state(0);
	let endTime = $state(0);
	let shuffledQuestions = $state<typeof humanGeneticsQuizData>([]);
	let answers = $state<
		Array<{ selectedAnswer: string | null; isAnswered: boolean; showExplanation: boolean }>
	>([]);

	const currentQuestion = $derived(shuffledQuestions[currentIndex]);
	const progress = $derived(
		shuffledQuestions.length ? ((currentIndex + 1) / shuffledQuestions.length) * 100 : 0
	);
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

		const shuffledOrder = shuffleArray(humanGeneticsQuizData);
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
		const original = humanGeneticsQuizData.find((question) => question.id === currentQuestion.id);
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
	<title>Human Genetics College Quiz</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Outfit:wght@300;400;700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main
	class="min-h-screen overflow-x-hidden bg-[#120f13] font-['Outfit'] text-[#f4edf1] selection:bg-[#ff5aa5] selection:text-[#120f13]"
>
	<div class="pointer-events-none fixed inset-0 opacity-35">
		<div
			class="absolute inset-0 bg-[linear-gradient(120deg,#ff5aa51c_0_16%,transparent_16%_54%,#40d6c418_54%_70%,transparent_70%_100%)]"
		></div>
		<div
			class="absolute inset-0 bg-[linear-gradient(90deg,#ffffff08_1px,transparent_1px),linear-gradient(180deg,#ffffff06_1px,transparent_1px)] bg-[length:32px_32px]"
		></div>
	</div>

	<div class="relative mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-12">
		<header
			class="mb-12 flex items-end justify-between border-b border-[#ffffff18] pb-6"
			class:hidden={currentStep !== 'intro'}
		>
			<div>
				<p
					class="mb-3 font-['JetBrains_Mono'] text-[10px] tracking-[0.35em] text-[#ff5aa5] uppercase"
				>
					Cytogenetics Module // Human Genetics
				</p>
				<h1
					class="text-4xl leading-none font-black tracking-tighter text-white uppercase italic md:text-6xl"
				>
					Human <span class="text-[#40d6c4]">Genetics</span>
				</h1>
			</div>
			<div class="hidden text-right md:block">
				<p class="font-['JetBrains_Mono'] text-[10px] text-[#b7a9b4] uppercase">
					Source: PDF Extraction
				</p>
				<p class="font-['JetBrains_Mono'] text-[10px] text-[#b7a9b4] uppercase">
					Scope: College Cytogenetics
				</p>
			</div>
		</header>

		{#if currentStep === 'intro'}
			<section
				in:fade={{ duration: 700 }}
				class="flex flex-1 flex-col items-center justify-center space-y-8 text-center"
			>
				<div
					class="relative border-2 border-[#4c3141] bg-[#19131a] p-10 shadow-[12px_12px_0_#060407] md:p-16"
				>
					<div class="mx-auto mb-8 grid max-w-xl grid-cols-2 gap-2 md:grid-cols-4">
						{#each ['Karyotypes', 'Aneuploids', 'Metabolism', 'Behavior'] as label (label)}
							<div class="border border-[#ffffff1c] bg-[#120f13] px-3 py-2">
								<p
									class="font-['JetBrains_Mono'] text-[9px] tracking-widest text-[#ff5aa5] uppercase"
								>
									{label}
								</p>
							</div>
						{/each}
					</div>
					<h2 class="mb-6 text-3xl font-bold tracking-tight md:text-5xl">Analyze the Karyotype</h2>
					<p class="mx-auto mb-10 max-w-lg text-lg leading-relaxed font-light text-[#d8cbd5]">
						Work through case-based questions on chromosomal disorders, inborn errors, point
						mutations, and behavioral genetics.
					</p>
					<button
						onclick={startQuiz}
						class="group relative inline-flex items-center justify-center bg-[#ff5aa5] px-12 py-4 font-bold text-[#120f13] transition-all duration-200 hover:bg-white focus:outline-none"
					>
						<span class="relative text-sm tracking-widest uppercase">Start 30-Item Quiz</span>
						<div
							class="absolute -right-2 -bottom-2 -z-10 h-full w-full border-2 border-[#ffffff24] transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
						></div>
					</button>
				</div>
				<p class="font-['JetBrains_Mono'] text-[10px] tracking-widest text-[#8d7e89] uppercase">
					Total Items: {humanGeneticsQuizData.length} // Mode: Advanced Cases
				</p>
			</section>
		{:else if currentStep === 'quiz'}
			<section class="flex flex-1 flex-col">
				<div class="relative mb-6 h-1 w-full overflow-hidden bg-[#2a1d27]">
					<div
						class="absolute top-0 left-0 h-full bg-[#ff5aa5] transition-all duration-500 ease-out"
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
							class="border border-[#4c3141] px-4 py-2 font-['JetBrains_Mono'] text-xs tracking-widest text-[#c9b9c5] uppercase transition-colors hover:border-[#ff5aa5] hover:text-[#ff5aa5] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#4c3141] disabled:hover:text-[#c9b9c5]"
						>
							&lt; Previous
						</button>
						<button
							onclick={refreshQuestion}
							class="border border-[#4c3141] px-4 py-2 font-['JetBrains_Mono'] text-xs tracking-widest text-[#c9b9c5] uppercase transition-colors hover:border-[#ff5aa5] hover:text-[#ff5aa5]"
						>
							Refresh
						</button>
					</div>
					<button
						onclick={resetQuiz}
						class="border border-[#40d6c470] px-4 py-2 font-['JetBrains_Mono'] text-xs tracking-widest text-[#40d6c4] uppercase transition-colors hover:border-[#40d6c4] hover:bg-[#40d6c412]"
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
									<span
										class="inline-block rounded px-2 py-1 font-['JetBrains_Mono'] text-[10px] tracking-widest uppercase
										{currentQuestion.difficulty === 'advanced' ? 'bg-[#ff5aa520] text-[#ff5aa5]' : ''}
										{currentQuestion.difficulty === 'expert' ? 'bg-[#f7c74420] text-[#f7c744]' : ''}"
									>
										{currentQuestion.difficulty}
									</span>
								</div>
							</div>

							{#if currentQuestion.illustration}
								<div
									class="human-genetics-illustration overflow-hidden border border-[#4c3141] bg-[#19131a] p-3"
								>
									{@html currentQuestion.illustration}
								</div>
							{/if}

							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								{#each currentQuestion.options as option (option)}
									<button
										onclick={() => handleAnswer(option)}
										disabled={isAnswered}
										class="group relative flex min-h-28 items-center justify-between border-2 p-5 text-left transition-all duration-200
											{isAnswered && option === currentQuestion.answer
											? 'border-[#f7c744] bg-[#f7c744] text-[#120f13]'
											: ''}
											{isAnswered && option === selectedAnswer && option !== currentQuestion.answer
											? 'border-[#d95757] bg-[#d95757] text-white'
											: ''}
											{!isAnswered ? 'border-[#4c3141] bg-[#19131a] hover:-translate-y-0.5 hover:border-[#40d6c4]' : ''}
											{isAnswered && option !== currentQuestion.answer && option !== selectedAnswer
											? 'border-[#2f202b] bg-[#19131a] opacity-45'
											: ''}"
									>
										<span class="text-base leading-snug font-semibold tracking-tight md:text-lg">
											{option}
										</span>
										{#if isAnswered && option === currentQuestion.answer}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="ml-3 h-6 w-6 shrink-0"
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
						class="relative mt-12 overflow-hidden border-l-4 border-[#40d6c4] bg-[#19131a] p-8"
					>
						<div
							class="absolute top-0 right-0 p-4 font-['JetBrains_Mono'] text-7xl font-black text-white opacity-5"
						>
							{String(currentIndex + 1).padStart(2, '0')}
						</div>
						<h4
							class="mb-2 font-['JetBrains_Mono'] text-xs tracking-widest text-[#40d6c4] uppercase"
						>
							Genetics Note
						</h4>
						<p class="text-lg leading-relaxed font-light text-[#dfd4dc]">
							{currentQuestion.explanation}
						</p>
						<div class="mt-8 flex flex-wrap items-center justify-between gap-3">
							<div class="flex flex-wrap gap-2">
								<button
									onclick={prevQuestion}
									disabled={currentIndex === 0}
									class="border border-[#4c3141] px-6 py-3 text-sm font-black tracking-widest text-[#c9b9c5] uppercase transition-colors hover:border-[#ff5aa5] hover:text-[#ff5aa5] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#4c3141] disabled:hover:text-[#c9b9c5]"
								>
									&lt; Previous
								</button>
								<button
									onclick={refreshQuestion}
									class="border border-[#4c3141] px-6 py-3 text-sm font-black tracking-widest text-[#c9b9c5] uppercase transition-colors hover:border-[#ff5aa5] hover:text-[#ff5aa5]"
								>
									Refresh
								</button>
							</div>
							<button
								onclick={nextQuestion}
								class="bg-white px-8 py-3 text-sm font-black tracking-widest text-[#120f13] uppercase transition-colors hover:bg-[#ff5aa5]"
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
					class="relative w-full max-w-2xl overflow-hidden border-2 border-[#4c3141] bg-[#19131a] p-10 text-center md:p-12"
				>
					<div
						class="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#ff5aa5] via-[#40d6c4] to-[#f7c744]"
					></div>
					<h2
						class="mb-8 font-['JetBrains_Mono'] text-xs tracking-[0.5em] text-[#b7a9b4] uppercase"
					>
						Genetics Assessment Complete
					</h2>

					<div class="mb-12">
						<div
							class="mb-2 text-[96px] leading-none font-black tracking-tighter text-white md:text-[120px]"
						>
							{Math.round((score / shuffledQuestions.length) * 100)}<span
								class="text-3xl text-[#ff5aa5]">%</span
							>
						</div>
						<p class="font-['JetBrains_Mono'] text-sm tracking-widest text-[#b7a9b4] uppercase">
							Human Genetics Score
						</p>
					</div>

					<div class="mb-12 grid grid-cols-2 gap-4 border-y border-[#ffffff12] py-8">
						<div>
							<p class="text-2xl font-bold text-white">{score} / {shuffledQuestions.length}</p>
							<p class="text-[10px] tracking-widest text-[#b7a9b4] uppercase">Correct Items</p>
						</div>
						<div>
							<p class="text-2xl font-bold text-white">{timeTaken}s</p>
							<p class="text-[10px] tracking-widest text-[#b7a9b4] uppercase">Duration</p>
						</div>
					</div>

					<div class="space-y-4">
						<button
							onclick={startQuiz}
							class="w-full bg-[#ff5aa5] py-4 font-black tracking-widest text-[#120f13] uppercase transition-colors hover:bg-white"
						>
							Restart Quiz
						</button>
						<button
							onclick={restart}
							class="w-full border-2 border-[#4c3141] bg-transparent py-4 font-black tracking-widest text-white uppercase transition-colors hover:border-[#ff5aa5]"
						>
							Return to Intro
						</button>
					</div>
				</div>

				<footer class="mt-12 text-center opacity-40">
					<p class="font-['JetBrains_Mono'] text-[10px] tracking-widest uppercase">
						Source extracted from 8_lec-16-human-genetics-b.pdf
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
		background: #120f13;
	}

	button {
		cursor: pointer;
	}

	:global(.human-genetics-illustration svg) {
		display: block;
		width: 100%;
		height: auto;
	}

	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background: #120f13;
	}

	::-webkit-scrollbar-thumb {
		background: #4c3141;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #ff5aa5;
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
