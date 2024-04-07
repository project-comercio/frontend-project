"use client"

import PostCard from "@/components/Posts/PostCard/PostCard";
import React, { useEffect, useState } from "react";
import CreatePost from "./CreatePost/CreatePost";
import { PostProps } from "@/types";
import UploadPhoto from "@/components/Config/UploadPhoto";
import { randomize } from "@/utils/functions/randomItem";

const MainFeed = () => {

  const [posts, setPosts] = useState<PostProps[]>([])

  const handleGetAllPosts = async () => {
    try {
      const requisiton = await fetch("https://backend-repository.onrender.com/posts/", {
        method: "GET"
      })
      const response = await requisiton.json()
      const randomPosts = await randomize(response)
      if (response.length) setPosts(response)
    } catch (error) {
      throw new Error(`Não foi possível encontrar posts: ${error}`)
    }
  }

  useEffect(() => {
    handleGetAllPosts()
  }, [])

  return (
    <div className="w-full flex flex-col gap-4">
      <CreatePost handleGetAllPost={handleGetAllPosts} />
      <section className="flex flex-col w-full gap-4">
      {posts.map((post: PostProps, index: number) => (
        <PostCard postContent={post} key={`${post.creatorId}-${index}`} />
      ))}
    </section>
    </div>
  );
};

export default MainFeed;
