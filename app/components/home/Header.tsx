import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-9 left-1/2 -translate-x-1/2 z-50 w-[60%]">
      <nav className="flex-1 flex  justify-evenly items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white">
        <div className="flex flex-1">
          <Image
            src="/icons-google.png"
            alt="Logo_G"
            width={25}
            height={25}
            priority
          />
          <span className="tracking-[0.2em] text-[1.1rem] font-semibold">
            Boys Harmony
          </span>
        </div>
        <ul className="flex gap-7">
          <li>home</li>
          <li>gallery</li>
          <li>about</li>
        </ul>
      </nav>
    </header>
  );
}
