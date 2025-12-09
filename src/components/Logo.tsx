import Image from "next/image";

import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Adibitz logo"
        width={667}
        height={150}
        className="h-7 w-auto"
      />
      <span className="sr-only">Adibitz</span>
    </Link>
  );
};

export default Logo;
