import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/img/app-logo.svg"
        alt="Logo"
        width={100}
        height={100}
        priority
      />
    </Link>
  );
};

export default Logo;
