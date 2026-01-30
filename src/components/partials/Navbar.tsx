"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks";
import { handleRedirectScroll } from "@/utils/redirect";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Logo } from "../svg";
import { Button } from "../ui/button";

const menuItems = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Solutions",
    href: "#about",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { push } = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleRedirect = () => {
    window.open(process.env.NEXT_PUBLIC_APP_URL as string, "_blank");
  };

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const renderContent = () => {
    if (isMobile || isTablet) {
      return (
        <div className="items-center justify-between relative flex lg:hidden container">
          <Logo />
          <Button onClick={toggleMenu} variant="ghost" size="icon">
            <Menu className="text-primary size-5" />
          </Button>
        </div>
      );
    } else {
      return (
        <div className="container items-center justify-between relative hidden lg:flex">
          <Logo />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className="hover:!bg-muted px-6 py-2.5 rounded-lg font-medium text-muted-foreground hover:text-foreground cursor-pointer"
                onClick={() => {
                  const href = item.href!;
                  if (href.startsWith("/")) {
                    push(href);
                    return;
                  }

                  if (pathname !== "/") {
                    push("/");
                    setTimeout(() => handleRedirectScroll(href), 300);
                  } else {
                    handleRedirectScroll(href);
                  }
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <Button
            className="h-10 px-8 bg-gradient-to-r from-primary rounded-xl to-primary-accent hover:opacity-90"
            onClick={handleRedirect}
          >
            Get Started
          </Button>
        </div>
      );
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full h-20 flex items-center bg-background">
        {renderContent()}
      </nav>

      {/* Sheet Navbar */}
      <Sheet open={isOpen} onOpenChange={toggleMenu}>
        <SheetContent>
          <SheetHeader className="h-20 flex items-start mt-4">
            <SheetTitle>
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <div className="p-4 flex flex-col gap-5 h-full overflow-y-auto -mt-10">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className="!text-sm text-muted-foreground font-medium hover:text-foreground text-start"
                onClick={() => {
                  const href = item.href!;
                  toggleMenu();

                  if (href.startsWith("/")) {
                    push(href);
                  } else if (pathname !== "/") {
                    push("/");
                    setTimeout(() => handleRedirectScroll(href), 300);
                  } else {
                    handleRedirectScroll(href);
                  }
                }}
              >
                {item.label}
              </button>
            ))}
            <Button
              className="h-10 rounded-lg px-8 bg-gradient-to-r from-primary to-primary-accent text-background hover:opacity-90 !mt-2"
              onClick={handleRedirect}
            >
              Get Started
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;
