"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Menu, X, Wrench } from "lucide-react";

const navItems = [
  { id: "services", label: "Services" },
  { id: "why-us", label: "Why Us" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const headerRef = useRef<HTMLElement>(null);

  /* -------------------------------- */
  /* Header height -> CSS variable    */
  /* -------------------------------- */

  useEffect(() => {
    if (!headerRef.current) return;

    const updateHeight = () => {
      const h = headerRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty("--header-height", `${h}px`);
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, []);

  /* -------------------------------- */
  /* Smooth scroll helper             */
  /* -------------------------------- */

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileOpen(false);
  };

  /* -------------------------------- */
  /* Active section tracking          */
  /* -------------------------------- */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <div
          className="flex items-center gap-3 sm:gap-4 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full shadow-md flex items-center justify-center">
            <Wrench size={32} className="text-white" strokeWidth={2.2} />
          </div>

          <div className="leading-tight">
            <div className="text-xl sm:text-2xl font-extrabold text-blue-950 tracking-tight">
              Right First Time
            </div>
            <div className="text-xs sm:text-sm font-semibold text-blue-700">
              Plumbing
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">

          <nav className="flex gap-8 font-medium text-gray-700">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative transition-colors cursor-pointer hover:text-blue-700
                  ${active === item.id ? "text-blue-700" : ""}
                `}
              >
                {item.label}

                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300
                    ${active === item.id ? "w-full" : "w-0"}
                  `}
                />
              </button>
            ))}

          </nav>

          <a
            href="tel:+19195551234"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 shadow-md transition"
          >
            <Phone size={20} />
            (919) 555-1234
          </a>

        </div>

        {/* Mobile button */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded hover:bg-gray-100 transition"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

        {/* Mobile menu */}
        {mobileOpen && (
            
        <div
            className="
            md:hidden
            absolute left-0 right-0
            top-full
            bg-white
            border-t border-gray-200
            shadow-lg
            animate-in fade-in slide-in-from-top-2 duration-200
            "
        >          
            
            <nav className="flex flex-col px-6 py-6 gap-6 text-lg font-medium text-gray-700">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left hover:text-blue-700 transition
                  ${active === item.id ? "text-blue-700" : ""}
                `}
              >
                {item.label}
              </button>
            ))}

            <a
              href="tel:+19195551234"
              className="bg-blue-700 text-white px-5 py-3 rounded-lg text-center font-semibold"
            >
              Call (919) 555-1234
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}
