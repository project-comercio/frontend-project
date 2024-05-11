import type { PostProps } from "@/types";

export interface OpenPostCardProps {
	showState: boolean;
	setShowState(arg: boolean): void;
	postContent: PostProps;
}
