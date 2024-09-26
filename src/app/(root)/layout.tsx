import Footer from "@/components/templates/footer";
import Header from "@/components/templates/header";
import "./styles.scss";

export default function MainLayout({
	children,
}: {
	children: React.ReactElement;
}) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
