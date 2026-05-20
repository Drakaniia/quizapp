<script lang="ts">
	import CollegeQuiz from '$lib/components/CollegeQuiz.svelte';
	import { dnaReplicationQuizData } from '$lib/dnaReplicationQuizData';

	const colors = {
		bg: '#13121d',
		panel: '#211d32',
		panelAlt: '#302947',
		border: '#4d4269',
		text: '#f2edf9',
		muted: '#c9bed9',
		primary: '#caa8ff',
		secondary: '#f6c667',
		tertiary: '#70d6c8',
		danger: '#d95757'
	};
</script>

<CollegeQuiz
	quizData={dnaReplicationQuizData}
	headTitle="DNA Replication College Quiz"
	eyebrow="Lecture 10 // DNA Replication"
	title="DNA"
	accentTitle="Replication"
	source="Source: 2_lec-10-dna-replication.pdf"
	scope="Scope: Models, Fork Enzymes, Repair"
	topics={['Models', 'Forks', 'Polymerases', 'Repair']}
	introTitle="Track the Replication Fork"
	introText="Work through semi-conservative logic, fork proteins, polymerase roles, replication conformations, and error-correction cases."
	noteTitle="Replication Note"
	resultTitle="Replication Assessment Complete"
	scoreLabel="DNA Replication Score"
	footer="Source extracted from 2_lec-10-dna-replication.pdf"
	{colors}
/>
