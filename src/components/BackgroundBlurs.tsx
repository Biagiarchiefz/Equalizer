import Image from "next/image";
import mint from "@/assets/icons/blur-mint.svg";
import peach from "@/assets/icons/blur-peach.svg";
import amber from "@/assets/icons/blur-amber.svg";

const blurs = [
  {
    src: mint,
    position:
      "left-[159px] top-[-104px] size-[281.4px] md:left-[345px] md:top-[41px] md:size-[384px] lg:left-[899.5px] lg:top-[100.5px]",
  },
  {
    src: peach,
    position:
      "hidden size-[384px] md:block md:left-[-254px] md:top-[-112px] lg:left-[-146px] lg:top-[-112px]",
  },
  {
    src: peach,
    position: "hidden size-[384px] lg:block lg:left-[1083px] lg:top-[1262px]",
  },
  {
    src: amber,
    position:
      "left-[159px] top-[94.6px] size-[281.4px] md:left-[345px] md:top-[312px] md:size-[384px] lg:left-[899.5px] lg:top-[371.5px]",
  },
];

export default function BackgroundBlurs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {blurs.map(({ src, position }) => (
        <div key={position} className={`absolute ${position}`}>
          <div className="absolute inset-[-48.3%] md:inset-[-35.39%]">
            <Image src={src} alt="" className="block size-full max-w-none" />
          </div>
        </div>
      ))}
    </div>
  );
}
