import { Phone, Mail, MapPin } from "lucide-react";
import {
  PHONE_TEL,
  PHONE_DISPLAY,
  EMAIL,
  LICENSE,
  SERVICE_AREAS,
} from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#why-us" className="hover:text-blue-400">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Get a Quote</a></li>
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
                <Phone size={20} className="text-brand mt-1" />
                <div>
                  <a href={PHONE_TEL} className="hover:text-blue-400 font-medium">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={20} className="text-brand mt-1" />
                <a href={`mailto:${EMAIL}`} className="hover:text-blue-400">
                  {EMAIL}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-brand mt-1" />
                <span>{SERVICE_AREAS.join(" • ")}</span>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              {LICENSE}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>
            © {new Date().getFullYear()} Right First Time Plumbing. All rights reserved.
            {' • '}
            Made by{' '}
            <a
            href="https://jake.ie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors"
            >
            Jake.ie
            </a>
        </p>
        </div>
      </div>
    </footer>
  );
}
