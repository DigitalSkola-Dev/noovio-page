"use client";

import { usePathname, useRouter } from "next/navigation";

const menus = [
  {
    label: "Terms of Use",
    href: "/terms",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
];

const LegalLayout = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter();
  const pathname = usePathname();

  const isCurrentPage = (href: string) => {
    return pathname === href;
  };

  return (
    <div>
      {/* <header className="sticky top-0 z-50 left-0 w-full bg-background h-20 border-b">
        <div className="container flex items-center justify-between h-full">
          <button
            type="button"
            onClick={() => {
              push("/");
            }}
          >
            <ChevronLeft />
          </button>

          <ul className="hidden items-center gap-6 w-full flex-1 justify-end md:flex">
            {menus.map((menu, index) => (
              <li
                key={index}
                className={cn(
                  "md:!text-base !text-sm font-medium py-2",
                  isCurrentPage(menu.href) && "border-b-2 border-foreground"
                )}
              >
                <Link href={menu.href}>{menu.label}</Link>
              </li>
            ))}
          </ul>
          <div className="md:hidden block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Open menu</span>
                  <Menu className="!w-6 !h-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="border !border-[#E6EDFF] !rounded-lg !p-2"
                align="end"
              >
                {menus.map((menu, index) => (
                  <DropdownMenuItem
                    key={index}
                    className={cn(
                      "flex items-center gap-2 justify-start hover:!bg-muted-primary",
                      isCurrentPage(menu.href) && "bg-muted-primary"
                    )}
                  >
                    <Link href={menu.href}>{menu.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header> */}
      <div className="container">{children}</div>
      {/* <footer className="h-18 bg-secondary border-t">
        <div className="container flex items-center justify-center h-full">
          <small className="md:!text-sm !text-xs">
            © 2025 Noovio. All rights reserved.
          </small>
        </div>
      </footer> */}
    </div>
  );
};

export default LegalLayout;
