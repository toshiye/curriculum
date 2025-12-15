"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [lang, setLang] = useState<"pt" | "en">("en");

  const content = {
    en: {
      title: "Gabriel Sassaki",
      subtitle: "Fullstack Developer | Infrastructure, Support & Leadership Background | Remote-Ready",
      summary:
        "Fullstack developer with hands-on experience in React, Next.js and Node.js, backed by over 10 years in IT. Strong background in infrastructure, technical support and team leadership. Proven ability to work remotely with international teams, communicate clearly in English and deliver reliable solutions in fast-paced environments.",
      why: [
        "Fluent English with real professional usage",
        "Experience working with international clients and stakeholders",
        "Strong communication and documentation skills",
        "Self-managed, reliable and remote-ready"
      ],
      skills: {
        frontend: ["React", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
        backend: ["Node.js", "REST APIs"],
        other: ["Git", "Infrastructure & IT Support", "Team Leadership", "Agile / Daily Meetings"]
      },
      cta: "Open to remote opportunities worldwide (USD-based contracts)"
    },
    pt: {
      title: "Gabriel Sassaki",
      subtitle: "Desenvolvedor Fullstack | Infraestrutura, Suporte & Liderança | Pronto para Remoto",
      summary:
        "Desenvolvedor Fullstack com experiência prática em React, Next.js e Node.js, aliado a mais de 10 anos de atuação em TI. Forte base em infraestrutura, suporte técnico e liderança de equipes. Experiência comprovada em trabalho remoto, comunicação profissional em inglês e colaboração com times internacionais.",
      why: [
        "Inglês fluente com uso profissional real",
        "Vivência com clientes e times internacionais",
        "Comunicação clara e documentação eficiente",
        "Perfil autogerenciável e preparado para trabalho remoto"
      ],
      skills: {
        frontend: ["React", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
        backend: ["Node.js", "APIs REST"],
        other: ["Git", "Infraestrutura & Suporte", "Liderança de Equipes", "Agile / Reuniões Diárias"]
      },
      cta: "Aberto a oportunidades remotas globais (contratos em dólar)"
    }
  };

  const t = content[lang];

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 px-6 py-16 flex justify-center">
      <div className="max-w-4xl w-full">
        <div className="flex justify-end mb-10">
          <button
            onClick={() => setLang(lang === "en" ? "pt" : "en")}
            className="text-sm px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
          >
            {lang === "en" ? "PT" : "EN"}
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

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <a
              href={`/api/cv?lang=${lang}`}
              className="inline-flex items-center gap-2 rounded-md border border-gray-700 px-6 py-2 text-sm font-medium hover:bg-gray-800 transition"
            >
              {lang === "en" ? "Download CV (PDF)" : "Baixar CV (PDF)"}
            </a>

            <a
              href="/experience"
              className="inline-flex items-center gap-2 text-sm text-blue-400 underline"
            >
              {lang === "en" ? "View experience" : "Ver experiência"}
            </a>
          </div>
        </motion.div>

        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-300">{t.summary}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Why Me for Remote Work</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {t.why.map((item) => (
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
                {t.skills.frontend.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Backend</h3>
              <ul className="space-y-1 text-gray-300">
                {t.skills.backend.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Other</h3>
              <ul className="space-y-1 text-gray-300">
                {t.skills.other.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-800 pt-10">
          <p className="text-lg mb-4">{t.cta}</p>
          <div className="flex gap-6 text-blue-400 text-lg">
            <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
            <a href="https://github.com" target="_blank">GitHub</a>
            <a href="mailto:sasakikenji@gmail.com">Email</a>
            <a href="/experience">Experience</a>
          </div>
        </section>
      </div>
    </main>
  );
}
