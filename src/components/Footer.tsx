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
              <li><a href="#services" className="hover:text-brand transition-colors">Services</a></li>
              <li><a href="#why-us"   className="hover:text-brand transition-colors">Why Choose Us</a></li>
              <li><a href="#team"     className="hover:text-brand transition-colors">Meet the Team</a></li>
              <li><a href="#faq"      className="hover:text-brand transition-colors">FAQ</a></li>
              <li><a href="#contact"  className="hover:text-brand transition-colors">Get a Quote</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-brand transition-colors">Leak Detection & Repair</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Water Heater Services</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Emergency Plumbing</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Toilet & Fixture Repair</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Whole-Home Repiping</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Contact</h4>

            <div className="space-y-4 text-sm">

              <div className="flex items-start gap-3">
                <Phone size={20} className="text-brand mt-1" />
                <div>
                  <a href={PHONE_TEL} className="hover:text-brand transition-colors font-medium">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={20} className="text-brand mt-1" />
                <a href={`mailto:${EMAIL}`} className="hover:text-brand transition-colors">
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
