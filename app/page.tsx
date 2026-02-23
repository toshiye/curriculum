"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getTranslation, getBrowserLanguage, SupportedLang } from "../lib/i18n";

export default function Home() {
  const [lang, setLang] = useState<SupportedLang>("en");

  useEffect(() => {
    setLang(getBrowserLanguage());
  }, []);

  const t = getTranslation(lang);

  const toggleLang = () => {
    const newLang = lang === "en" ? "pt" : "en";
    setLang(newLang);
    window.history.replaceState(null, "", `?lang=${newLang}`);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 px-6 py-16 flex justify-center">
      <div className="max-w-4xl w-full">
        <div className="flex justify-end mb-10">
          <button
            onClick={toggleLang}
            className="text-sm px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition font-medium"
          >
            {lang === "en" ? "PT-BR" : "ENGLISH"}
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h1 className="text-5xl font-bold mb-3">{t.title}</h1>
          <p className="text-2xl text-gray-400 mb-6">{t.subtitle}</p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`/api/cv?lang=${lang}`}
              className="inline-flex items-center gap-2 rounded-md border border-gray-700 px-6 py-2 text-sm font-medium hover:bg-gray-800 transition"
            >
              {t.downloadCV}
            </a>

            <a
              href="/experience"
              className="inline-flex items-center gap-2 text-sm text-blue-400 underline"
            >
              {t.viewExperience}
            </a>
          </div>
        </motion.div>

        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-300">{t.summary}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">{t.educationTitle}</h2>
          <p className="text-gray-300">{t.educationDesc}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">{t.whyTitle}</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {t.why.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Frontend</h3>
              <ul className="space-y-1 text-gray-300">
                {t.skills.frontend.map((s: string) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Backend</h3>
              <ul className="space-y-1 text-gray-300">
                {t.skills.backend.map((s: string) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Other</h3>
              <ul className="space-y-1 text-gray-300">
                {t.skills.other.map((s: string) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-800 pt-10">
          <p className="text-lg mb-4">{t.cta}</p>
          <div className="flex flex-wrap gap-6 text-blue-400 text-lg">
            <a href="https://curriculum-zeta-khaki.vercel.app" target="_blank" className="hover:underline">Live CV</a>
            <a href="https://www.linkedin.com/in/gabriel-sassaki-78004025/" target="_blank" className="hover:underline">LinkedIn</a>
            <a href="https://github.com/toshiye/curriculum" target="_blank" className="hover:underline">GitHub</a>
            <a href="mailto:sasakikenji@gmail.com" className="hover:underline">Email</a>
            <a href="/experience" className="hover:underline">{t.viewExperience}</a>
          </div>
        </section>
      </div>
    </main>
  );
}