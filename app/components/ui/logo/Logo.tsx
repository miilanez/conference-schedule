import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        {/* <Image
          width="200"
          height="60"
          src="/assets/images/nav/logo-blue-umbrella.png"
          alt="Blue Umbrella Tech Incorporated Logo"
          className="hover:opacity-85"
        /> */}
        <h1 className="text-3xl text-white">BrandLogo</h1>
      </Link>
    </div>
  );
};

export default Logo;
