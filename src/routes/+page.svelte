<script lang="ts">
	import { quizData } from '$lib/quizData';
	import { fade, fly, slide } from 'svelte/transition';
	import { backOut, cubicOut } from 'svelte/easing';

	// State
	let currentStep = $state('intro'); // 'intro', 'quiz', 'results'
	let currentIndex = $state(0);
	let score = $state(0);
	let selectedAnswer = $state<string | null>(null);
	let isAnswered = $state(false);
	let showExplanation = $state(false);
	let startTime = $state(0);
	let endTime = $state(0);
	let shuffledQuestions = $state<typeof quizData>([]);
	let answers = $state<Array<{ selectedAnswer: string | null; isAnswered: boolean; showExplanation: boolean }>>([]);

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
		const shuffledOrder = shuffleArray(quizData);
		shuffledQuestions = shuffledOrder.map(q => ({
			...q,
			options: shuffleArray(q.options)
		}));
		answers = shuffledQuestions.map(() => ({ selectedAnswer: null, isAnswered: false, showExplanation: false }));
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
		const original = quizData.find(q => q.id === currentQuestion.id)!;
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
	<title>The Carbon Ledger | Hydrocarbon Quiz</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Outfit:wght@300;400;700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-['Outfit'] selection:bg-[#00f2ff] selection:text-[#0a0a0a] overflow-x-hidden">
	<!-- Background Effects -->
	<div class="fixed inset-0 pointer-events-none opacity-20">
		<div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
		<div class="absolute inset-0 bg-gradient-to-br from-[#00f2ff10] via-transparent to-[#bfff0005]"></div>
	</div>

	<div class="relative max-w-4xl mx-auto px-6 py-12 min-h-screen flex flex-col">
		<!-- Header -->
		<header class="flex justify-between items-end mb-12 border-b border-[#ffffff15] pb-6"
			class:hidden={currentStep !== 'intro'}>
			<div>
				<h1 class="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic leading-none">
					The Carbon <span class="text-[#00f2ff]">Ledger</span>
				</h1>
				<p class="text-xs font-['JetBrains_Mono'] uppercase tracking-[0.3em] text-[#888] mt-2">
					System Status: <span class="text-[#bfff00]">Active</span> // Module: Hydrocarbons
				</p>
			</div>
			<div class="hidden md:block text-right">
				<p class="text-[10px] font-['JetBrains_Mono'] uppercase text-[#555]">Classification: Aliphatic</p>
				<p class="text-[10px] font-['JetBrains_Mono'] uppercase text-[#555]">Subject: Methane (CH₄)</p>
			</div>
		</header>

		{#if currentStep === 'intro'}
			<section
				in:fade={{ duration: 800 }}
				class="flex-1 flex flex-col justify-center items-center text-center space-y-8"
			>
				<div class="relative group">
					<div class="absolute -inset-4 bg-[#00f2ff] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"></div>
					<div class="relative bg-[#111] border-2 border-[#333] p-12 md:p-20 rounded-sm skew-x-[-2deg]">
						<h2 class="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready for Calibration?</h2>
						<p class="text-lg text-[#aaa] max-w-md mx-auto mb-10 leading-relaxed font-light">
							Test your knowledge of <span class="text-white font-medium">Hydrocarbons</span>, 
							the chemical properties of <span class="text-white font-medium">Methane</span>, 
							and the mechanisms of <span class="text-white font-medium">Halogenation</span>.
						</p>
						<button
							onclick={startQuiz}
							class="group relative inline-flex items-center justify-center px-12 py-4 font-bold text-white transition-all duration-200 bg-[#00f2ff] hover:bg-[#00d8e4] focus:outline-none rounded-none skew-x-[2deg]"
						>
							<span class="relative uppercase tracking-widest text-sm">Initiate Assessment</span>
							<div class="absolute -bottom-2 -right-2 w-full h-full border-2 border-[#ffffff20] -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
						</button>
					</div>
				</div>
				<p class="text-[10px] font-['JetBrains_Mono'] text-[#444] uppercase tracking-widest">
					Total Items: {shuffledQuestions.length} // Complexity: Undergraduate
				</p>
			</section>
		{:else if currentStep === 'quiz'}
			<section class="flex-1 flex flex-col">
				<!-- Progress bar -->
				<div class="w-full bg-[#222] h-1 mb-6 relative overflow-hidden">
					<div
						class="absolute top-0 left-0 h-full bg-[#00f2ff] transition-all duration-500 ease-out"
						style="width: {progress}%"
					>
						<div class="absolute top-0 right-0 w-8 h-full bg-white blur-md opacity-50"></div>
					</div>
				</div>

				<!-- Navigation Controls -->
				<div class="flex justify-between items-center mb-8">
					<div class="flex gap-2">
						<button
							onclick={prevQuestion}
							disabled={currentIndex === 0}
							class="px-4 py-2 text-xs font-['JetBrains_Mono'] uppercase tracking-widest border border-[#333] text-[#888] hover:border-[#00f2ff] hover:text-[#00f2ff] transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[#333] disabled:hover:text-[#888]"
						>
							{'<'} Previous
						</button>
						<button
							onclick={refreshQuestion}
							class="px-4 py-2 text-xs font-['JetBrains_Mono'] uppercase tracking-widest border border-[#333] text-[#888] hover:border-[#00f2ff] hover:text-[#00f2ff] transition-colors"
						>
							Refresh
						</button>
					</div>
					<button
						onclick={resetQuiz}
						class="px-4 py-2 text-xs font-['JetBrains_Mono'] uppercase tracking-widest border border-[#ff3e0060] text-[#ff3e00] hover:border-[#ff3e00] hover:bg-[#ff3e0010] transition-colors"
					>
						Reset Quiz
					</button>
				</div>

				<div class="flex-1">
					{#key currentIndex}
						<div
							in:fly={{ y: 20, duration: 600, delay: 200, easing: cubicOut }}
							class="space-y-8"
						>
							<div class="flex items-baseline gap-4">
								<span class="text-5xl font-black text-[#ffffff10] font-['JetBrains_Mono']">
									{String(currentIndex + 1).padStart(2, '0')}
								</span>
								<div class="space-y-2">
									<h3 class="text-2xl md:text-3xl font-bold leading-tight">
										{currentQuestion.question}
									</h3>
									{#if currentQuestion.difficulty}
										<span class="inline-block text-[10px] font-['JetBrains_Mono'] uppercase tracking-widest px-2 py-1 rounded
											{currentQuestion.difficulty === 'intermediate' ? 'bg-[#00f2ff20] text-[#00f2ff]' : ''}
											{currentQuestion.difficulty === 'advanced' ? 'bg-[#ff990020] text-[#ff9900]' : ''}
											{currentQuestion.difficulty === 'expert' ? 'bg-[#ff3e0020] text-[#ff3e00]' : ''}">
											{currentQuestion.difficulty}
										</span>
									{/if}
								</div>
							</div>

							{#if currentQuestion.structureIllustration || currentQuestion.reactionScheme}
								<div class="mt-4 p-4 bg-[#111] border border-[#333] rounded-sm">
									{@html currentQuestion.structureIllustration || currentQuestion.reactionScheme}
								</div>
							{/if}

							<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
								{#each currentQuestion.options as option (option)}
									<button
										onclick={() => handleAnswer(option)}
										disabled={isAnswered}
										class="group relative text-left p-6 transition-all duration-200 border-2 rounded-none flex items-center justify-between
											{isAnswered && option === currentQuestion.answer ? 'bg-[#bfff00] border-[#bfff00] text-black' : ''}
											{isAnswered && option === selectedAnswer && option !== currentQuestion.answer ? 'bg-[#ff3e00] border-[#ff3e00] text-white' : ''}
											{!isAnswered ? 'bg-[#111] border-[#333] hover:border-[#00f2ff] hover:translate-y-[-2px]' : ''}
											{isAnswered && option !== currentQuestion.answer && option !== selectedAnswer ? 'bg-[#111] border-[#222] opacity-40' : ''}"
									>
										<span class="text-lg font-medium tracking-tight uppercase">{option}</span>
										{#if isAnswered && option === currentQuestion.answer}
											<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
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
						class="mt-12 p-8 bg-[#1a1a1a] border-l-4 border-[#00f2ff] relative overflow-hidden"
					>
						<div class="absolute top-0 right-0 p-2 opacity-5">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
							</svg>
						</div>
						<h4 class="text-xs font-['JetBrains_Mono'] uppercase tracking-widest text-[#00f2ff] mb-2">Technical Analysis</h4>
						<p class="text-[#ccc] text-lg font-light leading-relaxed">
							{currentQuestion.explanation}
						</p>
					<div class="mt-8 flex justify-between items-center">
						<div class="flex gap-2">
							<button
								onclick={prevQuestion}
								disabled={currentIndex === 0}
								class="px-6 py-3 border border-[#333] text-[#888] font-black uppercase tracking-widest text-sm hover:border-[#00f2ff] hover:text-[#00f2ff] transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[#333] disabled:hover:text-[#888]"
							>
								{'<'} Previous
							</button>
							<button
								onclick={refreshQuestion}
								class="px-6 py-3 border border-[#333] text-[#888] font-black uppercase tracking-widest text-sm hover:border-[#00f2ff] hover:text-[#00f2ff] transition-colors"
							>
								Refresh
							</button>
						</div>
						<button
							onclick={nextQuestion}
							class="px-8 py-3 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-[#00f2ff] transition-colors"
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
				class="flex-1 flex flex-col justify-center items-center"
			>
				<div class="w-full max-w-2xl bg-[#111] border-2 border-[#333] p-12 text-center relative overflow-hidden">
					<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f2ff] to-[#bfff00]"></div>
					
					<h2 class="text-xs font-['JetBrains_Mono'] uppercase tracking-[0.5em] text-[#888] mb-8">Assessment Complete</h2>
					
					<div class="mb-12">
						<div class="text-[120px] font-black leading-none text-white tracking-tighter mb-2">
							{Math.round((score / shuffledQuestions.length) * 100)}<span class="text-3xl text-[#00f2ff]">%</span>
						</div>
						<p class="text-[#666] uppercase tracking-widest font-['JetBrains_Mono'] text-sm">Final Proficiency Score</p>
					</div>

					<div class="grid grid-cols-2 gap-4 mb-12 border-y border-[#ffffff10] py-8">
						<div>
							<p class="text-2xl font-bold text-white">{score} / {shuffledQuestions.length}</p>
							<p class="text-[10px] uppercase tracking-widest text-[#555]">Correct Entries</p>
						</div>
						<div>
							<p class="text-2xl font-bold text-white">{timeTaken}s</p>
							<p class="text-[10px] uppercase tracking-widest text-[#555]">Duration</p>
						</div>
					</div>

					<div class="space-y-4">
						<button
							onclick={startQuiz}
							class="w-full py-4 bg-[#00f2ff] text-black font-black uppercase tracking-widest hover:bg-white transition-colors"
						>
							Recalibrate (Restart)
						</button>
						<button
							onclick={restart}
							class="w-full py-4 bg-transparent border-2 border-[#333] text-white font-black uppercase tracking-widest hover:border-[#00f2ff] transition-colors"
						>
							Return to Terminal
						</button>
					</div>
				</div>
				
				<footer class="mt-12 text-center opacity-30">
					<p class="text-[10px] font-['JetBrains_Mono'] uppercase tracking-widest">
						Certified by the carbon ledger protocol // 2026.05.15
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
		background: #0a0a0a;
	}

	button {
		cursor: pointer;
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
	.hidden {
		display: none;
	}

	@media (min-width: 768px) {
		.hidden {
			display: flex;
		}
	}
</style>
