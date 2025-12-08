import Image from "next/image";

import Link from "next/link";

const Logo = ({
  textClassName,
  logoClassName
}: {
  textClassName?: string;
  logoClassName?: string;
}) => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Adibitz logo"
        width={512}
        height={512}
        className="h-7 w-auto"
      />
      <span className="sr-only">Adibitz</span>
    </Link>
  );
};

export default Logo;
