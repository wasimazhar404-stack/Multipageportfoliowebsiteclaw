import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { MapPin, Navigation, ArrowRight } from "lucide-react";
import makkahMap from "../../imports/makkah_map.jpg";
import madinahMap from "../../imports/madinah_map.jpg";

const makkahLandmarks = [
  { name: "Masjid al-Haram", desc: "The Grand Mosque housing the Kaaba" },
  { name: "Jabal al-Noor", desc: "Mountain of Light — Cave of Hira" },
  { name: "Jabal Thawr", desc: "Cave where Prophet hid during Hijra" },
  { name: "Mina", desc: "Tent city for Hajj pilgrims" },
  { name: "Arafat", desc: "Site of the farewell sermon" },
  { name: "Muzdalifah", desc: "Open plain between Mina and Arafat" },
];

const madinahLandmarks = [
  { name: "Masjid an-Nabawi", desc: "The Prophet's Mosque with Green Dome" },
  { name: "Jannat al-Baqi", desc: "Historic cemetery of Madinah" },
  { name: "Quba Mosque", desc: "First mosque built in Islam" },
  { name: "Mount Uhud", desc: "Site of the Battle of Uhud" },
  { name: "Masjid al-Qiblatayn", desc: "Mosque of the Two Qiblas" },
  { name: "Seven Mosques", desc: "Historic mosques at the site of Trench Battle" },
];


export function Maps() {
  useEffect(() => {
    document.title = "Umrah & Tours | QuickFare";
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-slate-900">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(#f97316 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-orange-500 text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 bg-orange-500/10 rounded-full border border-orange-500/20">
              Umrah & Tours
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Navigate the <span className="text-orange-500">Holy Cities</span>
            </h1>
            <p className="text-slate-400 text-base max-w-lg mx-auto">
              Detailed maps of Makkah and Madinah with key landmarks, Ziyarat points, and essential locations for your journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAKKAH */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg border border-slate-100"
            >
              <img src={makkahMap} alt="Makkah Map" className="w-full h-auto object-cover" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                  <MapPin size={20} className="text-orange-500" />
                </div>
                <div>
                  <h2 className="text-slate-900 text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Makkah al-Mukarramah</h2>
                  <p className="text-slate-400 text-sm">The Honored City</p>
                </div>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Makkah is the holiest city in Islam and the birthplace of Prophet Muhammad (PBUH).
                Every year, millions of Muslims visit for Hajj and Umrah. Our detailed map guides
                you through every essential location.
              </p>

              <div className="space-y-3">
                {makkahLandmarks.map((lm, i) => (
                  <motion.div
                    key={lm.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100"
                  >
                    <Navigation size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-slate-900 text-sm font-semibold">{lm.name}</p>
                      <p className="text-slate-400 text-xs">{lm.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MADINAH */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                  <MapPin size={20} className="text-teal-600" />
                </div>
                <div>
                  <h2 className="text-slate-900 text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Madinah al-Munawwarah</h2>
                  <p className="text-slate-400 text-sm">The Illuminated City</p>
                </div>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Madinah is the city of the Prophet's Mosque and his final resting place.
                It is the second holiest city in Islam and a must-visit for every Muslim performing Umrah or Hajj.
              </p>

              <div className="space-y-3">
                {madinahLandmarks.map((lm, i) => (
                  <motion.div
                    key={lm.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100"
                  >
                    <Navigation size={14} className="text-teal-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-slate-900 text-sm font-semibold">{lm.name}</p>
                      <p className="text-slate-400 text-xs">{lm.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-lg border border-slate-100"
            >
              <img src={madinahMap} alt="Madinah Map" className="w-full h-auto object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Planning your journey?
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Our detailed travel guides include these maps plus step-by-step itineraries, budget plans, and insider tips.
          </p>
          <Link
            to="/library"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg text-sm shadow-lg shadow-orange-500/25 transition-all"
          >
            Browse Travel Guides <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
