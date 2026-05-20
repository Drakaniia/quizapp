export interface Question {
	id: number;
	question: string;
	options: string[];
	answer: string;
	explanation: string;
	difficulty: 'advanced' | 'expert';
	illustration?: string;
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
