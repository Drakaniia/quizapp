<script lang="ts">
	import CollegeQuiz from '$lib/components/CollegeQuiz.svelte';
	import { quantitativeGeneticsQuizData } from '$lib/quantitativeGeneticsQuizData';

	const colors = {
		bg: '#101719',
		panel: '#182426',
		panelAlt: '#263638',
		border: '#365154',
		text: '#eaf5e8',
		muted: '#bdd0ba',
		primary: '#8be07f',
		secondary: '#ffd166',
		tertiary: '#70d6c8',
		danger: '#d95757'
	};
</script>

<CollegeQuiz
	quizData={quantitativeGeneticsQuizData}
	headTitle="Quantitative Genetics College Quiz"
	eyebrow="Lecture 14 // Quantitative Genetics"
	title="Quantitative"
	accentTitle="Genetics"
	source="Source: 6_lec-14-quantitative-genetics-b-1.pdf"
	scope="Scope: Variance, Regression, Heritability"
	topics={['Polygenes', 'Variance', 'Regression', 'Heritability']}
	introTitle="Measure the Phenotype"
	introText="Work through polygenic models, normal distributions, covariance and regression, variance components, dandelion experiments, and heritability."
	noteTitle="Quantitative Genetics Note"
	resultTitle="Quantitative Genetics Assessment Complete"
	scoreLabel="Quantitative Genetics Score"
	footer="Source extracted from 6_lec-14-quantitative-genetics-b-1.pdf"
	{colors}
/>
