<script lang="ts">
	import CollegeQuiz from '$lib/components/CollegeQuiz.svelte';
	import { geneFunctionsQuizData } from '$lib/geneFunctionsQuizData';

	const colors = {
		bg: '#10151f',
		panel: '#172231',
		panelAlt: '#233246',
		border: '#33465c',
		text: '#eef7f5',
		muted: '#b8cac6',
		primary: '#5bd8c8',
		secondary: '#f5c766',
		tertiary: '#ff8f70',
		danger: '#d95757'
	};
</script>

<CollegeQuiz
	quizData={geneFunctionsQuizData}
	headTitle="Gene Functions College Quiz"
	eyebrow="Lecture 11 // Gene Functions"
	title="Gene"
	accentTitle="Functions"
	source="Source: 3_lec-11-gene-functions-b.pdf"
	scope="Scope: Enzymes, Transcription, Translation"
	topics={['Enzymes', 'Central Dogma', 'Promoters', 'Translation']}
	introTitle="Follow Information Flow"
	introText="Connect classic gene-enzyme evidence to RNA polymerases, promoter logic, translation mechanics, and eukaryotic RNA processing."
	noteTitle="Gene Function Note"
	resultTitle="Gene Function Assessment Complete"
	scoreLabel="Gene Functions Score"
	footer="Source extracted from 3_lec-11-gene-functions-b.pdf"
	{colors}
/>
