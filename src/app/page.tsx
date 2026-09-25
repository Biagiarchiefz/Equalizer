import Image from "next/image";
import BackgroundBlurs from "@/components/BackgroundBlurs";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Showcase from "@/components/sections/Showcase";
import Footer from "@/components/sections/Footer";
import heroPattern from "@/assets/hero-abstract-pattern.png";

export default function Home() {
  return (
    <div className="relative mx-auto w-full overflow-clip bg-cream md:w-[768px] lg:w-[1440px]">
      <BackgroundBlurs />
      <Image
        src={heroPattern}
        alt=""
        width={312}
        height={428}
        priority
        className="absolute top-0 hidden max-w-none md:left-[537px] md:block md:h-[366px] md:w-[267px] lg:left-[1128px] lg:h-[428px] lg:w-[312px]"
      />
      <main className="relative flex flex-col pb-[75px] md:pb-[83px] lg:pb-[91px]">
        <Header />
        <Hero />
        <Showcase />
        <Footer />
      </main>
    </div>
  );
}
