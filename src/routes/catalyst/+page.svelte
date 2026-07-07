<script lang="ts">
	import CollegeQuiz from '$lib/components/CollegeQuiz.svelte';
	import { catalystQuizData } from '$lib/catalystQuizData';

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
	quizData={catalystQuizData}
	headTitle="Catalyst Quiz"
	eyebrow="Lecture 9 // Catalyst"
	title="Catalyst"
	accentTitle="&amp; Catalysis"
	source="Source: 9. Catalyst.pptx"
	scope="Scope: Definition, Mechanism, Types, Applications, Biological Catalysts"
	topics={['Definition', 'Mechanism', 'Types', 'Applications']}
	introTitle="Master Chemical Catalysis"
	introText="Practice the extracted lecture on catalysts — their definition, how they provide an alternative reaction pathway with lower activation energy, types of catalysts (homogeneous, heterogeneous, enzymes), and real-world applications in industry and biology."
	noteTitle="Catalysis Note"
	resultTitle="Catalyst Assessment Complete"
	scoreLabel="Catalyst Score"
	footer="Source extracted from 9. Catalyst.pptx"
	{colors}
/>
