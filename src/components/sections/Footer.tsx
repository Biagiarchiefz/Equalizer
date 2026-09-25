import Image from "next/image";
import logo from "@/assets/icons/logo-equalizer.svg";
import SocialIcons from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="mt-[390px] ml-6 grid w-[327px] items-start md:mt-[183px] md:ml-[33px] md:h-[143px] md:w-[696px] md:grid-cols-[366px_1fr] lg:mt-[202px] lg:ml-[165px] lg:h-[79px] lg:w-[1110px] lg:grid-cols-[285px_366px_1fr]">
      <Image
        src={logo}
        alt="Equalizer"
        className="mb-8 h-8 w-[146px] md:col-span-2 lg:col-span-1 lg:mb-0"
      />
      <div className="text-[16px] leading-[26px]">
        <p className="mb-px">All rights reserved © Equalizer 2021</p>
        <p>
          Have any problems? Contact us via social media or email us at{" "}
          <a href="mailto:equalizer@example.com" className="font-bold">
            equalizer@example.com
          </a>
        </p>
      </div>
      <SocialIcons className="mt-16 justify-self-start md:mt-[30px] md:justify-self-end lg:mt-[29px]" />
    </footer>
  );
}
