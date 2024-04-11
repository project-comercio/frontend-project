import PostPopup from "@/components/Popups/PostPopup";
import type { CommentProps, PostProps } from "@/types";
import React, { useEffect, useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import Comment from "./Comment/Comment";
interface OpenPostCardProps {
	showState: boolean;
	setShowState(arg: boolean): void;
	postContent: PostProps;
}

const OpenPostCard = ({
	showState,
	setShowState,
	postContent,
}: OpenPostCardProps) => {
  const [postComments, setPostComments] = useState<CommentProps[]>([])
	
  const getPostsComments = async () => {
		try {
			const requisiton = await fetch(
				`https://backend-repository.onrender.com/comments/findPostComments/${postContent.id}`,
				{
					method: "GET",
				},
			);
			const response = await requisiton.json();
			if (response) setPostComments(response);
		} catch (error) {
			console.log(error);
		}
	};

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getPostsComments()
  }, [])

  return (
		<PostPopup showState={showState} setShowState={setShowState} title="">
			<div className="ease mt-4 flex w-full justify-between gap-3 items-center">
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
			</div>
			<div className="mt-6">
				<article>
					<p className="text-sm">{postContent.content}</p>
					{postContent.images[0] !== "" ? (
						<figure className="mt-4 rounded-md w-full">
							<img src={postContent.images[0]} className="object-cover h-full max-h-[375px] w-full rounded-sm" alt="post-creator-profile-picture" />
						</figure>
					) : null}
				</article>
				<div className="justify-between flex mt-4 border-b border-slate-200 pb-6">
					<div className="w-full flex justify-start items-center">
						<div className="items-center flex gap-3 cursor-pointer">
							<FaRegComment size={18} className="gray-icon" />
							<p className="lg:block hidden text-slate-500 text-xs">
								{postContent.comments} comentários
							</p>
						</div>
					</div>
					<div className="w-full flex justify-end items-center">
						<div className="items-center flex gap-3 cursor-pointer">
							<FaRegShareFromSquare size={18} className="gray-icon" />
							<p className="lg:block hidden text-slate-500 text-xs">
								{postContent.shares} envios
							</p>
						</div>
					</div>
				</div>
        <div className="mt-6 flex flex-col gap-6">
          {postComments.length ? (
            <>
              {postComments.map((comment: CommentProps, index: number) => (
                <Comment key={`${comment.creatorName}-${index}`} commentContent={comment} />
              ))}
            </>
          ) : (
            <p className="w-full items-center text-xs lg:text-sm text-slate-500 flex justify-center my-12">
              Ninguém comentou nesse post
            </p>
          )}
        </div>
			</div>
		</PostPopup>
	);
};

export default OpenPostCard;
