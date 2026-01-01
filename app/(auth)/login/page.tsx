"use client";
import Aurora from "@/app/components/react-bits/Aurora";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="relative h-screen w-full bg-black">
      <div className="absolute inset-0">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.6}
        />
      </div>
      <div className="containerOfTheCard relative w-full h-full flex justify-center items-center">
        <div className="Card w-full max-w-md p-10 rounded-4xl border border-white/10 bg-white/4 backdrop-blur-2xl shadow-2xl flex flex-col">
          <div className="cardContentTop flex justify-center items-center flex-col text-white">
            <h1 className=" text-center text-4xl font-semibold tracking-[0.3em] uppercase mb-2">
              MATCHUP
            </h1>
            <p className="text-white/27 text-[0.8rem] text-center tracking-widest uppercase">
              IDENTIFICATION REQUIRED TO ACCESS VAULT
            </p>
          </div>
          <div className="w-full border border-white/20 my-4"></div>
          <div className="cardContentBottom flex justify-evenly items-center gap-4 mt-8">
            <button
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white text-black
              rounded-xl font-bold text-[10px] tracking-widest uppercase transition-all duration-200
              hover:bg-white/30 hover:text-white active:scale-95
              hover:shadow-[0_0_25px_rgba(255,255,200,0.4)]"
            >
              <Image
                src="/icons-google.png"
                alt="Logo_G"
                width={25}
                height={25}
                priority
              />
              Google
            </button>

            <button
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white/20 text-white
              rounded-xl font-bold text-[10px] tracking-widest uppercase transition-all duration-200
              hover:bg-white/30 hover:text-white active:scale-95
              hover:shadow-[0_0_25px_rgba(255,255,200,0.4)]"
            >
              <Image
                src="/icons-guest.png"
                alt="Logo_G"
                width={25}
                height={25}
                priority
              />
              Guest
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
