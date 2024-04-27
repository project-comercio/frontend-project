"use client";

import MiniLoader from "@/components/Config/MiniLoader";
import PostCard from "@/components/Posts/PostCard/PostCard";
import { getUser } from "@/context/UserContext";
import type { PostProps } from "@/types";
import { Suspense, useEffect, useState } from "react";

export default function UserPosts() {
	const { userData } = getUser();

	const [userPosts, setUserPosts] = useState<PostProps[]>([]);

	const getAllUserPosts = async (id: string) => {
		try {
			const requisiton = await fetch(
				`https://backend-repository.onrender.com/users/getUserPosts/${id}`,
				{
					method: "GET",
					next: {
						revalidate: 2 * 60,
						tags: ["get-user-posts"],
					},
				},
			);
			const response = await requisiton.json();

			if (response.length) setUserPosts(response);
		} catch (error) {
			throw new Error("Não foi possível encontrar os posts do usuário");
		}
	};

	useEffect(() => {
		if (userData?.id !== undefined && userData?.id !== null) {
			getAllUserPosts(userData?.id);
		}
	}, [userData?.id]);

	return (
		<section className="w-full bg-white rounded-lg border border-slate-200 p-4 lg:p-8">
			<h2 className="font-semibold text-sm lg:text-base">
				Ultimas postagens de {userData?.firstname}
			</h2>
			<p className="text-xs text-slate-500">
				Veja quais foram as suas ultimas postagens dentro do feed principal da
				nossa plataforma, além disso tenha um relatório mais detalhado sobre
				elas.
			</p>
			<Suspense fallback={<MiniLoader />}>
				<div className="w-full flex flex-col gap-4 mt-8">
					{userPosts.slice(0, 5).map((post: PostProps, index: number) => (
						<PostCard
							postContent={post}
							variant={"profilePost"}
							key={`${post.id}-${index}`}
						/>
					))}
				</div>
			</Suspense>
		</section>
	);
}
