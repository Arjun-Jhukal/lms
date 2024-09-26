import SectionTitle from "@/components/molecules/section-title";
import SinglePackage from "@/components/molecules/single-package";
import LandingPageBannner from "@/components/pages/landing-page/page-banner";
import "../../styles/package-listing.scss";
import SingleFeature from "@/components/molecules/single-feature";
import SlickSlider from "@/components/templates/slick-slider";

export default function Home() {
	return (
		<>
			<LandingPageBannner />

			<section className="popular-listing section-gap section-padding-y">
				<div className="container">
					<SectionTitle />

					<div className="package-list sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
						{Array.from({ length: 4 }).map((item, index) => (
							<div className="col-span-1" key={index.toString()}>
								<SinglePackage />
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="features section-gap">
				<div className="container">
					<div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
						{Array.from({ length: 4 }).map((item, index) => (
							<div className="col-span-1" key={index.toString()}>
								<SingleFeature />
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="areas section-gap">
				<div className="container">
					<SectionTitle />
					<SlickSlider />
				</div>
			</section>

			<section className="popular-listing section-gap ">
				<div className="container">
					<SectionTitle />

					<div className="package-list sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
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
