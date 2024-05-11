import { ContainerProps } from "@/types";

export default function SmallContainer({ className, children }: ContainerProps) {
  <div className={`w-full ${className}`}>
    <section className="mx-auto max-w-xl lg:max-w-3xl py-12 lg:py-20 px-4 lg:px-12 flex flex-col items-center">
      {children}
    </section>
  </div>
}