"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import { NAV_ITEMS, PHONE_TEL, PHONE_DISPLAY } from "@/constants";

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

    NAV_ITEMS.forEach((item) => {
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
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="block h-20 sm:h-20 lg:h-25 flex items-center">
            <img
              src="/logo.svg"
              alt="Right First Time Plumbing Logo"
              className="h-full w-auto transition-transform hover:scale-105 object-contain"
            />
          </Link>
        </div> 
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">

        <nav className="flex gap-8 font-medium text-gray-700">
          {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative transition-colors duration-200 cursor-pointer
                  text-gray-700
                  hover:text-brand-dark
                  ${active === item.id ? "text-brand" : ""}
                `}
              >
                {item.label}

                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] bg-brand transition-all duration-300 ease-out
                    ${active === item.id 
                      ? "w-full" 
                      : "w-0 group-hover:w-full"  // ← hover underline grows
                    }
                  `}
                />
              </button>
            ))}
          </nav>

          <a
            href={PHONE_TEL}
            className="bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 shadow-md transition"
          >
            <Phone size={20} />
            {PHONE_DISPLAY}
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

            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left hover:text-brand-dark transition
                  ${active === item.id ? "text-brand" : ""}
                `}
              >
                {item.label}
              </button>
            ))}

            <a
              href={PHONE_TEL}
              className="bg-brand text-white px-5 py-3 rounded-lg text-center font-semibold"
            >
              Call {PHONE_DISPLAY}
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}
