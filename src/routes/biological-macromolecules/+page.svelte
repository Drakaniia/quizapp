<script lang="ts">
	import CollegeQuiz from '$lib/components/CollegeQuiz.svelte';
	import { biologicalMacromoleculesQuizData } from '$lib/biologicalMacromoleculesQuizData';

	const colors = {
		bg: '#171312',
		panel: '#1f1917',
		panelAlt: '#2d2421',
		border: '#4a3c35',
		text: '#f7f0e8',
		muted: '#c4b8ad',
		primary: '#fcb045',
		secondary: '#4ecdc4',
		tertiary: '#a78bfa',
		danger: '#ff6b6b'
	};
</script>

<CollegeQuiz
	quizData={biologicalMacromoleculesQuizData}
	headTitle="Biological Macromolecules Quiz"
	eyebrow="Lecture 7 // Biological Macromolecules"
	title="Biological"
	accentTitle="Macromolecules"
	source="Source: 7. Biological Macromolecules.pptx"
	scope="Scope: Carbs, Proteins, Lipids, Nucleic Acids"
	topics={['Carbohydrates', 'Proteins', 'Lipids', 'Nucleic Acids']}
	introTitle="Fuel Your Knowledge"
	introText="Practice the extracted lecture on carbohydrates, proteins, lipids, and nucleic acids — the four major classes of biological macromolecules that sustain life."
	noteTitle="Biochem Note"
	resultTitle="Macromolecules Assessment Complete"
	scoreLabel="Biological Macromolecules Score"
	footer="Source extracted from 7. Biological Macromolecules.pptx"
	{colors}
/>
