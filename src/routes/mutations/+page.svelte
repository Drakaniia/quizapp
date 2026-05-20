<script lang="ts">
	import CollegeQuiz from '$lib/components/CollegeQuiz.svelte';
	import { mutationsQuizData } from '$lib/mutationsQuizData';

	const colors = {
		bg: '#171014',
		panel: '#24161d',
		panelAlt: '#351f29',
		border: '#573244',
		text: '#faedf2',
		muted: '#d5b7c4',
		primary: '#ff7aa8',
		secondary: '#ffd166',
		tertiary: '#79d6c7',
		danger: '#d95757'
	};
</script>

<CollegeQuiz
	quizData={mutationsQuizData}
	headTitle="Mutations College Quiz"
	eyebrow="Lecture 13 // Mutations"
	title="Mutation"
	accentTitle="Mechanisms"
	source="Source: 5_lec-13-mutations-b.pdf"
	scope="Scope: Chromosomes to Transposons"
	topics={['Euploidy', 'Aneuploidy', 'Point Mutations', 'Transposons']}
	introTitle="Diagnose Genetic Change"
	introText="Classify chromosomal and point mutations, infer mutation outcomes, and connect mutagens and mutation rate to evolution."
	noteTitle="Mutation Note"
	resultTitle="Mutation Assessment Complete"
	scoreLabel="Mutations Score"
	footer="Source extracted from 5_lec-13-mutations-b.pdf"
	{colors}
/>
