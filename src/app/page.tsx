import {
  Phone,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Droplet,
  ShowerHead,
  Toilet,
  Wrench,
  Truck,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-blue-900 text-white">
        <div className="container mx-auto px-6 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Right First Time Plumbing
          </h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Licensed • Insured • Serving Carrboro, Chapel Hill & Surrounding Areas
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+19195551234"
              className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-5 px-10 rounded-lg shadow transition flex items-center justify-center gap-3"
            >
              <Phone size={28} />
              (919) 555-1234
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white hover:bg-white/10 font-bold py-5 px-10 rounded-lg transition"
            >
              Free Quote
            </a>
          </div>

          <p className="mt-10 text-lg flex items-center justify-center gap-3">
            <Clock size={22} />
            24/7 Emergency Service Available
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            Plumbing Services
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We get it right the first time — saving you time and money.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Droplet, title: "Leak Detection & Repair", desc: "Hidden leaks, slab leaks, burst pipes" },
              { icon: ShowerHead, title: "Shower & Tub Work", desc: "Installations, conversions, upgrades" },
              { icon: Toilet, title: "Toilet Repair & Replacement", desc: "Clogs, running toilets, efficient models" },
              { icon: Wrench, title: "Whole-Home Repiping", desc: "PEX, copper, reliable solutions" },
              { icon: Droplet, title: "Water Heater Services", desc: "Tank & tankless install & repair" },
              { icon: Truck, title: "24/7 Emergency Plumbing", desc: "No hot water, overflows, major leaks" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-md transition text-center"
              >
                <item.icon size={48} className="text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                icon: ShieldCheck,
                title: "Fully Licensed & Insured",
                desc: "NC licensed, bonded, and fully insured for your peace of mind.",
              },
              {
                icon: CheckCircle2,
                title: "Right First Time Guarantee",
                desc: "We stand behind our work — no shortcuts, no callbacks.",
              },
              {
                icon: Clock,
                title: "Fast Local Response",
                desc: "Quick response in Carrboro, Chapel Hill, and surrounding areas.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon size={56} className="text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Meet the Team
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gray-200 shadow">
                <Image
                  src="https://thumbs.dreamstime.com/b/friendly-man-29232638.jpg"
                  alt="Owen McDermott – Owner & Master Plumber"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Owen McDermott
              </h3>
              <p className="text-xl text-blue-700 font-semibold mb-6">
                Owner & Master Plumber
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 30 years of experience in residential and commercial plumbing, Owen founded Right First Time Plumbing to provide honest, reliable service in Carrboro and Chapel Hill. He personally handles most jobs, ensuring work is done right the first time. His knowledge of local codes, modern materials like PEX and tankless systems, and focus on customers have earned lasting trust from local homeowners.
              </p>
              <p className="mt-6 text-lg text-gray-600 italic">
                “Do it right — not just fast. That’s our guarantee.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Need a Plumber Today?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto">
            Same-day service available in most cases. Call now or request a quote.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12">
            <div className="flex items-center gap-4 text-2xl font-medium">
              <Phone size={36} />
              <span>(919) 555-1234</span>
            </div>
            <div className="flex items-center gap-4 text-2xl font-medium">
              <MapPin size={36} />
              <span>Carrboro • Chapel Hill • Hillsborough • Durham area</span>
            </div>
          </div>

          <a
            href="tel:+19195551234"
            className="inline-block bg-white text-blue-900 hover:bg-gray-100 font-bold text-2xl py-6 px-12 rounded-lg shadow transition"
          >
            Call Now: (919) 555-1234
          </a>

          <p className="mt-12 text-lg">
            Email: service@rightfirsttimeplumbing.com<br />
            NC Plumbing License #12345 • Fully Insured & Bonded
          </p>
        </div>
      </section>
    </div>
  );
}