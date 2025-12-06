type LargeHeadingProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export default function LargeHeading<T extends React.ElementType = "h1">({
  as,
  children,
  ...props
}: LargeHeadingProps<T>) {
  const Component = as || "h1";

  return (
    <Component
      {...props}
      className="stroke-text w-full overflow-hidden font-sans text-[8rem] font-bold text-transparent sm:text-[10rem] md:text-[11rem] lg:text-[12rem]"
    >
      {children}
    </Component>
  );
}
