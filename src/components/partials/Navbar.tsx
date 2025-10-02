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
import { useState } from "react";
import { Logo } from "../svg";
import { Button } from "../ui/button";

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ];

// const menuItems = [
//   {
//     label: "Home",
//     content: (
//       <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//         <li className="row-span-3">
//           <NavigationMenuLink asChild>
//             <Link
//               className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
//               href="/"
//             >
//               <div className="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
//               <p className="text-muted-foreground text-sm leading-tight">
//                 Beautifully designed components built with Tailwind CSS.
//               </p>
//             </Link>
//           </NavigationMenuLink>
//         </li>
//         <ListItem href="/docs" title="Introduction">
//           Re-usable components built using Radix UI and Tailwind CSS.
//         </ListItem>
//         <ListItem href="/docs/installation" title="Installation">
//           How to install dependencies and structure your app.
//         </ListItem>
//         <ListItem href="/docs/primitives/typography" title="Typography">
//           Styles for headings, paragraphs, lists...etc
//         </ListItem>
//       </ul>
//     ),
//   },
//   {
//     label: "Components",
//     content: (
//       <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
//         {components.map((component) => (
//           <ListItem
//             key={component.title}
//             title={component.title}
//             href={component.href}
//           >
//             {component.description}
//           </ListItem>
//         ))}
//       </ul>
//     ),
//   },
//   {
//     label: "Docs",
//     isLink: true,
//     href: "/docs",
//   },
//   {
//     label: "List",
//     content: (
//       <ul className="grid w-[300px] gap-4">
//         <li>
//           <NavigationMenuLink asChild>
//             <Link href="#">
//               <div className="font-medium">Components</div>
//               <div className="text-muted-foreground">
//                 Browse all components in the library.
//               </div>
//             </Link>
//           </NavigationMenuLink>
//           <NavigationMenuLink asChild>
//             <Link href="#">
//               <div className="font-medium">Documentation</div>
//               <div className="text-muted-foreground">
//                 Learn how to use the library.
//               </div>
//             </Link>
//           </NavigationMenuLink>
//           <NavigationMenuLink asChild>
//             <Link href="#">
//               <div className="font-medium">Blog</div>
//               <div className="text-muted-foreground">
//                 Read our latest blog posts.
//               </div>
//             </Link>
//           </NavigationMenuLink>
//         </li>
//       </ul>
//     ),
//   },
//   {
//     label: "Simple",
//     content: (
//       <ul className="grid w-[200px] gap-4">
//         <li>
//           <NavigationMenuLink asChild>
//             <Link href="#">Components</Link>
//           </NavigationMenuLink>
//           <NavigationMenuLink asChild>
//             <Link href="#">Documentation</Link>
//           </NavigationMenuLink>
//           <NavigationMenuLink asChild>
//             <Link href="#">Blocks</Link>
//           </NavigationMenuLink>
//         </li>
//       </ul>
//     ),
//   },
//   {
//     label: "With Icon",
//     content: (
//       <ul className="grid w-[200px] gap-4">
//         <li>
//           <NavigationMenuLink asChild>
//             <Link href="#" className="flex-row items-center gap-2">
//               <CircleHelpIcon /> Backlog
//             </Link>
//           </NavigationMenuLink>
//           <NavigationMenuLink asChild>
//             <Link href="#" className="flex-row items-center gap-2">
//               <CircleIcon /> To Do
//             </Link>
//           </NavigationMenuLink>
//           <NavigationMenuLink asChild>
//             <Link href="#" className="flex-row items-center gap-2">
//               <CircleCheckIcon /> Done
//             </Link>
//           </NavigationMenuLink>
//         </li>
//       </ul>
//     ),
//   },
// ];

const menuItems = [
  {
    label: "Solutions",
    href: "#solutions",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Contact",
    href: "#contact",
  },
  // {
  //   label: "Features",
  //   href: "#features",
  // },
  // {
  //   label: "Solutions",
  //   href: "#solutions",
  // },
  // {
  //   label: "Pricing",
  //   href: "#pricing",
  // },
  // {
  //   label: "About",
  //   href: "#about",
  // },
  // {
  //   label: "More",
  //   href: "#more",
  // },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
                onClick={() => handleRedirectScroll(item.href!)}
              >
                {item.label}
              </button>
            ))}
            {/* <NavigationMenu viewport={false}>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.isLink ? (
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href={item.href!}>{item.label}</Link>
                      </NavigationMenuLink>
                    ) : (
                      <>
                        <NavigationMenuTrigger>
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          {item.content}
                        </NavigationMenuContent>
                      </>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu> */}
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
      <Sheet open={isOpen && isMobile} onOpenChange={toggleMenu}>
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
                // href={item.href}
                className="!text-sm text-muted-foreground font-medium hover:text-foreground text-start"
                onClick={() => {
                  handleRedirectScroll(item.href!);
                  toggleMenu();
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

// function ListItem({
//   title,
//   children,
//   href,
//   ...props
// }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
//   return (
//     <li {...props}>
//       <NavigationMenuLink asChild>
//         <Link href={href}>
//           <div className="text-sm leading-none font-medium">{title}</div>
//           <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
//             {children}
//           </p>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// }
