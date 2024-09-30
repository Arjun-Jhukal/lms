import SectionTitle from "@/components/molecules/section-title";
import SinglePackage from "@/components/molecules/single-package";
import LandingPageBannner from "@/components/pages/landing-page/page-banner";
import "../../styles/package-listing.scss";
import SingleFeature from "@/components/molecules/single-feature";
import SlickSlider from "@/components/templates/slick-slider";
import Image from "next/image";
import { THEME } from "@/interface/global";
import SinglePackageV2 from "@/components/molecules/singel-package-v2";
import CategorySingle from "@/components/molecules/category-single";

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
					<div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-[24px] feature-list">
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
					<SlickSlider>
						<CategorySingle />
					</SlickSlider>
				</div>
			</section>

			<section className="section-padding-y section-gap relative ebooks">
				<div className="bg-image  absolute inset-0 z-[-1] bg-primary">
					<Image src={"/bg-black.png"} alt="" layout="fill" />
				</div>
				<div className="container">
					<SectionTitle theme={THEME.DARK} />
					<div className="lg:grid lg:grid-cols-2 gap-[24px]">
						<div className="col-span-1"></div>
						<div className="col-span-2">
							<div className="md:grid md:grid-cols-2 gap-[24px] ebook-list">
								{Array.from({ length: 6 }).map((item, index) => (
									<div className="col-span-1" key={index.toString()}>
										<SinglePackageV2 />
									</div>
								))}
							</div>
						</div>
					</div>
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

			<section className="section-gap reviews">
				<div className="container">
					<SectionTitle />
					<div className="reviews-item-list md:grid md:grid-col-2 lg:grid-cols-4 gap-[24px]">
						{Array.from({ length: 4 }).map((item, index) => (
							<div className="col-span-1" key={index.toString()}>
								<div className="review-single p-6 bg-primary-100 rounded-[12px]">
									<div className="review-star relative aspect-reviewStar max-w-[128px] mb-4">
										<Image
											src={"/filled-star.png"}
											layout="fill"
											objectFit="contain"
											alt="review star"
										/>
									</div>
									<div className="review-content mb-[40px]">
										<p>
											अनलाइन परिछया | आफुले तयारी गर्न खोजेको समूह छनोट गर्नुहोस
											अनलाइन परिछया | आफुले तयारी गर्न खोजेको समूह छनोट गर्नुहोस
											अनलाइन परिछया | आफुले तयारी गर्न खोजेको समूह छनोट गर्नुहोस
										</p>
									</div>

									<div className="reviewer flex justify-start items-start gap-2">
										<div className="reviewer-profile w-[36px] h-[36px] rounded-[50%] bg-secondary flex justify-center items-center">
											<span className="text-white">AJ</span>
										</div>
										<div className="reviewer-info">
											<h5>Arjun Jhukal</h5>
											<small>2 months ago</small>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="app-images">
				<div className="container">
					<div className="ai-image relative h-[320px] xl:h-[430px]">
						<Image
							src={"/app-images.png"}
							alt=""
							layout="fill"
							objectFit="cover"
							objectPosition="top"
						/>
					</div>
				</div>
			</section>
		</>
	);
}
