<script lang="ts">
	import CollegeQuiz from '$lib/components/CollegeQuiz.svelte';
	import { collisionTheoryQuizData } from '$lib/collisionTheoryQuizData';

	const colors = {
		bg: '#171312',
		panel: '#1f1917',
		panelAlt: '#2d2421',
		border: '#4a3c35',
		text: '#f7f0e8',
		muted: '#c4b8ad',
		primary: '#00d4ff',
		secondary: '#4ecdc4',
		tertiary: '#a78bfa',
		danger: '#ff6b6b'
	};
</script>

<CollegeQuiz
	quizData={collisionTheoryQuizData}
	headTitle="Collision Theory Quiz"
	eyebrow="Lecture 8 // Collision Theory"
	title="Collision"
	accentTitle="Theory"
	source="Source: 8. Collision Theory.pptx"
	scope="Scope: Collision Theory, Activation Energy, Reaction Rate, Factors Affecting Rate"
	topics={['Collision Theory', 'Activation Energy', 'Reaction Rate', 'Catalysts']}
	introTitle="Master Chemical Kinetics"
	introText="Practice the extracted lecture on collision theory, activation energy, reaction rates, and the four factors that influence how quickly chemical reactions proceed — temperature, surface area, concentration, and catalysts."
	noteTitle="Kinetics Note"
	resultTitle="Collision Theory Assessment Complete"
	scoreLabel="Collision Theory Score"
	footer="Source extracted from 8. Collision Theory.pptx"
	{colors}
/>
