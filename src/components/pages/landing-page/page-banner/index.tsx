import Image from "next/image";
import "./banner.scss";
import Link from "next/link";

export default function LandingPageBannner() {
	return (
		<section className="landing-page-banner section-gap">
			<div className="container">
				<div className="lb-content-wrapper relative md:grid grid-cols-2 items-end">
					<div className="lpb-content md:max-w-[587px] col-span-1">
						<h1 className="text-secondary">
							लोकसेवामा सफल हुन बन्न अब्बल तयारी चाहिन्छ!
						</h1>
						<p className="text-white">
							राष्ट्रिय योग दिवसका अवसरमा बिहीबार बालुवाटारस्थित प्रधानमन्त्री
							निवासमा योगाभ्यास कार्यक्रम आयोजना गरिएको छ ।
						</p>
						<Link href={"/"} className="btn-secondary">
							View All Packages
						</Link>
					</div>

					<div className="lb-feature-image relative aspect-bannerImage col-span-1 hidden lg:block">
						<Image
							src={"/placeholder-02.png"}
							alt=""
							layout="fill"
							priority
							objectFit="contain"
						/>
					</div>

					<div className=" hidden lg:block  text-box lg:absolute top-[60px] right-[46px] max-w-[220px]  bg-grey py-2 px-8">
						<p className="text-white">
							Best Platform to gain knowledge on Loksewa
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
