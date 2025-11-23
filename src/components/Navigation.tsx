import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "HOME", href: "#home" },
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "PROCESS", href: "#process" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="font-display text-2xl tracking-[0.2em]">
            DOUBLE R
          </a>
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 hover:text-heritage-green transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/95 backdrop-blur-xl transition-opacity duration-500",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-6 h-full flex flex-col items-center justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 p-2 hover:text-heritage-green transition-colors"
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>

          <nav className="flex flex-col items-center gap-8">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "font-display text-5xl md:text-6xl font-light hover:text-heritage-green transition-colors opacity-0 animate-fade-in",
                  `stagger-${Math.min(index + 1, 4)}`
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="absolute bottom-12 flex flex-col items-center gap-3 opacity-0 animate-fade-in stagger-4">
            <div className="h-px w-32 bg-heritage-green/30" />
            <a href="tel:9495551234" className="font-body text-sm hover:text-heritage-green transition-colors">
              (949) 555-1234
            </a>
            <a href="mailto:info@doublerr.com" className="font-body text-sm hover:text-heritage-green transition-colors">
              info@doublerr.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
