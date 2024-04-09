"use client"

import React, { useState } from "react";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart, FaHeart  } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { LuShare2 } from "react-icons/lu";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import { MdInsertLink } from "react-icons/md";
import { PostProps } from "@/types";
import { getUser } from "@/context/UserContext";

const PostCard = ({ postContent } : {postContent: PostProps}) => {
  const {userData, getUserInfo} = getUser()

  const [postLikes, setPostsLikes] = useState<number | any>(postContent.likes)
  const [isLiked, setIsLiked] = useState<boolean>(userData?.likes.includes(postContent.id))

  const handleLikePost = async () => {
    try {
      setPostsLikes(postContent.likes && postLikes + 1)
      setIsLiked(true)
      const response = await fetch("https://backend-repository.onrender.com/users/likePost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: postContent.id,
          userId: userData?.id
        })
      })
      if (response.ok) {
        await getUserInfo()
      }
    } catch (error) {
      throw new Error(`Não foi possível curtir a postagem: ${error}`)
    }
  }

  const handleDislikePost = async () => {
    try {
      setPostsLikes(postContent.likes && postLikes - 1)
      setIsLiked(false)
      const response = await fetch("https://backend-repository.onrender.com/users/dilikePost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: postContent.id,
          userId: userData?.id
        })
      })
      if (response.ok) {
        await getUserInfo()
      }
    } catch (error) {
      throw new Error(`Não foi possível curtir a postagem: ${error}`)
    }
  }

  return (
    <div className="w-full bg-white border drop-shadow-sm border-slate-200 p-4 lg:p-6 rounded-lg">
      <div className="flex w-full justify-between gap-3 items-center">
        <figure className="h-8 w-8 cursor-pointer">
          <img
            src={postContent.creatorPhoto}
            alt="profile-picture"
            className="rounded-full h-full w-full"
          />
        </figure>
        <div className="w-full flex-1">
          <h3 className="text-sm font-semibold">{postContent.creatorName}</h3>
          <p className="text-xs text-slate-500">postado a 1 minuto atrás</p>
        </div>
        <div className="cursor-pointer">
          <IoEllipsisHorizontalSharp size={20} className="gray-icon" />
        </div>
      </div>
      <article className="mt-6">
        <p className="text-sm">
          {postContent.content}
        </p>
      </article>
      <figure className="mt-4 w-full rounded-md h-[350px] group relative block overflow-hidden">
        <img
          src={postContent.images[0]}
          alt="post-image"
          className="rounded-md absolute inset-0 h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
        />
      </figure>
      <div className="w-full flex items-center justify-start gap-4 lg:gap-0 lg:justify-around mt-4">
        <div className="items-center flex gap-3 cursor-pointer">
          <FaRegComment size={18} className="gray-icon" />
          <p className="lg:block hidden text-slate-500 text-xs">{postContent.comments} comentários</p>
        </div>
        <div className="items-center flex gap-3 cursor-pointer">
          {isLiked ? (
            <FaHeart size={18} className="colored-icon" onClick={() => handleDislikePost()} />
          ) : (
            <FaRegHeart size={18} className="gray-icon" onClick={() => handleLikePost()} />
          )}
          <p className="lg:block hidden text-slate-500 text-xs">{postLikes} curtidas</p>
        </div>
        <div className="items-center flex gap-3 cursor-pointer">
          <FaRegShareFromSquare size={18} className="gray-icon" />
          <p className="lg:block hidden text-slate-500 text-xs">{postContent.shares} envios</p>
        </div>
        <div className="items-center flex gap-3 cursor-pointer">
          <LuShare2 size={18} className="gray-icon" />
          <p className="lg:block hidden text-slate-500 text-xs">compartilhar</p>
        </div>
      </div>
      <div className="w-full flex items-center mt-8 justify-between gap-3">
        <figure className="w-8 h-8">
          <img
            src={userData?.picture}
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
