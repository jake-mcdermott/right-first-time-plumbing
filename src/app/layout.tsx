import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Phone, Mail, MapPin, Menu, Droplet, Wrench, CheckCircle2 } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Right First Time Plumbing | Carrboro & Chapel Hill NC",
  description:
    "Trusted, licensed plumber serving Carrboro, Chapel Hill, Hillsborough and surrounding areas. Emergency service, repairs, installations – done right the first time.",
  keywords:
    "plumber Carrboro, plumbing Chapel Hill, emergency plumber Durham, water heater installation NC, leak repair Carrboro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full shadow-md flex items-center justify-center ring-1 ring-blue-300/40 hover:scale-105 transition-transform">
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

            {/* Desktop nav + call button */}
            <div className="hidden md:flex items-center gap-10">
              <nav className="flex gap-8 font-medium text-gray-700">
                <a href="#services" className="hover:text-blue-700 transition-colors">
                  Services
                </a>
                <a href="#why-us" className="hover:text-blue-700 transition-colors">
                  Why Us
                </a>
                <a href="#contact" className="hover:text-blue-700 transition-colors">
                  Contact
                </a>
              </nav>

              <a
                href="tel:+19195551234"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 shadow-md transition"
              >
                <Phone size={20} />
                (919) 555-1234
              </a>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-gray-800 p-2 rounded hover:bg-gray-100 transition">
              <Menu size={28} />
            </button>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        {/* Mobile floating contact bar */}
        <div className="fixed bottom-0 inset-x-0 bg-blue-700 text-white p-4 flex justify-around items-center md:hidden z-50 shadow-2xl border-t border-blue-600">
          <a href="tel:+19195551234" className="flex flex-col items-center gap-1">
            <Phone size={26} />
            <span className="text-xs font-medium">Call</span>
          </a>
          <a href="mailto:service@rightfirsttimeplumbing.com" className="flex flex-col items-center gap-1">
            <Mail size={26} />
            <span className="text-xs font-medium">Email</span>
          </a>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* Brand – Larger stylized logo */}
              <div>
                {/* Brand */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full shadow-xl flex items-center justify-center ring-2 ring-blue-400/30">
                    <Wrench size={40} className="text-white" strokeWidth={2.2} />
                  </div>

                  <div>
                    <div className="text-2xl font-bold text-white tracking-tight">
                      Right First Time Plumbing
                    </div>
                    <div className="text-sm text-blue-300 font-medium">
                      Done Right • First Time
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-6">
                  Licensed & insured plumber proudly serving Carrboro, Chapel Hill, Hillsborough, Southern Village and surrounding Orange & Durham County areas.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-5">Quick Links</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
                  <li><a href="#why-us" className="hover:text-blue-400 transition">Why Choose Us</a></li>
                  <li><a href="#contact" className="hover:text-blue-400 transition">Get a Quote</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">Emergency Service</a></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-5">Services</h4>
                <ul className="space-y-3 text-sm">
                  <li>Leak Detection & Repair</li>
                  <li>Water Heater Services</li>
                  <li>Emergency Plumbing</li>
                  <li>Toilet & Fixture Repair</li>
                  <li>Whole-Home Repiping</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-5">Contact</h4>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <a href="tel:+19195551234" className="hover:text-blue-400 transition font-medium">
                        (919) 555-1234
                      </a>
                      <p className="text-gray-500 text-xs">24/7 Emergency</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                    <a href="mailto:service@rightfirsttimeplumbing.com" className="hover:text-blue-400 transition break-words">
                      service@rightfirsttimeplumbing.com
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                    <span>Serving Carrboro, Chapel Hill, Hillsborough & Durham area</span>
                  </div>
                </div>

                <p className="mt-6 text-sm text-gray-500">
                  NC Plumbing License #12345 • Fully Insured
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
              <p>© {new Date().getFullYear()} Right First Time Plumbing. All rights reserved.</p>
              <p className="mt-1">Proudly local to Orange & Durham Counties, North Carolina</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}