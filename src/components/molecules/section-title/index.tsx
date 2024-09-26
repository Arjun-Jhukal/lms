import Link from "next/link";
import React from "react";

export default function SectionTitle() {
	return (
		<div className="section-title mb-[40px] flex justify-between items-center">
			<div className="title ">
				<h2 className=" mb-1">Our Popular Packages</h2>
				<p>
					धेरै रुचाईएका प्याकेजहरु | आफुले तयारी गर्न खोजेको समूह छनोट गर्नुहोस
				</p>
			</div>
			<div className="st-right">
				<Link href="#" className="btn-secondary">
					View All Online Exams
				</Link>
			</div>
		</div>
	);
}
