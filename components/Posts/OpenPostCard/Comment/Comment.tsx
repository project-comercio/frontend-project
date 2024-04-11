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
			<article className="w-full">
				<p className="text-xs lg:text-sm">{commentContent.content}</p>
			</article>
		</div>
	);
}
