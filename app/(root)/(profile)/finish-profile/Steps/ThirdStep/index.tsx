import type { StepWrapperProps } from "../types";

export default function ThirdStep({
	setCurrentStep,
	handleChange,
	data
}: StepWrapperProps) {
	return (
		<div className="w-full flex flex-col items-center">
			<div className="mt-8 lg:mt-16 w-full max-w-xl">step 3</div>
		</div>
	);
}
