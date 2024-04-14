import type { MarketingCourseProps } from "@/types";
import { formatCurrency } from "@/utils/functions/formatCurrency";
import React from "react";

const CourseCard = ({ course }: { course: MarketingCourseProps }) => {
  return (
    <div className="w-full max-w-[300px] p-4 lg:p-6 rounded-lg h-full border border-slate-300 cursor-grab">
      <article className="w-full">
        <span className="text-xs text-principal uppercase">Marketing</span>
        <h3 className="text-base lg:text-lg font-semibold h-full min-h-[55px]">
          {course.title}
        </h3>
        <p className="text-sm mt-1 h-full min-h-[100px]">
          {course.description}
        </p>
        <div className="w-full flex justify-between">
          <p className="text-left">Preço</p>
          <p className="text-right text-principal font-semibold">{formatCurrency(course.price)}</p>
        </div>
      </article>
    </div>
  );
};

export default CourseCard;
