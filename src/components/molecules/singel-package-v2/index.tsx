import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SinglePackageV2() {
	return (
		<div className="single-package-v2 flex justify-start items-center gap-4 bg-white p-1">
			<Link
				href={"#"}
				className="spv2-image relative aspect-packagePortrait min-w-[120px]">
				<Image
					src={"/placeholder-06.png"}
					layout="fill"
					objectFit="cover"
					alt=""
				/>
			</Link>
			<div className="spv2-content">
				<Link href={"#"}>
					<h5 className="mb-6">
						शिक्षक सेवा आयोग | नायव सुब्बा - प्रथम पत्र (GK & IQ)
					</h5>
				</Link>

				<div className="pi-action flex justify-between items-center">
					<Link href={"/"} className="btn-underlined">
						Read Now
					</Link>
					<div className="price flex gap-2">
						<del>रु 700 </del>
						<h5>रु 500 </h5>
					</div>
				</div>
			</div>
		</div>
	);
}
