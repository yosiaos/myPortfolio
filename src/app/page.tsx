  "use client";

  import Link from "next/link";
  import { ReactTyped } from "react-typed";

  export default function LandingPage(){
    return (
      <main className= "flex min-h-screen items-center justify-center bg-white">
        <h1 className="text-7xl font-bold font-poppins text-black">
          <ReactTyped
            strings = {[
              "Welcome to Yosia's Portfolio!" ]}
            typeSpeed = {40}
            backSpeed = {50}
            loop
          />
        </h1>

        <div className="absolute bottom-10 flex justify-center w-full">
          <Link href="/home">
          <span className="relative cursor-pointer font-poppins font-bold text-lg text-black group">
            Get Started
            <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-black scale-x-0 transition-transform duration-300 group-hover:scale-x-102 group-hover:origin-left origin-right"></span>
          </span>
          </Link>
        </div>
      </main>
    )
  }
