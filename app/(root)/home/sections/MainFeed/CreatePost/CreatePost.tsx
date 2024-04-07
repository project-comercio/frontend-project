"use client"

import { getUser } from '@/context/UserContext';
import React, { useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { toast } from 'react-toastify';
import { CreatePostProps } from './types';

const CreatePost = ({handleGetAllPost}: CreatePostProps) => {
  const {userData} = getUser()

  const [postContent, setPostContent] = useState<string>("")

  const handleCreatePost = async () => {
    if (postContent.length > 0) {
      const response = await fetch("https://backend-repository.onrender.com/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          creatorId: userData.id,
          creatorName: userData.username,
          creatorPhoto: userData.picture,
          content: postContent
        })
      })
      if (response.ok) {
        setPostContent("")
        toast.success("Postagem adicionada com sucesso!")
        handleGetAllPost()
      }
    } else {
      toast.error("Postagem muito curta!")
    }
  }

  return (
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
      <input type="text" name="post" id="post" placeholder="O que você está pensando?" autoComplete="off" spellCheck="false" minLength={1} maxLength={60} className="w-full outline-none text-sm transition-all duration-100 flex-1" onChange={(e) => setPostContent(e.target.value)} value={postContent} />
      <CiImageOn className="gray-icon cursor-pointer" size={24} />
      <IoIosSend className={`transition-all duration-300 ease-in-out ${postContent.length > 0 ? "colored-icon cursor-pointer" : "gray-icon cursor-not-allowed"}`} size={24} onClick={async () => await handleCreatePost()} />
    </div>
  </section>
  )
}

export default CreatePost