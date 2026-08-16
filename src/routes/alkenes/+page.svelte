<script lang="ts">
	import { quizData3 } from '$lib/quizData3';
	import { fade, fly, slide } from 'svelte/transition';
	import { backOut, cubicOut } from 'svelte/easing';
	import { resolve } from '$app/paths';

	// State
	let currentStep = $state('intro'); // 'intro', 'quiz', 'results'
	let currentIndex = $state(0);
	let score = $state(0);
	let selectedAnswer = $state<string | null>(null);
	let isAnswered = $state(false);
	let showExplanation = $state(false);
	let startTime = $state(0);
	let endTime = $state(0);
	let shuffledQuestions = $state<typeof quizData3>([]);
	let answers = $state<
		Array<{ selectedAnswer: string | null; isAnswered: boolean; showExplanation: boolean }>
	>([]);

	// Derived
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

	// Actions
	function startQuiz() {
		currentStep = 'quiz';
		currentIndex = 0;
		score = 0;
		isAnswered = false;
		selectedAnswer = null;
		showExplanation = false;
		startTime = Date.now();
		const shuffledOrder = shuffleArray(quizData3);
		shuffledQuestions = shuffledOrder.map((q) => ({
			...q,
			options: shuffleArray(q.options)
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
		const original = quizData3.find((q) => q.id === currentQuestion.id)!;
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
	<title>Alkenes Quiz</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Outfit:wght@300;400;700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main
	class="min-h-screen overflow-x-hidden bg-[#100a12] font-['Outfit'] text-[#f1e6ee] selection:bg-[#ff4fd8] selection:text-[#100a12]"
>
	<!-- Background Effects -->
	<div class="pointer-events-none fixed inset-0 opacity-20">
		<div
			class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
		></div>
		<div
			class="absolute inset-0 bg-gradient-to-br from-[#ff4fd814] via-transparent to-[#ffb3470a]"
		></div>
	</div>

	<div class="relative mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-12">
		<nav
			class="mb-6 flex items-center gap-2 font-['JetBrains_Mono'] text-[10px] tracking-widest text-[#888] uppercase"
			aria-label="Breadcrumb"
		>
			<a href={resolve('/')} class="transition-colors hover:text-[#00f2ff]">Home</a>
			<span aria-hidden="true" class="text-[#444]">/</span>
			<span class="text-[#00f2ff]">Alkenes</span>
		</nav>
		<!-- Header -->
		<header
			class="mb-12 flex items-end justify-between border-b border-[#ffffff15] pb-6"
			class:hidden={currentStep !== 'intro'}
		>
			<div>
				<h1
					class="text-4xl leading-none font-black tracking-tighter text-white uppercase italic md:text-6xl"
				>
					Alkene <span class="text-[#ff4fd8]">Reactions</span>
				</h1>
				<p class="mt-2 font-['JetBrains_Mono'] text-xs tracking-[0.3em] text-[#888] uppercase">
					Reaction Mode: <span class="text-[#ff4fd8]">Active</span> // Module: Alkenes
				</p>
			</div>
			<div class="hidden text-right md:block">
				<p class="font-['JetBrains_Mono'] text-[10px] text-[#555] uppercase">
					Classification: Unsaturated
				</p>
				<p class="font-['JetBrains_Mono'] text-[10px] text-[#555] uppercase">
					Subject: Double Bonds (C=C)
				</p>
			</div>
		</header>

		{#if currentStep === 'intro'}
			<section
				in:fade={{ duration: 800 }}
				class="flex flex-1 flex-col items-center justify-center space-y-8 text-center"
			>
				<div class="group relative">
					<div
						class="absolute -inset-4 bg-[#ff4fd8] opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
					></div>
					<div
						class="relative skew-x-[-2deg] rounded-sm border-2 border-[#3b2635] bg-[#171018] p-12 md:p-20"
					>
						<h2 class="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
							Ready for Calibration?
						</h2>
						<p class="mx-auto mb-10 max-w-md text-lg leading-relaxed font-light text-[#aaa]">
							Test your knowledge of <span class="font-medium text-white">Alkenes</span>,
							<span class="font-medium text-white">Geometric Isomerism</span>, and
							<span class="font-medium text-white">Electrophilic Addition</span> reactions.
						</p>
						<button
							onclick={startQuiz}
							class="group relative inline-flex skew-x-[2deg] items-center justify-center rounded-none bg-[#ff4fd8] px-12 py-4 font-bold text-[#100a12] transition-all duration-200 hover:bg-[#ff8be6] focus:outline-none"
						>
							<span class="relative text-sm tracking-widest uppercase">Initiate Assessment</span>
							<div
								class="absolute -right-2 -bottom-2 -z-10 h-full w-full border-2 border-[#ffffff20] transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
							></div>
						</button>
					</div>
				</div>
				<p class="font-['JetBrains_Mono'] text-[10px] tracking-widest text-[#444] uppercase">
					Total Items: {shuffledQuestions.length} // Complexity: College-Level
				</p>
			</section>
		{:else if currentStep === 'quiz'}
			<section class="flex flex-1 flex-col">
				<!-- Progress bar -->
				<div class="relative mb-6 h-1 w-full overflow-hidden bg-[#222]">
					<div
						class="absolute top-0 left-0 h-full bg-[#ff4fd8] transition-all duration-500 ease-out"
						style="width: {progress}%"
					>
						<div class="absolute top-0 right-0 h-full w-8 bg-white opacity-50 blur-md"></div>
					</div>
				</div>

				<!-- Navigation Controls -->
				<div class="mb-8 flex items-center justify-between">
					<div class="flex gap-2">
						<button
							onclick={prevQuestion}
							disabled={currentIndex === 0}
							class="border border-[#3b2635] px-4 py-2 font-['JetBrains_Mono'] text-xs tracking-widest text-[#a98fa0] uppercase transition-colors hover:border-[#ff4fd8] hover:text-[#ff4fd8] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#3b2635] disabled:hover:text-[#a98fa0]"
						>
							{'<'} Previous
						</button>
						<button
							onclick={refreshQuestion}
							class="border border-[#3b2635] px-4 py-2 font-['JetBrains_Mono'] text-xs tracking-widest text-[#a98fa0] uppercase transition-colors hover:border-[#ff4fd8] hover:text-[#ff4fd8]"
						>
							Refresh
						</button>
					</div>
					<button
						onclick={resetQuiz}
						class="border border-[#ff3e0060] px-4 py-2 font-['JetBrains_Mono'] text-xs tracking-widest text-[#ff3e00] uppercase transition-colors hover:border-[#ff3e00] hover:bg-[#ff3e0010]"
					>
						Reset Quiz
					</button>
				</div>

				<div class="flex-1">
					{#key currentIndex}
						<div in:fly={{ y: 20, duration: 600, delay: 200, easing: cubicOut }} class="space-y-8">
							<div class="flex items-baseline gap-4">
								<span class="font-['JetBrains_Mono'] text-5xl font-black text-[#ffffff10]">
									{String(currentIndex + 1).padStart(2, '0')}
								</span>
								<div class="space-y-2">
									<h3 class="text-2xl leading-tight font-bold md:text-3xl">
										{currentQuestion.question}
									</h3>
									{#if currentQuestion.difficulty}
										<span
											class="inline-block rounded px-2 py-1 font-['JetBrains_Mono'] text-[10px] tracking-widest uppercase
											{currentQuestion.difficulty === 'intermediate' ? 'bg-[#ff4fd820] text-[#ff4fd8]' : ''}
											{currentQuestion.difficulty === 'advanced' ? 'bg-[#ff990020] text-[#ff9900]' : ''}
											{currentQuestion.difficulty === 'expert' ? 'bg-[#ff3e0020] text-[#ff3e00]' : ''}"
										>
											{currentQuestion.difficulty}
										</span>
									{/if}
								</div>
							</div>

							{#if currentQuestion.structureIllustration || currentQuestion.reactionScheme}
								<div class="mt-4 rounded-sm border border-[#333] bg-[#111] p-4">
									{@html currentQuestion.structureIllustration || currentQuestion.reactionScheme}
								</div>
							{/if}

							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								{#each currentQuestion.options as option (option)}
									<button
										onclick={() => handleAnswer(option)}
										disabled={isAnswered}
										class="group relative flex items-center justify-between rounded-none border-2 p-6 text-left transition-all duration-200
											{isAnswered && option === currentQuestion.answer ? 'border-[#bfff00] bg-[#bfff00] text-black' : ''}
											{isAnswered && option === selectedAnswer && option !== currentQuestion.answer
											? 'border-[#ff3e00] bg-[#ff3e00] text-white'
											: ''}
											{!isAnswered ? 'border-[#3b2635] bg-[#171018] hover:translate-y-[-2px] hover:border-[#ff4fd8]' : ''}
											{isAnswered && option !== currentQuestion.answer && option !== selectedAnswer
											? 'border-[#222] bg-[#111] opacity-40'
											: ''}"
									>
										<span class="text-lg font-medium tracking-tight uppercase">{option}</span>
										{#if isAnswered && option === currentQuestion.answer}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-6 w-6"
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

				<!-- Explanation Overlay -->
				{#if showExplanation}
					<div
						in:slide={{ duration: 400, easing: cubicOut }}
						class="relative mt-12 overflow-hidden border-l-4 border-[#ff4fd8] bg-[#171018] p-8"
					>
						<div class="absolute top-0 right-0 p-2 opacity-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-24 w-24"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
								/>
							</svg>
						</div>
						<h4
							class="mb-2 font-['JetBrains_Mono'] text-xs tracking-widest text-[#ff4fd8] uppercase"
						>
							Reaction Note
						</h4>
						<p class="text-lg leading-relaxed font-light text-[#ccc]">
							{currentQuestion.explanation}
						</p>
						<div class="mt-8 flex items-center justify-between">
							<div class="flex gap-2">
								<button
									onclick={prevQuestion}
									disabled={currentIndex === 0}
									class="border border-[#3b2635] px-6 py-3 text-sm font-black tracking-widest text-[#a98fa0] uppercase transition-colors hover:border-[#ff4fd8] hover:text-[#ff4fd8] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#3b2635] disabled:hover:text-[#a98fa0]"
								>
									{'<'} Previous
								</button>
								<button
									onclick={refreshQuestion}
									class="border border-[#3b2635] px-6 py-3 text-sm font-black tracking-widest text-[#a98fa0] uppercase transition-colors hover:border-[#ff4fd8] hover:text-[#ff4fd8]"
								>
									Refresh
								</button>
							</div>
							<button
								onclick={nextQuestion}
								class="bg-white px-8 py-3 text-sm font-black tracking-widest text-black uppercase transition-colors hover:bg-[#ff4fd8]"
							>
								{currentIndex < shuffledQuestions.length - 1 ? 'Continue >' : 'Finish >'}
							</button>
						</div>
					</div>
				{/if}
			</section>
		{:else if currentStep === 'results'}
			<section
				in:fly={{ y: 40, duration: 1000, easing: backOut }}
				class="flex flex-1 flex-col items-center justify-center"
			>
				<div
					class="relative w-full max-w-2xl overflow-hidden border-2 border-[#333] bg-[#111] p-12 text-center"
				>
					<div
						class="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#ff4fd8] to-[#ffb347]"
					></div>

					<h2 class="mb-8 font-['JetBrains_Mono'] text-xs tracking-[0.5em] text-[#888] uppercase">
						Assessment Complete
					</h2>

					<div class="mb-12">
						<div class="mb-2 text-[120px] leading-none font-black tracking-tighter text-white">
							{Math.round((score / shuffledQuestions.length) * 100)}<span
								class="text-3xl text-[#ff4fd8]">%</span
							>
						</div>
						<p class="font-['JetBrains_Mono'] text-sm tracking-widest text-[#666] uppercase">
							Final Proficiency Score
						</p>
					</div>

					<div class="mb-12 grid grid-cols-2 gap-4 border-y border-[#ffffff10] py-8">
						<div>
							<p class="text-2xl font-bold text-white">{score} / {shuffledQuestions.length}</p>
							<p class="text-[10px] tracking-widest text-[#555] uppercase">Correct Entries</p>
						</div>
						<div>
							<p class="text-2xl font-bold text-white">{timeTaken}s</p>
							<p class="text-[10px] tracking-widest text-[#555] uppercase">Duration</p>
						</div>
					</div>

					<div class="space-y-4">
						<button
							onclick={startQuiz}
							class="w-full bg-[#ff4fd8] py-4 font-black tracking-widest text-black uppercase transition-colors hover:bg-white"
						>
							Recalibrate (Restart)
						</button>
						<button
							onclick={restart}
							class="w-full border-2 border-[#333] bg-transparent py-4 font-black tracking-widest text-white uppercase transition-colors hover:border-[#ff4fd8]"
						>
							Return to Terminal
						</button>
					</div>
				</div>

				<footer class="mt-12 text-center opacity-30">
					<p class="font-['JetBrains_Mono'] text-[10px] tracking-widest uppercase">
						Organic chemistry practice module // Alkenes
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
		background: #100a12;
	}

	button {
		cursor: pointer;
	}

	/* Custom Scrollbar */
	::-webkit-scrollbar {
		width: 8px;
	}
	::-webkit-scrollbar-track {
		background: #100a12;
	}
	::-webkit-scrollbar-thumb {
		background: #333;
		border-radius: 0;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #ff4fd8;
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
