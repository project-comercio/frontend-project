
import React, { Suspense, useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import type { PostProps } from "@/types";
<<<<<<< HEAD
import MiniLoader from "@/components/toolkit/Config/MiniLoader";
=======
import MiniLoader from "@/components/common/Config/MiniLoader";
>>>>>>> 1965937343b9f9cade3c56f9f5b114c8194f82a9
import PostCard from "@/components/common/Posts/PostCard/PostCard";

export default function MainFeed() {
	const [posts, setPosts] = useState<PostProps[]>([]);

	const handleGetAllPosts = async () => {
		const requisiton = await fetch(
			"https://backend-repository.onrender.com/posts/", {
				method: "GET",
			},
		);
		const response = await requisiton.json();
		console.log(response)
		if (response.length) setPosts(response);
	};

	useEffect(() => {
		handleGetAllPosts()
	}, [])

	return (
		<div className="w-full flex flex-col gap-4">
			<CreatePost handleGetAllPost={handleGetAllPosts} />
			<Suspense fallback={<MiniLoader />}>
				<section className="flex flex-col w-full gap-4">
					{posts.map((post: PostProps, index: number) => (
						<PostCard postContent={post} key={`${post.creatorId}-${index}`} />
					))}
				</section>
			</Suspense>
		</div>
	);
}
