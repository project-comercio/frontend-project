export interface StepWrapperProps {
	setCurrentStep(arg: number): void;
	handleChange(arg1: string, arg2: string): void;
	data?: {
		city: string;
		state: string;
		country: string;
		type: string;
		cpf: string;
		cnpj: string;
		address: string;
		telephone: string,
		preferences: string,
		workField: string,
		companyField: string
	};
}

export interface ItemProps {
  label: string
  value: string
}