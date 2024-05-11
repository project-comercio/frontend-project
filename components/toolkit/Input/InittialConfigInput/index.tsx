import type { InputFieldProps } from "./types";

export default function InitialInputField({ label, value, onChange, placeholder }: InputFieldProps) {
	const handleChange = (e: { target: { value: any; }; }) => {
		onChange(e.target.value);
	};

	return (
		<div>
			<label className="font-medium text-sm">{label}</label>
			<input
			className="mt-1 outline-none border-b border-slate-200 py-1 text-xs lg:text-sm text-slate-500 transition-all duration-300 focus:border-b-principal"
				type="text"
				value={value}
				onChange={handleChange}
				autoComplete="off"
				placeholder={placeholder}
				maxLength={60}
				minLength={2}
			/>
		</div>
	);
}