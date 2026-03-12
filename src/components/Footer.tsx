import { Phone, Mail, MapPin, Wrench } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full shadow-xl flex items-center justify-center">
                <Wrench size={40} className="text-white" />
              </div>

              <div>
                <div className="text-2xl font-bold text-white">
                  Right First Time Plumbing
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed">
              Licensed & insured plumber proudly serving Carrboro, Chapel Hill, Hillsborough, and surrounding areas.
            </p>
          </div>

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
                <Phone size={20} className="text-blue-400 mt-1" />
                <div>
                  <a href="tel:+19195551234" className="hover:text-blue-400 font-medium">
                    (919) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={20} className="text-blue-400 mt-1" />
                <a href="mailto:service@rightfirsttimeplumbing.com" className="hover:text-blue-400">
                  service@rightfirsttimeplumbing.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-400 mt-1" />
                <span>Carrboro • Chapel Hill • Durham</span>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              NC Plumbing License #38563
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
