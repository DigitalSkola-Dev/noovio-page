import Link from "next/link";
import Icon from "./Icon";
import Noovio from "./Noovio";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <Icon className="md:size-7 size-6" />
      <Noovio className="w-auto md:h-7 h-6" />
    </Link>
  );
};

export default Logo;
