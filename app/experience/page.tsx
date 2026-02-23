"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getTranslation, getBrowserLanguage, SupportedLang } from "../../lib/i18n";

export default function ExperiencePage() {
  const [lang, setLang] = useState<SupportedLang>("en");

  useEffect(() => {
    setLang(getBrowserLanguage());
  }, []);

  const t = getTranslation(lang).experience;

  const toggleLang = () => {
    setLang(lang === "en" ? "pt" : "en");
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 px-6 py-16 flex justify-center">
      <div className="max-w-4xl w-full">
        <div className="flex justify-between items-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold"
          >
            {t.title}
          </motion.h1>
          
          <div className="flex gap-4">
            <button
              onClick={toggleLang}
              className="text-sm px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition font-medium"
            >
              {lang === "en" ? "PT-BR" : "ENGLISH"}
            </button>
            
            <a
              href={`/api/cv?lang=${lang}`}
              className="text-sm px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-medium"
            >
              {t.download}
            </a>
          </div>
        </div>

        <div className="space-y-14">
          {t.roles.map((roleBlock: any, idx: number) => (
            <motion.section
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                {roleBlock.company}
              </h2>

              {roleBlock.positions.map((pos: any, i: number) => (
                <div key={i} className="mb-8 last:mb-0">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center border-l-2 border-gray-800 pl-4 mb-3">
                    <h3 className="text-xl font-medium">{pos.role}</h3>
                    <span className="text-gray-400 text-sm font-mono">{pos.period}</span>
                  </div>
                  
                  <ul className="list-disc list-outside ml-6 text-gray-300 space-y-2">
                    {pos.bullets.map((bullet: string, j: number) => (
                      <li key={j} className="pl-2">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.section>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8">
          <a href="/" className="text-blue-400 hover:text-blue-300 transition flex items-center gap-2">
            {t.backHome}
          </a>
        </div>
      </div>
    </main>
  );
}