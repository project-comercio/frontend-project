import React from "react";
import { CardItemData } from "../types";
import { DISCOVER_ICONS } from "../data";

export const CardItem: React.FC<CardItemData> = ({cardItem}) => {
  return (
    <article className="px-6 py-5 lg:px-12 lg:py-10 border border-slate-300 rounded-sm">
      <div className="flex items-center w-full gap-4">
        <figure>
          {DISCOVER_ICONS[cardItem.icon]}
        </figure>
        <h3 className="w-full flex-1 text-md max-w-[260px] lg:text-xl font-semibold">
          {cardItem.title}
        </h3>
      </div>
      <p className="pt-4 text-slate-500 text-sm">
        {cardItem.description}
      </p>
    </article>
  )
} 