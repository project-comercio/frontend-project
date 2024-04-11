import type { PopupProps } from "@/types";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function PostPopup({
	children,
	showState,
	setShowState,
}: PopupProps) {
	return (
		<div className={`popup-wrapper z-[999] ${showState ? "block" : "hidden"}`}>
			<div className="glassmorphism rounded-xl">
				<div className="max-w-[750px] overflow-y-scroll h-full max-h-[800px] w-full p-4 bg-white rounded-xl">
					<div className="flex justify-end items-center">
						<IoCloseOutline
							size={25}
							className="cursor-pointer"
							onClick={async () => {
								setShowState(false);
							}}
						/>
					</div>
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
}
