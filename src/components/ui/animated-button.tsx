import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function AnimatedButton({
  children,
  className,
  ...props
}: AnimatedButtonProps) {
  return (
    <button
      className={cn(
        "group relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-full px-6 py-3 font-medium transition-colors duration-300 group-hover:text-white",
        className
      )}
      {...props}
    >
      <span className="absolute top-0 left-0 -z-10 block aspect-square h-full">
        <span className="bg-primary/40 group-hover:bg-primary block h-full w-full rounded-full transition-all duration-700 ease-out group-hover:w-[600%]" />
      </span>

      {children}
      <ArrowRight className="inline-block size-5 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}

export function AnimatedButtonWhite({
  children,
  className,
  ...props
}: AnimatedButtonProps) {
  return (
    <button
      className={cn(
        "group relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-full px-6 py-3 font-medium",
        className
      )}
      {...props}
    >
      <span className="absolute top-0 left-0 -z-10 block aspect-square h-full">
        <span className="block h-full w-full rounded-full bg-white/30 transition-all duration-700 ease-out group-hover:w-[600%] group-hover:bg-white" />
      </span>

      <span className="relative text-white transition-colors duration-300 group-hover:text-black">
        {children}
        <ArrowRight className="ml-2 inline-block size-5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </button>
  );
}
