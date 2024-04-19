"use client";

import { getUser } from "@/context/UserContext";
import { useState } from "react";
import ThirdStep from "./ThirdStep";
import SecondStep from "./SecondStep";
import FirstStep from "./FirstStep";

export default function Steps() {
	const { userData } = getUser();

	const [currentStep, setCurrentStep] = useState<number>(1);

	const [data, setData] = useState({
		city: "",
		state: "",
		country: "",
	});

	const handleInputChange = (fieldName: string, newValue: string) => {
		setData((prevState) => ({
			...prevState,
			[fieldName]: newValue,
		}));
	};

	return (
		<div className="max-w-6xl w-full">
			{currentStep === 1 ? (
				<FirstStep
					setCurrentStep={setCurrentStep}
					handleChange={handleInputChange}
				/>
			) : null}
			{currentStep === 2 ? (
				<SecondStep
					setCurrentStep={setCurrentStep}
					handleChange={handleInputChange}
				/>
			) : null}
			{currentStep === 3 ? (
				<ThirdStep
					setCurrentStep={setCurrentStep}
					handleChange={handleInputChange}
				/>
			) : null}
		</div>
	);
}