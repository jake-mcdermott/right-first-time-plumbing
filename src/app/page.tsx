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
  Mail,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url('https://chapelboromedia.s3.amazonaws.com/uploads/2020/02/14100403/190710_Carrboro_003.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto px-6 py-28 text-center relative z-10">
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight md:leading-snug text-white text-outline-black drop-shadow-xl">
            Right First Time Plumbing
          </h1>

          {/* New Service Areas Line – Placed here for logical flow */}
          <p className="text-lg md:text-2xl mb-6 max-w-3xl mx-auto text-white text-outline-black drop-shadow-lg font-medium">
            Serving Carrboro, Chapel Hill & Surrounding Areas
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="tel:+19195551234"
              className="bg-white text-blue-900 font-bold py-5 px-10 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-3"
            >
              <Phone size={28} />
              (919) 555-1234
            </a>
            <a
              href="#contact"
              className="bg-white text-blue-900 font-bold py-5 px-10 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-3"
            >
              Free Quote
            </a>
          </div>

          {/* Highlight / Emergency Info */}
          <p className="mt-4 text-lg md:text-xl flex items-center justify-center gap-3 text-white/80 font-medium drop-shadow-md">
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
            We get it right the first time. Saving you time and money.
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
                desc: "We stand behind our work - no shortcuts.",
              },
              {
                icon: Clock,
                title: "Fast Local Response",
                desc: "Quick response in Carrboro, Chapel Hill and surrounding areas.",
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
                  src="/owen-photo.jpg"  // ← Changed to local public folder path
                  alt="Owen McDermott – Owner & Master Plumber"
                  fill
                  className="object-cover"
                  priority  // Good for above-the-fold hero/hero-adjacent images
                />
              </div>            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Owen McDermott
              </h3>
              <p className="text-xl text-blue-700 font-semibold mb-6">
                Owner & Master Plumber
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Owen has over 30 years of experience in residential and commercial plumbing. Originally from Ireland, he founded Right First Time Plumbing to provide reliable, straightforward service in Carrboro and Chapel Hill. Owen handles all jobs personally and focuses on doing the work properly the first time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-24 bg-gradient-to-b from-blue-950 to-blue-900 text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
            Need Plumbing Help Today?
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-blue-100 font-medium">
            24/7 Emergency Service • Same-Day in Most Cases
          </p>

          {/* Large Side-by-Side CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center mb-12 md:mb-16 max-w-3xl mx-auto">
            
            {/* Call Button */}
            <a
              href="tel:+19195551234"
              className="flex-1 inline-flex items-center justify-center bg-white text-blue-950 hover:bg-gray-100 font-black text-2xl md:text-3xl py-8 px-10 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 duration-300 gap-5 min-w-[380px]"
            >
              <Phone size={40} className="flex-shrink-0" />
              (919) 555-1234
            </a>
            
            {/* Email Button */}
            <a
              href="mailto:service@rightfirsttimeplumbing.com?subject=Free%20Plumbing%20Quote%20Request&body=Hi%20team%2C%0D%0A%0D%0AI%20need%20help%20with%3A%20%5Bdescribe%20your%20plumbing%20issue%5D"
              className="flex-1 inline-flex items-center justify-center bg-transparent border-4 border-white text-white hover:bg-white hover:text-blue-950 font-black text-2xl md:text-3xl py-8 px-10 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 duration-300 gap-5 min-w-[380px]"
            >
              <Mail size={40} className="flex-shrink-0" />
              Email for Quote
            </a>
            
          </div>

          {/* Trust & Extra Info – Subtle bottom placement */}
          <p className="text-blue-200 text-lg md:text-xl font-medium mb-4">
            Or reach us directly at service@rightfirsttimeplumbing.com
          </p>
        </div>
      </section>
    </div>
  );
}