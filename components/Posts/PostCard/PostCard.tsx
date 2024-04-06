import React from "react";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { LuShare2 } from "react-icons/lu";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import { MdInsertLink } from "react-icons/md";

const PostCard = () => {
  return (
    <div className="w-full bg-white border border-slate-200 p-6 rounded-lg">
      <div className="flex w-full justify-between gap-3 items-center">
        <figure className="h-10 w-10">
          <img
            src="https://media.licdn.com/dms/image/C4E03AQHojigqZYOQng/profile-displayphoto-shrink_800_800/0/1633883120941?e=2147483647&v=beta&t=VoX15ySCO4IMgdt0FHN0OP7jWDFK4qyRtdZxMBx7IlY"
            alt="profile-picture"
            className="rounded-full h-full w-full"
          />
        </figure>
        <div className="w-full">
          <h3 className="text-sm font-semibold">Alfredo Rodrigues</h3>
          <p className="text-xs mt-1 text-slate-500">postado a 3 horas atrás</p>
        </div>
        <div>
          <IoEllipsisHorizontalSharp size={20} className="gray-icon" />
        </div>
      </div>
      <article className="mt-6">
        <p className="text-sm">
          Isso se trata de uma publicação de testes com intuito de testar o
          componente de postagem da nossa nova plataforma de networking
        </p>
      </article>
      <figure className="mt-4 w-full rounded-md h-[350px] group relative block overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="post-image"
          className="rounded-md absolute inset-0 h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
        />
      </figure>
      <div className="w-full flex items-center justify-around mt-4">
        <div className="items-center flex gap-3">
          <FaRegComment size={18} className="gray-icon" />
          <p className="text-slate-500 text-xs">0 comentários</p>
        </div>
        <div className="items-center flex gap-3">
          <FaRegHeart size={18} className="gray-icon" />
          <p className="text-slate-500 text-xs">0 curtidas</p>
        </div>
        <div className="items-center flex gap-3">
          <FaRegShareFromSquare size={18} className="gray-icon" />
          <p className="text-slate-500 text-xs">0 envios</p>
        </div>
        <div className="items-center flex gap-3">
          <LuShare2 size={18} className="gray-icon" />
          <p className="text-slate-500 text-xs">compartilhar</p>
        </div>
      </div>
      <div className="w-full flex items-center mt-8 justify-between gap-3">
        <figure className="w-8 h-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg"
            alt="profile-image"
            className="rounded-full w-full h-full"
          />
        </figure>
        <input
          type="text"
          name="comment"
          id="comment"
          autoComplete="off"
          spellCheck="false"
          minLength={1}
          maxLength={60}
          placeholder="Digite algum comentário"
          className="w-full px-4 py-2 outline-none text-xs bg-slate-100 rounded-md flex-1 text-slate-600"
        />
        <div className="justify-around flex gap-2 items-center">
          <MdOutlineEmojiEmotions className="gray-icon cursor-pointer" size={22} />
          <MdOutlineImage className="gray-icon cursor-pointer" size={22} />
          <MdInsertLink className="gray-icon cursor-pointer" size={22} />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
