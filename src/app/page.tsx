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
  User,
} from "lucide-react";
import Image from "next/image";
import {
  PHONE_TEL,
  PHONE_DISPLAY,
  EMAIL,
  EMAIL_QUOTE_HREF,
  OWNER_NAME,
  FAQ_ITEMS,
} from "@/constants";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url('/hero-carrboro.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.65) 100%)" }}></div>

        <div className="container mx-auto px-6 py-28 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight md:leading-snug text-white text-outline-black drop-shadow-xl">
            Right First Time Plumbing
          </h1>

          <p className="text-lg md:text-2xl mb-6 max-w-3xl mx-auto text-white text-outline-black drop-shadow-lg font-medium">
            Serving Carrboro, Chapel Hill & Surrounding Areas
          </p>

          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white text-sm font-semibold px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <Clock size={16} />
            24/7 Emergency Service Available
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={PHONE_TEL}
              className="bg-brand text-white font-bold py-5 px-10 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-3"
            >
              <Phone size={28} />
              {PHONE_DISPLAY}
            </a>
            <a
              href="#contact"
              className="bg-white text-black font-bold py-5 px-10 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-3"
            >
              Get a Free Quote
            </a>
          </div>
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
              { icon: Droplet,    title: "Leak Detection & Repair",    desc: "Hidden leaks, slab leaks, burst pipes" },
              { icon: ShowerHead, title: "Shower & Tub Work",          desc: "Installations, conversions, upgrades" },
              { icon: Toilet,     title: "Toilet Repair & Replacement",desc: "Clogs, running toilets, efficient models" },
              { icon: Wrench,     title: "Whole-Home Repiping",        desc: "PEX, copper, reliable solutions" },
              { icon: Droplet,    title: "Water Heater Services",      desc: "Tank & tankless install & repair" },
              { icon: Truck,      title: "24/7 Emergency Plumbing",    desc: "No hot water, overflows, major leaks" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-md transition text-center"
              >
                <item.icon size={48} className="text-brand mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Meet the Team
          </h2>

          <div className="flex flex-col gap-16">

            {/* Owen */}
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <Image
                    src="/owen-van.jpg"
                    alt="Owen McDermott standing next to his Right First Time Plumbing van"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-bold text-gray-900 mb-1">Owen McDermott</h3>
                <p className="text-brand font-semibold text-lg mb-4">Owner & Master Plumber</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Owen has over 30 years of experience in residential and commercial plumbing. Originally from Ireland, he founded Right First Time Plumbing to provide reliable, straightforward service in Carrboro and Chapel Hill. Owen handles all jobs personally and focuses on doing the work properly the first time.
                </p>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Christian */}
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <Image
                    src="/chris-van.jpg"
                    alt="Christian McDermott, apprentice plumber at Right First Time Plumbing"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-bold text-gray-900 mb-1">Christian McDermott</h3>
                <p className="text-brand font-semibold text-lg mb-4">Apprentice Plumber</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Christian is Owen's son and is learning the trade from the ground up. Working alongside his father, he's gaining hands-on experience across all aspects of residential and commercial plumbing.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                icon: ShieldCheck,
                title: "Fully Licensed & Insured",
                desc: "NC licensed, bonded, and fully insured. You're covered on every job, no exceptions.",
              },
              {
                icon: CheckCircle2,
                title: "Right First Time Guarantee",
                desc: "No shortcuts, no return visits. Owen takes the time to do the job properly, once.",
              },
              {
                icon: User,
                title: "Keep It Local",
                desc: "Independent and locally owned, we are not a franchise.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon size={56} className="text-brand mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Common questions about our plumbing services in Carrboro &amp; Chapel Hill.
          </p>

          <dl className="space-y-4">
            {FAQ_ITEMS.map(({ question, answer }) => (
              <details
                key={question}
                className="group border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 hover:bg-white transition-colors">
                  <dt>{question}</dt>
                  <span className="shrink-0 text-brand text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <dd className="px-6 pb-5 pt-1 text-gray-700 leading-relaxed border-t border-gray-100 bg-white">
                  {answer}
                </dd>
              </details>
            ))}
          </dl>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-24 bg-gradient-to-b from-brand-deep to-brand-mid text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
            Need Plumbing Help Today?
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-blue-100 font-medium">
            24/7 Emergency Service • Same-Day in Most Cases
          </p>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center mb-12 md:mb-16 max-w-3xl mx-auto">

            <a
              href={PHONE_TEL}
              className="
                flex-1 inline-flex items-center justify-center whitespace-nowrap
                bg-white text-blue-950 hover:bg-gray-100
                font-black text-2xl md:text-3xl
                py-8 px-10 rounded-2xl
                shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 duration-300 gap-5
                min-w-[280px]
                md:min-w-[450px]
              "
            >
              <Phone size={40} className="flex-shrink-0" />
              {PHONE_DISPLAY}
            </a>

            <a
              href={EMAIL_QUOTE_HREF}
              className="flex-1 inline-flex items-center justify-center whitespace-nowrap bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-950 font-black text-2xl md:text-3xl py-8 px-10 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 duration-300 gap-5 min-w-[280px] md:min-w-[450px]"
            >
              <Mail size={40} className="flex-shrink-0" />
              Email for a Quote
            </a>

          </div>

          <p className="text-blue-200 text-lg md:text-xl font-medium mb-4">
            Or reach us directly at {EMAIL}
          </p>
        </div>
      </section>
    </div>
  );
}
