<script lang="ts">
	import CollegeQuiz from '$lib/components/CollegeQuiz.svelte';
	import { populationGeneticsQuizData } from '$lib/populationGeneticsQuizData';

	const colors = {
		bg: '#0f130f',
		panel: '#151b15',
		panelAlt: '#253025',
		border: '#344534',
		text: '#f4f7f1',
		muted: '#c0cdbb',
		primary: '#71e088',
		secondary: '#f3b34f',
		tertiary: '#72c7dd',
		danger: '#d95757'
	};
</script>

<CollegeQuiz
	quizData={populationGeneticsQuizData}
	headTitle="Population Genetics College Quiz"
	eyebrow="Lecture 15 // Population Genetics"
	title="Population"
	accentTitle="Genetics"
	source="Source: 7_lec-15-population-genetics.pdf"
	scope="Scope: Equilibrium to Speciation"
	topics={['Equilibrium', 'Selection', 'Gene Flow', 'Speciation']}
	introTitle="Model the Gene Pool"
	introText="Work through calculation-heavy and concept-linked cases on Hardy-Weinberg equilibrium, selection, mating systems, drift, migration, races, and speciation."
	noteTitle="Population Genetics Note"
	resultTitle="Population Genetics Assessment Complete"
	scoreLabel="Population Genetics Score"
	footer="Source extracted from 7_lec-15-population-genetics.pdf"
	{colors}
/>
