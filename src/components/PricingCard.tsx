import DownloadButton from "@/components/DownloadButton";
import appleIcon from "@/assets/icons/icon-apple.svg";
import androidIcon from "@/assets/icons/icon-android.svg";

type PricingCardProps = { className?: string };

export default function PricingCard({ className = "" }: PricingCardProps) {
  return (
    <article
      className={`flex h-[546px] w-full flex-col rounded-xl bg-coral px-9 pt-12 pb-12 text-cream md:w-[399px] md:px-12 lg:h-[625px] lg:w-[446px] lg:px-[54px] lg:pt-[58px] ${className}`}
    >
      <h2 className="text-[32px] leading-[40px] font-bold lg:text-[40px] lg:leading-[52px]">
        Premium EQ
      </h2>
      <p className="mt-3 text-[18px] leading-[28px] lg:mt-[22px] lg:text-[20px] lg:leading-[34px]">
        Get expert-level control with a robust equalizer, volume mixer, and
        spatial audio. Take your listening experience to a whole new level and
        access all our incredible features!
      </p>
      <p className="mt-9 ml-1.5 flex items-center gap-4 lg:mt-[39px] lg:ml-0">
        <span className="text-[65px] leading-[52px] font-bold">$4</span>
        <span className="text-[20px] leading-8 tracking-[-0.2px]">/ month</span>
      </p>
      <div className="mt-8 ml-1.5 flex flex-col gap-4 lg:mt-[46px] lg:ml-0">
        <DownloadButton
          href="#"
          label="iOS Download"
          icon={appleIcon}
          variant="dark"
        />
        <DownloadButton
          href="#"
          label="Android Download"
          icon={androidIcon}
          variant="light"
        />
      </div>
    </article>
  );
}
