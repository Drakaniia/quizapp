<script lang="ts">
	import { backOut, cubicOut } from 'svelte/easing';
	import { fade, fly, slide } from 'svelte/transition';
	import type { Question, QuizColors } from '$lib/collegeQuizTypes';

	interface QuizProps {
		quizData: Question[];
		headTitle: string;
		eyebrow: string;
		title: string;
		accentTitle: string;
		source: string;
		scope: string;
		topics: string[];
		introTitle: string;
		introText: string;
		noteTitle: string;
		resultTitle: string;
		scoreLabel: string;
		footer: string;
		colors: QuizColors;
	}

	let {
		quizData,
		headTitle,
		eyebrow,
		title,
		accentTitle,
		source,
		scope,
		topics,
		introTitle,
		introText,
		noteTitle,
		resultTitle,
		scoreLabel,
		footer,
		colors
	}: QuizProps = $props();

	let currentStep = $state<'intro' | 'quiz' | 'results'>('intro');
	let currentIndex = $state(0);
	let score = $state(0);
	let selectedAnswer = $state<string | null>(null);
	let isAnswered = $state(false);
	let showExplanation = $state(false);
	let startTime = $state(0);
	let endTime = $state(0);
	let shuffledQuestions = $state<Question[]>([]);
	let answers = $state<
		Array<{ selectedAnswer: string | null; isAnswered: boolean; showExplanation: boolean }>
	>([]);

	const currentQuestion = $derived(shuffledQuestions[currentIndex]);
	const progress = $derived(
		shuffledQuestions.length ? ((currentIndex + 1) / shuffledQuestions.length) * 100 : 0
	);
	const timeTaken = $derived(endTime ? Math.floor((endTime - startTime) / 1000) : 0);
	const themeStyle = $derived(
		`--bg:${colors.bg};--panel:${colors.panel};--panel-alt:${colors.panelAlt};--border:${colors.border};--text:${colors.text};--muted:${colors.muted};--primary:${colors.primary};--secondary:${colors.secondary};--tertiary:${colors.tertiary};--danger:${colors.danger};`
	);

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

		const shuffledOrder = shuffleArray(quizData);
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
		const original = quizData.find((question) => question.id === currentQuestion.id);
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
	<title>{headTitle}</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Outfit:wght@300;400;700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="quiz-main" style={themeStyle}>
	<div class="background-field" aria-hidden="true">
		<div class="background-bands"></div>
		<div class="background-grid"></div>
	</div>

	<div class="quiz-shell">
		<header class="intro-header" class:hidden={currentStep !== 'intro'}>
			<div>
				<p class="eyebrow">{eyebrow}</p>
				<h1>{title} <span>{accentTitle}</span></h1>
			</div>
			<div class="source-block">
				<p>{source}</p>
				<p>{scope}</p>
			</div>
		</header>

		{#if currentStep === 'intro'}
			<section in:fade={{ duration: 700 }} class="intro-panel-wrap">
				<div class="intro-panel">
					<div class="topic-grid">
						{#each topics as label (label)}
							<div class="topic-chip">
								<p>{label}</p>
							</div>
						{/each}
					</div>
					<h2>{introTitle}</h2>
					<p class="intro-copy">{introText}</p>
					<button class="primary-action" onclick={startQuiz}>
						<span>Start 20-Item Quiz</span>
					</button>
				</div>
				<p class="module-count">Total Items: {quizData.length} // Mode: College Analysis</p>
			</section>
		{:else if currentStep === 'quiz'}
			<section class="quiz-stage">
				<div class="progress-track">
					<div class="progress-fill" style="width: {progress}%">
						<div></div>
					</div>
				</div>

				<div class="top-controls">
					<div>
						<button onclick={prevQuestion} disabled={currentIndex === 0}>&lt; Previous</button>
						<button onclick={refreshQuestion}>Refresh</button>
					</div>
					<button class="reset-action" onclick={resetQuiz}>Reset Quiz</button>
				</div>

				<div class="question-area">
					{#key currentIndex}
						<div
							in:fly={{ y: 20, duration: 600, delay: 160, easing: cubicOut }}
							class="question-card"
						>
							<div class="question-heading">
								<span>{String(currentIndex + 1).padStart(2, '0')}</span>
								<div>
									<h3>{currentQuestion.question}</h3>
									<p class:expert={currentQuestion.difficulty === 'expert'}>
										{currentQuestion.difficulty}
									</p>
								</div>
							</div>

							{#if currentQuestion.illustration}
								<div class="quiz-illustration">
									{@html currentQuestion.illustration}
								</div>
							{/if}

							<div class="option-grid">
								{#each currentQuestion.options as option (option)}
									<button
										onclick={() => handleAnswer(option)}
										disabled={isAnswered}
										class:correct={isAnswered && option === currentQuestion.answer}
										class:wrong={isAnswered &&
											option === selectedAnswer &&
											option !== currentQuestion.answer}
										class:inactive={isAnswered &&
											option !== currentQuestion.answer &&
											option !== selectedAnswer}
									>
										<span>{option}</span>
										{#if isAnswered && option === currentQuestion.answer}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="3"
												stroke-linecap="round"
												stroke-linejoin="round"
												aria-hidden="true"
											>
												<path d="M5 13l4 4L19 7" />
											</svg>
										{/if}
									</button>
								{/each}
							</div>
						</div>
					{/key}
				</div>

				{#if showExplanation}
					<div in:slide={{ duration: 400, easing: cubicOut }} class="explanation-panel">
						<div class="ghost-number">{String(currentIndex + 1).padStart(2, '0')}</div>
						<h4>{noteTitle}</h4>
						<p>{currentQuestion.explanation}</p>
						<div class="bottom-controls">
							<div>
								<button onclick={prevQuestion} disabled={currentIndex === 0}>&lt; Previous</button>
								<button onclick={refreshQuestion}>Refresh</button>
							</div>
							<button class="continue-action" onclick={nextQuestion}>
								{currentIndex < shuffledQuestions.length - 1 ? 'Continue >' : 'Finish >'}
							</button>
						</div>
					</div>
				{/if}
			</section>
		{:else if currentStep === 'results'}
			<section in:fly={{ y: 40, duration: 900, easing: backOut }} class="results-wrap">
				<div class="results-panel">
					<div class="result-rule"></div>
					<h2>{resultTitle}</h2>
					<div class="score-block">
						<div>
							{Math.round((score / shuffledQuestions.length) * 100)}<span>%</span>
						</div>
						<p>{scoreLabel}</p>
					</div>
					<div class="stats-row">
						<div>
							<p>{score} / {shuffledQuestions.length}</p>
							<span>Correct Items</span>
						</div>
						<div>
							<p>{timeTaken}s</p>
							<span>Duration</span>
						</div>
					</div>
					<div class="result-actions">
						<button onclick={startQuiz}>Restart Quiz</button>
						<button onclick={restart}>Return to Intro</button>
					</div>
				</div>
				<footer>{footer}</footer>
			</section>
		{/if}
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background: var(--bg);
	}

	.quiz-main {
		position: relative;
		min-height: 100vh;
		overflow-x: hidden;
		background: var(--bg);
		color: var(--text);
		font-family: 'Outfit', sans-serif;
	}

	.quiz-main ::selection {
		background: var(--primary);
		color: var(--bg);
	}

	button {
		cursor: pointer;
		font: inherit;
	}

	button:disabled {
		cursor: not-allowed;
		opacity: 0.35;
	}

	.background-field {
		pointer-events: none;
		position: fixed;
		inset: 0;
		opacity: 0.34;
	}

	.background-bands,
	.background-grid {
		position: absolute;
		inset: 0;
	}

	.background-bands {
		background: linear-gradient(
			115deg,
			color-mix(in srgb, var(--primary) 18%, transparent) 0 18%,
			transparent 18% 48%,
			color-mix(in srgb, var(--secondary) 16%, transparent) 48% 68%,
			transparent 68% 100%
		);
	}

	.background-grid {
		background-image:
			linear-gradient(90deg, #ffffff0a 1px, transparent 1px),
			linear-gradient(180deg, #ffffff07 1px, transparent 1px);
		background-size: 34px 34px;
	}

	.quiz-shell {
		position: relative;
		margin: 0 auto;
		display: flex;
		min-height: 100vh;
		max-width: 64rem;
		flex-direction: column;
		padding: 3rem 1.5rem;
	}

	.intro-header {
		margin-bottom: 3rem;
		display: flex;
		align-items: end;
		justify-content: space-between;
		border-bottom: 1px solid #ffffff22;
		padding-bottom: 1.5rem;
		gap: 1.5rem;
	}

	.eyebrow,
	.source-block p,
	.module-count,
	.question-heading p,
	.explanation-panel h4,
	.results-panel h2,
	.stats-row span,
	footer {
		font-family: 'JetBrains Mono', monospace;
		text-transform: uppercase;
		letter-spacing: 0.18em;
	}

	.eyebrow {
		margin: 0 0 0.75rem;
		color: var(--primary);
		font-size: 0.625rem;
	}

	h1,
	h2,
	h3,
	p {
		letter-spacing: 0;
	}

	h1 {
		margin: 0;
		color: #fff;
		font-size: clamp(2.5rem, 8vw, 4.5rem);
		font-style: italic;
		font-weight: 900;
		line-height: 0.98;
		text-transform: uppercase;
	}

	h1 span {
		color: var(--secondary);
	}

	.source-block {
		display: none;
		text-align: right;
	}

	.source-block p {
		margin: 0.25rem 0;
		color: var(--muted);
		font-size: 0.625rem;
	}

	.intro-panel-wrap,
	.results-wrap {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		text-align: center;
	}

	.intro-panel,
	.results-panel {
		position: relative;
		width: 100%;
		max-width: 48rem;
		border: 2px solid var(--border);
		background: var(--panel);
		box-shadow: 12px 12px 0 #050705;
		padding: clamp(2rem, 6vw, 4rem);
	}

	.topic-grid {
		margin: 0 auto 2rem;
		display: grid;
		max-width: 36rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.5rem;
	}

	.topic-chip {
		border: 1px solid #ffffff24;
		background: var(--bg);
		padding: 0.6rem 0.75rem;
	}

	.topic-chip p {
		margin: 0;
		color: var(--primary);
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.6rem;
		font-weight: 700;
		text-transform: uppercase;
	}

	.intro-panel h2 {
		margin: 0 0 1.5rem;
		font-size: clamp(2rem, 5vw, 3.3rem);
		font-weight: 800;
		line-height: 1.05;
	}

	.intro-copy {
		margin: 0 auto 2.25rem;
		max-width: 38rem;
		color: var(--muted);
		font-size: 1.08rem;
		font-weight: 300;
		line-height: 1.65;
	}

	.primary-action,
	.result-actions button:first-child {
		border: 0;
		background: var(--primary);
		color: var(--bg);
		font-weight: 800;
		text-transform: uppercase;
	}

	.primary-action {
		padding: 1rem 2.5rem;
	}

	.primary-action:hover,
	.result-actions button:first-child:hover,
	.continue-action:hover {
		background: #fff;
	}

	.primary-action span,
	.module-count,
	.top-controls button,
	.bottom-controls button,
	.continue-action,
	.result-actions button {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.74rem;
		font-weight: 800;
		text-transform: uppercase;
	}

	.module-count {
		margin: 0;
		color: var(--muted);
		font-size: 0.63rem;
	}

	.quiz-stage {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.progress-track {
		position: relative;
		margin-bottom: 1.5rem;
		height: 0.25rem;
		overflow: hidden;
		background: var(--panel-alt);
	}

	.progress-fill {
		position: absolute;
		inset: 0 auto 0 0;
		background: var(--primary);
		transition: width 0.5s ease-out;
	}

	.progress-fill div {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		width: 2rem;
		background: #fff;
		filter: blur(8px);
		opacity: 0.45;
	}

	.top-controls,
	.bottom-controls {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.top-controls {
		margin-bottom: 2rem;
	}

	.top-controls div,
	.bottom-controls div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.top-controls button,
	.bottom-controls button {
		border: 1px solid var(--border);
		background: transparent;
		color: var(--muted);
		padding: 0.65rem 1rem;
	}

	.top-controls button:hover,
	.bottom-controls button:hover {
		border-color: var(--primary);
		color: var(--primary);
	}

	.reset-action {
		border-color: color-mix(in srgb, var(--secondary) 55%, transparent) !important;
		color: var(--secondary) !important;
	}

	.reset-action:hover {
		background: color-mix(in srgb, var(--secondary) 8%, transparent);
	}

	.question-area {
		flex: 1;
	}

	.question-card {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.question-heading {
		display: flex;
		align-items: baseline;
		gap: 1rem;
	}

	.question-heading > span {
		color: #ffffff1c;
		font-family: 'JetBrains Mono', monospace;
		font-size: clamp(3rem, 9vw, 4.5rem);
		font-weight: 900;
	}

	.question-heading h3 {
		margin: 0;
		font-size: clamp(1.5rem, 4vw, 2.3rem);
		font-weight: 800;
		line-height: 1.15;
	}

	.question-heading p {
		display: inline-block;
		margin: 0.75rem 0 0;
		background: color-mix(in srgb, var(--primary) 14%, transparent);
		color: var(--primary);
		border-radius: 0.25rem;
		padding: 0.3rem 0.5rem;
		font-size: 0.62rem;
	}

	.question-heading p.expert {
		background: color-mix(in srgb, var(--secondary) 14%, transparent);
		color: var(--secondary);
	}

	.quiz-illustration {
		overflow: hidden;
		border: 1px solid var(--border);
		background: var(--panel);
		padding: 0.75rem;
	}

	:global(.quiz-illustration svg) {
		display: block;
		width: 100%;
		height: auto;
	}

	.option-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	.option-grid button {
		display: flex;
		min-height: 7rem;
		align-items: center;
		justify-content: space-between;
		border: 2px solid var(--border);
		background: var(--panel);
		color: var(--text);
		padding: 1.25rem;
		text-align: left;
		transition:
			transform 0.2s ease,
			border-color 0.2s ease,
			background-color 0.2s ease,
			opacity 0.2s ease;
	}

	.option-grid button:hover:not(:disabled) {
		transform: translateY(-2px);
		border-color: var(--tertiary);
	}

	.option-grid button span {
		font-size: 1rem;
		font-weight: 700;
		line-height: 1.35;
	}

	.option-grid svg {
		margin-left: 0.75rem;
		height: 1.5rem;
		width: 1.5rem;
		flex-shrink: 0;
	}

	.option-grid button.correct {
		border-color: var(--secondary);
		background: var(--secondary);
		color: var(--bg);
	}

	.option-grid button.wrong {
		border-color: var(--danger);
		background: var(--danger);
		color: #fff;
	}

	.option-grid button.inactive {
		border-color: var(--panel-alt);
		opacity: 0.45;
	}

	.explanation-panel {
		position: relative;
		margin-top: 3rem;
		overflow: hidden;
		border-left: 4px solid var(--tertiary);
		background: var(--panel);
		padding: 2rem;
	}

	.ghost-number {
		position: absolute;
		top: 0;
		right: 0;
		padding: 1rem;
		color: #fff;
		font-family: 'JetBrains Mono', monospace;
		font-size: 4.5rem;
		font-weight: 900;
		opacity: 0.05;
	}

	.explanation-panel h4 {
		margin: 0 0 0.75rem;
		color: var(--tertiary);
		font-size: 0.72rem;
	}

	.explanation-panel > p {
		margin: 0;
		color: var(--muted);
		font-size: 1.1rem;
		font-weight: 300;
		line-height: 1.65;
	}

	.bottom-controls {
		margin-top: 2rem;
	}

	.continue-action {
		border: 0 !important;
		background: #fff !important;
		color: var(--bg) !important;
		padding: 0.85rem 1.5rem !important;
	}

	.results-panel {
		box-shadow: none;
	}

	.result-rule {
		position: absolute;
		top: 0;
		left: 0;
		height: 0.25rem;
		width: 100%;
		background: linear-gradient(90deg, var(--primary), var(--tertiary), var(--secondary));
	}

	.results-panel h2 {
		margin: 0 0 2rem;
		color: var(--muted);
		font-size: 0.72rem;
	}

	.score-block {
		margin-bottom: 3rem;
	}

	.score-block div {
		color: #fff;
		font-size: clamp(5.5rem, 16vw, 8rem);
		font-weight: 900;
		line-height: 0.9;
	}

	.score-block span {
		color: var(--primary);
		font-size: 2rem;
	}

	.score-block p {
		margin: 1rem 0 0;
		color: var(--muted);
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.86rem;
		text-transform: uppercase;
	}

	.stats-row {
		margin-bottom: 3rem;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
		border-bottom: 1px solid #ffffff18;
		border-top: 1px solid #ffffff18;
		padding: 2rem 0;
	}

	.stats-row p {
		margin: 0;
		color: #fff;
		font-size: 1.5rem;
		font-weight: 800;
	}

	.stats-row span {
		color: var(--muted);
		font-size: 0.62rem;
	}

	.result-actions {
		display: grid;
		gap: 1rem;
	}

	.result-actions button {
		width: 100%;
		border: 2px solid var(--border);
		padding: 1rem;
	}

	.result-actions button:last-child {
		background: transparent;
		color: var(--text);
	}

	.result-actions button:last-child:hover {
		border-color: var(--primary);
	}

	footer {
		color: var(--muted);
		font-size: 0.62rem;
		opacity: 0.55;
	}

	.hidden {
		display: none;
	}

	@media (min-width: 768px) {
		.source-block {
			display: block;
		}

		.topic-grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}

		.option-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 640px) {
		.quiz-shell {
			padding: 4.5rem 1rem 2rem;
		}

		.intro-header,
		.top-controls,
		.bottom-controls {
			align-items: stretch;
			flex-direction: column;
		}

		.top-controls > button,
		.continue-action {
			width: 100%;
		}

		.question-heading {
			align-items: flex-start;
		}

		.question-heading > span {
			font-size: 2.6rem;
		}
	}
</style>
