export enum THEME {
	DARK = "dark",
	LIGHT = "light",
}

export interface CTA {
	title: string;
	openInNewTab: string;
	url: string;
}

export interface SectionTitleProps {
	// title: string;
	// brief?: string;
	// cta: CTA;
	theme?: THEME;
}
