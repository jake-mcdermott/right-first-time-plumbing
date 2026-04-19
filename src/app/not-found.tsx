import Link from "next/link";
import { Phone, Home } from "lucide-react";
import { PHONE_TEL, PHONE_DISPLAY } from "@/constants";

export const metadata = {
  title: "Page Not Found | Right First Time Plumbing",
  description: "Sorry, we couldn't find that page. Get back to trusted plumbing services in Carrboro & Chapel Hill.",
  robots: "noindex",
};

export default function NotFound() {
  return (
    <main className="flex-grow flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 text-center">
      <div className="w-full max-w-xl md:max-w-2xl space-y-6 sm:space-y-8">
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-brand tracking-tight">
          404
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Oops! Page Not Found
        </h2>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-brand text-white hover:bg-brand-dark font-bold text-lg sm:text-xl py-4 sm:py-5 px-8 sm:px-10 rounded-xl shadow-lg transition transform hover:-translate-y-1 hover:scale-105 gap-3 min-w-[180px]"
          >
            <Home size={28} />
            Return Home
          </Link>

          <a
            href={PHONE_TEL}
            className="inline-flex items-center justify-center bg-white text-brand border-2 border-brand hover:bg-brand/10 font-bold text-lg sm:text-xl py-4 sm:py-5 px-8 sm:px-10 rounded-xl shadow-lg transition transform hover:-translate-y-1 hover:scale-105 gap-3 min-w-[220px]"
          >
            <Phone size={28} />
            Call {PHONE_DISPLAY}
          </a>
        </div>

        <p className="text-base sm:text-lg text-gray-700">
          Or check out our{" "}
          <Link href="/#services" className="text-brand underline hover:text-brand-dark font-medium">
            services
          </Link>{" "}
          or{" "}
          <Link href="/#contact" className="text-brand underline hover:text-brand-dark font-medium">
            contact us
          </Link>{" "}
          for immediate help.
        </p>
      </div>
    </main>
  );
}
