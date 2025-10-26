import { cn } from "@/lib/utils";
import Image from "next/image";
import { JSX } from "react";

interface Props {
  index: number;
  category: JSX.Element;
  title: string;
  src: string;
  src2?: string | null;
  content?: JSX.Element;
}

const FeatureCard = ({ index, category, title, src, src2 }: Props) => {
  return (
    <div
      className={cn(
        "flex lg:h-[29.4rem] md:h-[29rem] sm:h-[24rem] h-[23rem] items-start justify-start overflow-hidden rounded-3xl border-8 border-background sm:rounded-4xl shadow-[4px_8px_14px_6px_#E7F2FF] group hover:-translate-y-2 transition duration-300",
        index % 2 === 0
          ? "bg-gradient-to-b from-[#2C80FF] to-[#002585]"
          : "bg-gradient-to-b from-[#78FFF9] to-[#628DFF]",
        src2 ? "lg:pr-6 md:pr-4 pr-4" : "md:w-[24rem] w-[18rem] lg:w-[24rem]"
      )}
    >
      <div className="h-full md:w-[24rem] w-[18rem] lg:w-[24rem]">
        <div className="md:space-y-2 space-y-3 sm:p-8 p-6 !pb-0 h-36 sm:h-[10.5rem] shrink-0">
          <h4
            className={cn(
              "md:text-[28px] sm:text-[22px] text-xl prose font-bold leading-snug w-full whitespace-nowrap",
              index % 2 === 0 ? "text-background" : "text-foreground"
            )}
          >
            {category}
          </h4>
          <p
            className={cn(
              "md:text-base sm:text-sm text-sm",
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
            width={800}
            height={800}
            className="object-cover h-full w-full group-hover:scale-105 transition duration-300 -mb-1"
            quality={100}
          />
        </div>
      </div>
      {src2 && (
        <div className="h-auto sm:w-[60%] w-[55%] -ml-2 overflow-hidden shrink mt-auto">
          <Image
            src={src2}
            alt={title}
            width={500}
            height={500}
            className="object-cover h-full w-full group-hover:scale-105 transition duration-300 -mb-1"
          />
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
