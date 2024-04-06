import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full bg-zinc-50 flex flex-col items-center justify-center p-[10%] h-[100vh] bg-no-repeat bg-cover bg-center">
      <SignUp />
    </div>
  );
}
