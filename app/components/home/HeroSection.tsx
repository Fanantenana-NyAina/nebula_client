"use client";
import Aurora from "../react-bits/Aurora";

export default function HeroSection() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-black">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.6}
      />
    </div>
  );
}
