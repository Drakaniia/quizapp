<script lang="ts">
	import CollegeQuiz from '$lib/components/CollegeQuiz.svelte';
	import { effectIntermolecularForcesQuizData } from '$lib/effectIntermolecularForcesQuizData';

	const colors = {
		bg: '#171312',
		panel: '#1f1917',
		panelAlt: '#2d2421',
		border: '#4a3c35',
		text: '#f7f0e8',
		muted: '#c4b8ad',
		primary: '#00d4ff',
		secondary: '#ff6b6b',
		tertiary: '#a78bfa',
		danger: '#ff6b6b'
	};
</script>

<CollegeQuiz
	quizData={effectIntermolecularForcesQuizData}
	headTitle="Effect of Intermolecular Forces of Attraction Quiz"
	eyebrow="Lecture 6 // Effect of Intermolecular Forces of Attraction"
	title="Intermolecular"
	accentTitle="Effects"
	source="Source: 6. Effect of Inter-Molecular Forces of Attraction.pptx"
	scope="Scope: Boiling Point, Vapor Pressure, Surface Tension, Viscosity, Capillary Action, Solubility"
	topics={['Boiling Point & Vapor Pressure', 'Surface Tension', 'Viscosity', 'Solubility']}
	introTitle="How IMFA Shape the Physical World"
	introText="Practice the extracted lecture on how intermolecular forces of attraction influence the physical properties of matter — from boiling points and vapor pressure to surface tension, viscosity, capillary action, and the 'like dissolves like' principle of solubility."
	noteTitle="Chem Note"
	resultTitle="IMFA Effects Assessment Complete"
	scoreLabel="Effect of Intermolecular Forces Score"
	footer="Source extracted from 6. Effect of Inter-Molecular Forces of Attraction.pptx"
	{colors}
/>
