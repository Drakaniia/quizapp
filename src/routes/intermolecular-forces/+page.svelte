<script lang="ts">
	import CollegeQuiz from '$lib/components/CollegeQuiz.svelte';
	import { intermolecularForcesQuizData } from '$lib/intermolecularForcesQuizData';

	const colors = {
		bg: '#171312',
		panel: '#1f1917',
		panelAlt: '#2d2421',
		border: '#4a3c35',
		text: '#f7f0e8',
		muted: '#c4b8ad',
		primary: '#00d4ff',
		secondary: '#fcb045',
		tertiary: '#a78bfa',
		danger: '#ff6b6b'
	};
</script>

<CollegeQuiz
	quizData={intermolecularForcesQuizData}
	headTitle="Intermolecular Forces of Attraction Quiz"
	eyebrow="Lecture 5 // Intermolecular Forces of Attraction"
	title="Intermolecular"
	accentTitle="Forces"
	source="Source: 5. Intermolecular Forces of Attraction.pptx"
	scope="Scope: London Dispersion, Dipole-Dipole, Hydrogen Bonding, Ion-Dipole"
	topics={['London Dispersion', 'Dipole-Dipole', 'Hydrogen Bonding', 'Ion-Dipole']}
	introTitle="Explore Intermolecular Forces"
	introText="Practice the extracted lecture on the four types of intermolecular forces of attraction — from the weakest London dispersion forces to the strongest ion-dipole interactions — and understand how these forces determine the physical properties of matter."
	noteTitle="Chem Note"
	resultTitle="IMFA Assessment Complete"
	scoreLabel="Intermolecular Forces Score"
	footer="Source extracted from 5. Intermolecular Forces of Attraction.pptx"
	{colors}
/>
