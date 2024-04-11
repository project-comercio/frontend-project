import PostCard from "@/components/Posts/PostCard/PostCard";
import React, { Suspense, useEffect, useState } from "react";
import CreatePost from "./CreatePost/CreatePost";
import type { PostProps } from "@/types";
import MiniLoader from "@/components/Config/MiniLoader";

export default function MainFeed() {

  const [posts, setPosts] = useState<PostProps[]>([])

  const handleGetAllPosts = async () => {
    const requisiton = await fetch("https://backend-repository.onrender.com/posts/", {
      method: "GET",
      cache: 'force-cache',
      next: {
        revalidate: 2 * 60
      }
    })
    const response = await requisiton.json()
    if (response.length) setPosts(response)
  }

  useEffect(() => {
    handleGetAllPosts()
  })

  return (
    <div className="w-full flex flex-col gap-4">
      <CreatePost handleGetAllPost={handleGetAllPosts} />
      <Suspense fallback={<MiniLoader/>}>
        <section className="flex flex-col w-full gap-4">
          {posts.length > 0 ? (
            <>
              {posts.map((post: PostProps, index: number) => (
                <PostCard postContent={post} key={`${post.creatorId}-${index}`} />
              ))}
            </>
          ) : null}
        </section>
      </Suspense>
    </div>
  );
};
