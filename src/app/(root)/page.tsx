import SectionTitle from "@/components/molecules/section-title";
import SinglePackage from "@/components/molecules/single-package";
import LandingPageBannner from "@/components/pages/landing-page/page-banner";

export default function Home() {
	return (
		<>
			<LandingPageBannner />

			<section className="popular-listing">
				<div className="container">
					<SectionTitle />

					<div className="package-list md:grid md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
						{Array.from({ length: 4 }).map((item, index) => (
							<div className="col-span-1" key={index.toString()}>
								<SinglePackage />
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
