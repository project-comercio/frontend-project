"use client";

import { getMarketingCourses } from "@/utils/data/getMarketingCourses";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import type { MarketingCourseProps } from "@/types";
import CourseCard from "@/components/Cards/CourseCard/CourseCard";
import Loader from "@/components/Config/Loader";

export default function Marketing() {
	const [data, setData] = useState<MarketingCourseProps[]>([]);

	useEffect(() => {
		const getData = async () => {
			const response: MarketingCourseProps[] = await getMarketingCourses();
			if (response.length) {
				setData(response);
			}
		};
		getData();
	}, []);

	return data.length ? (
		<section className="w-full px-4 lg:px-12 py-12 lg:py-20 flex flex-col items-center">
			<div className="w-full max-w-6xl flex flex-col items-center">
				<article className="w-full items-center flex-col flex ">
					<span className="text-principal text-xs lg:text-sm uppercase px-2 py-1 border border-principal rounded-lg">
						Marketing
					</span>
					<h2 className="text-2xl mt-4 lg:text-4xl font-semibold">
						Atraia mais clientes
					</h2>
					<p className="text-sm lg:text-base mt-2">
						Leia artigos de tornar seu negócio mais atrativo
					</p>
				</article>
				<div className="mt-12">
					<Swiper
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						spaceBetween={50}
						slidesPerView={8}
						scrollbar={{ draggable: true, hide: true, el: "no-scrollbar" }}
						className="w-full max-w-6xl no-scrollbar"
						breakpoints={{
							500: {
								slidesPerView: 1,
								spaceBetween: 5,
							},
							640: {
								slidesPerView: 2,
								spaceBetween: 10,
							},
							768: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 4,
								spaceBetween: 25,
							},
						}}
					>
						{data.map((course: MarketingCourseProps, index: number) => (
							<SwiperSlide key={`${course.title}-${index}`}>
								<CourseCard course={course} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	) : (
		<Loader />
	);
}
