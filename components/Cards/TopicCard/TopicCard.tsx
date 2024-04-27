import type { TopicProps } from "@/types";
import Link from "next/link";
import React from "react";

const TopicCard = ({ topic }: { topic: TopicProps }) => {
  const pagesImages: any = {
    endeavor:
      "https://20anos.endeavor.org.br/wp-content/uploads/2020/10/Logo_black-1.png",
  };

  return (
    <div className="border border-slate-300 rounded-lg max-w-[300px] w-full h-full">
      <figure className="p-4 lg:p-6 flex justify-center items-center">
        <img
          src={pagesImages[topic.page]}
          alt="topic-page-origin-creator"
          className="max-w-[100px]"
        />
      </figure>
      <figure className="w-full">
        <img
          src={
            "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?cs=srgb&dl=pexels-fauxels-3183150.jpg&fm=jpg"
          }
          alt="topic-main-image"
          className="h-[165px] w-full"
        />
      </figure>
      <article className="p-2 lg:p-4 h-full">
        <h2 className="font-medium text-sm h-full min-h-[60px]">{topic.title}</h2>
        <p className="line-clamp-2 text-xs mt-2 h-full min-h-[30px]">
          {topic.description}
        </p>
        <Link href={topic.url}>
          <div className="bg-principal rounded-lg text-center mt-4 py-1 text-white text-sm">
            Ver artigo
          </div>
        </Link>
      </article>
    </div>
  );
};

export default TopicCard;
