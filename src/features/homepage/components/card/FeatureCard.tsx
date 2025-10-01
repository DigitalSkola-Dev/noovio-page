import { cn } from "@/lib/utils";
import Image from "next/image";
import { JSX } from "react";

interface Props {
  index: number;
  category: string;
  title: string;
  src: string;
  content?: JSX.Element;
}

const FeatureCard = ({ index, category, title, src }: Props) => {
  return (
    <div
      className={cn(
        "flex lg:h-[34.5rem] md:h-[34rem] sm:h-[29rem] md:w-[24rem] w-[18rem] h-[26rem] lg:w-[24rem] flex-col items-start justify-start overflow-hidden rounded-3xl border-8 border-background sm:rounded-4xl shadow-[4px_8px_14px_6px_#E7F2FF] group hover:-translate-y-2 transition duration-300",
        index % 2 === 0 ? "bg-[#2C80FF]" : "bg-[#78FFF9]"
      )}
    >
      <div className="md:space-y-4 space-y-3 sm:p-8 p-6 !pb-0 h-36 sm:h-48 shrink-0">
        <h4
          className={cn(
            "md:text-3xl sm:text-2xl text-xl font-bold leading-snug md:max-w-[95%] w-full",
            index % 2 === 0 ? "text-background" : "text-foreground"
          )}
        >
          {category}
        </h4>
        <p
          className={cn(
            "md:text-lg sm:text-base text-[15px]",
            index % 2 === 0 ? "text-background" : "text-foreground"
          )}
        >
          {title}
        </p>
      </div>
      <div className="h-auto w-full overflow-hidden shrink mt-auto">
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          className="object-cover h-full w-full group-hover:scale-105 transition duration-300 -mb-1"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
