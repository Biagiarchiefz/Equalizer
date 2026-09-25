import Image from "next/image";
import logo from "@/assets/icons/logo-equalizer.svg";

export default function Header() {
  return (
    <header className="px-6 pt-10 md:px-[39px] md:pt-[62px] lg:px-[165px]">
      <Image src={logo} alt="Equalizer" priority className="h-8 w-[146px]" />
    </header>
  );
}
