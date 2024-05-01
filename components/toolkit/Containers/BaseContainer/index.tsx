import { ContainerProps } from "@/types";

export default function Container({ className, children }: ContainerProps) {
  <div className={`w-full ${className}`}>
    <section className="mx-auto max-w-xl lg:max-w-6xl py-12 lg:py-20 px-4 lg:px-12 flex flex-col items-center">
      {children}
    </section>
  </div>
}