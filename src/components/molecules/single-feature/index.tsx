import Image from "next/image";
import Link from "next/link";

export default function SingleFeature() {
	return (
		<div className="feature-item bg-primary py-6 px-5 ">
			<div className="fi-icon relative aspect-square max-w-[36px] mb-4">
				<Image src="/feature-01.svg" layout="fill" alt="" />
			</div>
			<div className="fi-content">
				<h4>Live Classes</h4>
				<p>Join us in the virtual classroom for an engaging and interactive</p>
				<Link href={"#"} className="btn-underlined">
					View Live Classes
				</Link>
			</div>
		</div>
	);
}
