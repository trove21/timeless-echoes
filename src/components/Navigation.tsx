import { useState } from "react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Hidden navigation trigger */}
      <div
        className="fixed top-0 right-0 w-24 h-24 z-50 flex items-center justify-center cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setIsOpen(true)}
      >
        <span
          className={cn(
            "text-label transition-opacity duration-400",
            isHovering ? "opacity-100" : "opacity-0"
          )}
        >
          MENU +
        </span>
      </div>

      {/* Full-screen menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background flex items-center justify-center transition-opacity duration-600",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="fixed top-0 right-0 w-24 h-24 flex items-center justify-center cursor-pointer z-50"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-label text-foreground">CLOSE -</span>
        </div>

        <nav className="flex flex-col items-center gap-6">
          {menuItems.map((item, index) => (
            <div key={item.label} className="overflow-hidden">
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "font-display text-5xl md:text-6xl font-light hover:text-heritage-green transition-colors block",
                  isOpen ? "menu-item-animate" : "translate-y-full",
                  `stagger-${Math.min(index + 1, 4)}`
                )}
              >
                {item.label}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};
