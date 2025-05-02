"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/assets/1.png";
const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      className="cursor-pointer"
      src={logo}
      height="150"
      width="150"
      alt="Logo"
    />
  );
};

export default Logo;
