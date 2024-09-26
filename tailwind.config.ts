import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "16px",
					"2xl": "50px",
				},
				screens: {
					sm: "540px", // For Small screens ≥576px
					md: "720px", // For Medium screens ≥768px
					lg: "960px", // For Large screens ≥992px
					xl: "1140px", // For X-Large screens ≥1200px
					"2xl": "1320px", // For XX-Large screens ≥1400px
				},
			},
			colors: {
				primary: {
					DEFAULT: "#33333D",
				},
				secondary: {
					DEFAULT: "#674EFF",
				},
			},
			aspectRatio: {
				bannerImage: "768 / 513",
				packageLandscape: "287 / 153",
				packagePortrait: "120 / 174",
			},
		},
	},
	plugins: [],
};
export default config;
