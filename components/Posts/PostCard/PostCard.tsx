"use client";

import React, { useEffect, useState } from "react";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { LuShare2 } from "react-icons/lu";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import type { CommentProps, PostProps } from "@/types";
import { getUser } from "@/context/UserContext";
import { toast } from "react-toastify";
import { IoIosSend } from "react-icons/io";
import OpenPostCard from "../OpenPostCard/OpenPostCard";
import UploadPhoto from "@/components/Config/UploadPhoto";

const PostCard = ({ postContent }: { postContent: PostProps }) => {
	const { userData, getUserInfo } = getUser();

	const [commentContent, setCommentContent] = useState<string>("");
	const [commentImage, setCommentImage] = useState<string>("")
	const [postComments, setPostComments] = useState<CommentProps[]>([]);

	const [openPostCard, setOpenPostCard] = useState<boolean>(false);

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const [postLikes, setPostsLikes] = useState<number | any>(postContent.likes);
	const [isLiked, setIsLiked] = useState<boolean>(
		userData?.likes.includes(postContent.id),
	);

	const handleLikePost = async () => {
		try {
			setPostsLikes(postContent.likes && postLikes + 1);
			setIsLiked(true);
			const response = await fetch(
				"https://backend-repository.onrender.com/users/likePost",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						postId: postContent.id,
						userId: userData?.id,
					}),
				},
			);
			if (response.ok) {
				await getUserInfo();
			}
		} catch (error) {
			throw new Error(`Não foi possível curtir a postagem: ${error}`);
		}
	};

	const handleDislikePost = async () => {
		try {
			setPostsLikes(postContent.likes && postLikes - 1);
			setIsLiked(false);
			const response = await fetch(
				"https://backend-repository.onrender.com/users/dilikePost",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						postId: postContent.id,
						userId: userData?.id,
					}),
				},
			);
			if (response.ok) {
				await getUserInfo();
			}
		} catch (error) {
			throw new Error(`Não foi possível curtir a postagem: ${error}`);
		}
	};

	const createComment = async () => {
		try {
			if (commentContent !== "") {
				const response = await fetch(
					"https://backend-repository.onrender.com/comments",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							postId: postContent.id,
							content: commentContent,
							creatorId: userData?.id,
							creatorImage: userData?.picture,
							creatorName: userData?.username
						}),
					},
				);
				if (response.ok) {
					setCommentContent("")
					setCommentImage("")
					await getPostsComments();
				}
			} else {
				toast.error("Digite uma mensagem válida!");
			}
		} catch (error) {
			throw new Error(`Não foi possível publicar o comentário: ${error}`);
		}
	};

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

	return isLiked ? (
		<>
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
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<article className="mt-6" onClick={() => setOpenPostCard(!openPostCard)}>
					<p className="text-sm">{postContent.content}</p>
				</article>
				{postContent.images[0] !== "" ? (
					// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
					<figure className="cursor-pointer mt-4 w-full rounded-md h-[350px] group relative block overflow-hidden" onClick={() => setOpenPostCard(!openPostCard)}>
						<img
							src={postContent.images[0]}
							alt="post-image"
							className="rounded-md absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
						/>
					</figure>
				) : null}
				<div className="w-full flex items-center justify-start gap-4 lg:gap-0 lg:justify-around mt-4" >
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div className="items-center flex gap-3 cursor-pointer" onClick={() => setOpenPostCard(!openPostCard)}>
						<FaRegComment size={18} className="gray-icon" />
						<p className="lg:block hidden text-slate-500 text-xs transition-all duration-300 hover:text-slate-700">
							{postComments.length} comentários
						</p>
					</div>
					<div className="items-center flex gap-3 cursor-pointer">
						{isLiked ? (
							<FaHeart
								size={18}
								className="colored-icon"
								onClick={() => handleDislikePost()}
							/>
						) : (
							<FaRegHeart
								size={18}
								className="gray-icon"
								onClick={() => handleLikePost()}
							/>
						)}
						<p className="lg:block hidden text-slate-500 text-xs transition-all duration-300 hover:text-slate-700">
							{postLikes} curtidas
						</p>
					</div>
					<div className="items-center flex gap-3 cursor-pointer">
						<FaRegShareFromSquare size={18} className="gray-icon" />
						<p className="lg:block hidden text-slate-500 text-xs transition-all duration-300 hover:text-slate-700">
							{postContent.shares} envios
						</p>
					</div>
					<div className="items-center flex gap-3 cursor-pointer">
						<LuShare2 size={18} className="gray-icon" />
						<p className="lg:block hidden text-slate-500 text-xs transition-all duration-300 hover:text-slate-700">
							compartilhar
						</p>
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
						value={commentContent}
						onChange={(e) => setCommentContent(e.target.value)}
						placeholder="Digite algum comentário"
						className="w-full px-4 py-2 outline-none text-xs bg-slate-100 rounded-md flex-1 text-slate-600"
					/>
					<div className="justify-around flex gap-2 items-center">
						<MdOutlineEmojiEmotions
							className="gray-icon cursor-pointer"
							size={22}
						/>
						<UploadPhoto file={commentImage} setFile={setCommentImage}>
							<MdOutlineImage className="gray-icon cursor-pointer" size={22} />
						</UploadPhoto>
						<IoIosSend
							className={`cursor-pointer ${
								commentContent !== "" ? "colored-icon" : "gray-icon"
							}`}
							onClick={() => {
								if (commentContent !== "") {
									createComment();
								}
							}}
							size={22}
						/>
					</div>
				</div>
			</div>
			<OpenPostCard showState={openPostCard} setShowState={setOpenPostCard} postContent={postContent} />
		</>
	) : null;
};

export default PostCard;
