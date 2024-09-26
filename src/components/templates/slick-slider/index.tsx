"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CategorySingle from "@/components/molecules/category-single";
import "@/styles/slick-slider.scss";

export default function SlickSlider() {
	const dotsRef = React.useRef(null);

	const setting = {
		dots: false,
		arrows: false,
		infinite: false,
		slidesToShow: 7,
		slidesToScroll: 4,

		responsive: [
			{
				breakpoint: 567,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					dots: true,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 3,
					dots: true,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 4,
					dots: true,
				},
			},
		],
	};
	return (
		<>
			<Slider {...setting} className="area-slider">
				{Array.from({ length: 7 }).map((_, index) => (
					<CategorySingle key={index.toString()} />
				))}
			</Slider>
		</>
	);
}
