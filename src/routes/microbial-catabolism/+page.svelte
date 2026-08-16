<script lang="ts">
	import CollegeQuiz from '$lib/components/CollegeQuiz.svelte';
	import { microbialCatabolismQuizData } from '$lib/microbialCatabolismQuizData';

	const colors = {
		bg: '#0f1412',
		panel: '#17201b',
		panelAlt: '#23302a',
		border: '#3b4d43',
		text: '#eaf6ef',
		muted: '#b7c8bd',
		primary: '#5eead4',
		secondary: '#fbbf24',
		tertiary: '#86efac',
		danger: '#f87171'
	};
</script>

<CollegeQuiz
	quizData={microbialCatabolismQuizData}
	headTitle="Microbial Catabolism College Quiz"
	eyebrow="Chapter 5 // Microbial Catabolism"
	title="Microbial"
	accentTitle="Catabolism"
	source="Source: CHAPTER 5.pdf"
	scope="Scope: Glycolysis to Fermentation"
	topics={['Glycolysis', 'Cellular Respiration', 'Fermentation', 'Lipid & Protein Catabolism']}
	introTitle="Trace Every ATP"
	introText="Account for ATP in glycolysis, compare respiration pathways and fermentation, trace electrons through the transport chain, and connect catabolic end-products to the microbes that make them."
	noteTitle="Catabolism Note"
	resultTitle="Catabolism Assessment Complete"
	scoreLabel="Microbial Catabolism Score"
	footer="Source extracted from CHAPTER 5.pdf"
	{colors}
/>
