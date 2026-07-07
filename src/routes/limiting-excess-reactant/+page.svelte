<script lang="ts">
	import CollegeQuiz from '$lib/components/CollegeQuiz.svelte';
	import { limitingExcessReactantQuizData } from '$lib/limitingExcessReactantQuizData';

	const colors = {
		bg: '#171312',
		panel: '#1f1917',
		panelAlt: '#2d2421',
		border: '#4a3c35',
		text: '#f7f0e8',
		muted: '#c4b8ad',
		primary: '#f97316',
		secondary: '#4ecdc4',
		tertiary: '#a78bfa',
		danger: '#ff6b6b'
	};
</script>

<CollegeQuiz
	quizData={limitingExcessReactantQuizData}
	headTitle="Limiting & Excess Reactant Quiz"
	eyebrow="Lecture 10 // Stoichiometry"
	title="Limiting &amp; Excess"
	accentTitle="Reactant"
	source="Source: 10. Limiting and Excess Reactant.pptx"
	scope="Scope: Limiting vs Excess, Stoichiometric Calculations, Percent Yield, Industrial Applications"
	topics={['Definitions', 'Calculations', 'Percent Yield', 'Applications']}
	introTitle="Master Stoichiometric Analysis"
	introText="Practice the extracted lecture on limiting and excess reactants — identifying which reactant runs out first, performing stoichiometric calculations to determine theoretical yield, calculating percent yield, and applying these concepts to real-world industrial chemistry problems."
	noteTitle="Stoichiometry Note"
	resultTitle="Limiting Reactant Assessment Complete"
	scoreLabel="Stoichiometry Score"
	footer="Source extracted from 10. Limiting and Excess Reactant.pptx — 29 slides, image-based"
	{colors}
/>
