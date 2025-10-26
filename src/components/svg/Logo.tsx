import Link from "next/link";
import Icon from "./Icon";
import Noovio from "./Noovio";

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Link href="/" className={`flex items-center gap-2 shrink-0 ${className}`}>
      <Icon className="sm:size-7 size-6" />
      <Noovio className="w-auto md:h-7 h-6" />
    </Link>
  );
};

export default Logo;
