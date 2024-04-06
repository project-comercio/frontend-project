import PostCard from "@/components/Posts/PostCard/PostCard";
import React from "react";
import { CiImageOn } from "react-icons/ci";

const MainFeed = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <section className="bg-white rounded-lg py-4 px-6 border border-slate-200">
        <h2 className="py-2 border-b font-semibold border-slate-200">
          Poste alguma coisa
        </h2>
        <div className="w-full flex justify-between items-center pt-2 lg:pt-4 gap-2 lg:gap-4">
          <figure className="w-10 h-10">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg"
              alt="profile-image"
              className="rounded-full w-10 h-10"
            />
          </figure>
          <input type="text" name="post" id="post" placeholder="O que você está pensando?" autoComplete="off" spellCheck="false" minLength={1} maxLength={60} className="w-full outline-none text-sm transition-all duration-100 flex-1" />
          <CiImageOn className="gray-icon cursor-pointer" size={28} />
        </div>
      </section>
      <section>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </section>
    </div>
  );
};

export default MainFeed;
