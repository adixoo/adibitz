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
      className="stroke-text font-sans text-[12rem] font-bold text-transparent"
    >
      {children}
    </Component>
  );
}
