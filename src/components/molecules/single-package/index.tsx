import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SinglePackage() {
	return (
		<div className="package-item">
			<div className="pi-image relative aspect-packageLandscape">
				<Link href={"/"} className="block">
					<Image src={"/placeholder-03.png"} layout="fill" alt="" />
				</Link>
			</div>
			<div className="pi-content">
				<Link href={"/"}>
					<h5>शिक्षक सेवा आयोग | नायव सुब्बा - प्रथम पत्र (GK & IQ)</h5>
				</Link>

				<div className="pi-info">
					<ul>
						<li>
							<small>Instructor:</small>
							<small>Anushka Shrestha</small>
						</li>
						<li>
							<small>Package:</small>
							<small>शिक्षक सेवा आयोग</small>
						</li>
					</ul>
				</div>

				<div className="pi-action flex justify-between items-center">
					<Link href={"/"} className="btn-underlined">
						Join Now
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
