import { SectionTitleProps, THEME } from "@/interface/global";
import Link from "next/link";
import React from "react";

export default function SectionTitle(props: SectionTitleProps) {
	return (
		<div className="section-title mb-[40px] flex justify-between items-center flex-wrap gap-y-3">
			<div
				className={`title
				${props.theme === THEME.DARK ? "text-white title-white" : ""}
				`}>
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
