import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-center-between py-8 h-[5rem] bg-white">
      <div className="container flex flex-center-between h-16 max-w-screen-2xl items-center">
        <div className="font-extrabold">
          <Image src={""} alt="logo" height={250} width={250}></Image>
        </div>
        <div className="flex gap-10">
          <div className="lg:flex md:hidden gap-8 text-black">
            <Link
              className="font-bold text-base transition-colors hover:text-foreground/80 text-foreground/60"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-bold text-base transition-colors hover:text-foreground/80 text-foreground/60"
              href="/about"
            >
              About
            </Link>
            <Link
              className="font-bold text-base transition-colors hover:text-foreground/80 text-foreground/60"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex-center gap-4 mr-14">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard">
              <Button className="flex-center bg-black text-white">Dashboard</Button>
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Header;
