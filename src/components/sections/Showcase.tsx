import Image from "next/image";
import phone from "@/assets/device-iphone-mockup.png";
import darkPattern from "@/assets/mid-section-dark-pattern.png";
import PricingCard from "@/components/PricingCard";

export default function Showcase() {
  return (
    <section className="relative mt-[166px] h-[600px] w-full rounded-xl bg-ink md:mt-[249px] md:ml-[33px] md:w-[696px] lg:mt-[321px] lg:ml-[165px] lg:w-[1110px]">
      <div className="absolute inset-0 overflow-clip rounded-xl">
        <div className="absolute top-0 left-12 h-[37px] w-[70px] bg-mint md:hidden" />
        <Image
          src={darkPattern}
          alt=""
          width={312}
          height={428}
          className="absolute top-9 left-12 h-[384px] w-[280px] max-w-none md:top-0 md:left-[229px] lg:left-[336px] lg:h-[428px] lg:w-[312px]"
        />
      </div>
      <div className="absolute top-[-98px] left-[81px] h-[430px] w-[209px] overflow-clip md:top-[-138px] md:left-[64px] md:h-[556px] md:w-[270px] lg:top-[-213px] lg:left-[102px] lg:h-[642px] lg:w-[312px]">
        <Image
          src={phone}
          alt="Equalizer app showing a 10 dB treble boost"
          width={369}
          height={642}
          className="-ml-[19px] h-[430px] w-[247px] max-w-none md:-ml-[25px] md:h-[556px] md:w-[320px] lg:-ml-[29px] lg:h-[642px] lg:w-[369px]"
        />
      </div>
      <PricingCard className="absolute top-[380px] left-0 md:top-[150px] md:left-[239px] lg:top-[90px] lg:left-[569px]" />
    </section>
  );
}
