import type { Metadata } from "next";
import { Mukta } from "next/font/google";
import "./globals.css";

const mukta = Mukta({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
	preload: true,
});

export const metadata: Metadata = {
	title: {
		default: "Create Next App",
		template: "%s | Hamro Loksewa",
	},
	description: "Generated by create next app",
	openGraph: {
		title: "Hamro Loksewa",
		description: "Generated by create next app",
		url: "https://yourwebsite.com",
		images: [
			{
				url: "/logo.svg",
				width: 800,
				height: 600,
				alt: "Hamro Loksewa Logo",
			},
		],
		siteName: "Hamro Loksewa",
	},
	twitter: {
		card: "summary_large_image",
		title: "Hamro Loksewa",
		description: "Generated by create next app",
		images: ["/logo.svg"],
	},
	icons: {
		icon: "/favicon.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={mukta.className}>{children}</body>
		</html>
	);
}
