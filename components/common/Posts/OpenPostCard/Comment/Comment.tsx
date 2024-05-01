import type { CommentProps } from "@/types";

export default function Comment({
	commentContent,
}: { commentContent: CommentProps }) {
	return (
		<div className="flex w-full gap-3 justify-between">
			<figure className="max-w-8 max-h-8">
				<img
          src={commentContent?.creatorImage}
					className="rounded-full h-full w-full"
					alt="comment-creator-profile-picture"
				/>
			</figure>
			<article className="w-full flex flex-col justify-center">
				<p className="text-xs lg:text-sm text-slate-700">{commentContent.creatorName}</p>
				<p className="text-xs text-slate-500">{commentContent.content}</p>
			</article>
		</div>
	);
}
