<script lang="ts">
	import CollegeQuiz from '$lib/components/CollegeQuiz.svelte';
	import { molecularStructureDnaQuizData } from '$lib/molecularStructureDnaQuizData';

	const colors = {
		bg: '#101321',
		panel: '#172033',
		panelAlt: '#222c40',
		border: '#33425f',
		text: '#e9eef7',
		muted: '#b8c3d8',
		primary: '#7fd0ff',
		secondary: '#f6c85f',
		tertiary: '#7ee0b2',
		danger: '#d95757'
	};
</script>

<CollegeQuiz
	quizData={molecularStructureDnaQuizData}
	headTitle="Molecular Structure of DNA College Quiz"
	eyebrow="Lecture 9 // Molecular Structure of DNA"
	title="Molecular Structure"
	accentTitle="DNA"
	source="Source: 1_lec-9-molecular-structure-DNA (1).pdf"
	scope="Scope: Watson-Crick to Chromosome Packing"
	topics={['Chargaff', 'Helix', 'Base Pairing', 'Packing']}
	introTitle="Interrogate the Double Helix"
	introText="Analyze Watson-Crick evidence, base-pair chemistry, helix geometry, and chromosome-level DNA packing through college-level prompts."
	noteTitle="DNA Structure Note"
	resultTitle="DNA Structure Assessment Complete"
	scoreLabel="Molecular Structure Score"
	footer="Source extracted from 1_lec-9-molecular-structure-DNA (1).pdf"
	{colors}
/>
