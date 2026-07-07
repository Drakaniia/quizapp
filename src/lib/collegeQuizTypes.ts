export interface MolecularViewerConfig {
	pdbId: string;
	style?: 'cartoon' | 'stick' | 'sphere' | 'surface';
	colorScheme?: 'spectrum' | 'chain' | 'secondary' | 'amino';
	height?: number;
	autoRotate?: boolean;
	highlights?: Array<{
		chain?: string;
		resi?: number | number[];
		color?: string;
		style?: 'stick' | 'sphere' | 'cartoon';
	}>;
	title?: string;
}

export interface Question {
	id: number;
	question: string;
	options: string[];
	answer: string;
	explanation: string;
	difficulty: 'advanced' | 'expert';
	illustration?: string;
	molecularViewer?: MolecularViewerConfig;
}

export interface QuizColors {
	bg: string;
	panel: string;
	panelAlt: string;
	border: string;
	text: string;
	muted: string;
	primary: string;
	secondary: string;
	tertiary: string;
	danger: string;
}
