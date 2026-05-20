<script lang="ts">
	import CollegeQuiz from '$lib/components/CollegeQuiz.svelte';
	import { geneRegulationQuizData } from '$lib/geneRegulationQuizData';

	const colors = {
		bg: '#15120f',
		panel: '#241c15',
		panelAlt: '#34281d',
		border: '#57402b',
		text: '#fbf2e8',
		muted: '#d6c4ad',
		primary: '#ffb86b',
		secondary: '#70d6c8',
		tertiary: '#ff738a',
		danger: '#d95757'
	};
</script>

<CollegeQuiz
	quizData={geneRegulationQuizData}
	headTitle="Gene Regulation College Quiz"
	eyebrow="Lecture 12 // Genetic Code and Gene Regulation"
	title="Gene"
	accentTitle="Regulation"
	source="Source: 4_lec-12-gene-regulation-b.pdf"
	scope="Scope: Code, Operons, Development"
	topics={['Codons', 'Operons', 'Chromatin', 'Development']}
	introTitle="Control the Gene Program"
	introText="Test triplet-code reasoning, operon switch logic, eukaryotic expression control, developmental fate, and RNA/protein regulation."
	noteTitle="Gene Regulation Note"
	resultTitle="Gene Regulation Assessment Complete"
	scoreLabel="Gene Regulation Score"
	footer="Source extracted from 4_lec-12-gene-regulation-b.pdf"
	{colors}
/>
