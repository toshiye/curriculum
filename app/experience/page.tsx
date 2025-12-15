"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  const [lang, setLang] = useState<"en" | "pt">("en");

  const content = {
    en: {
      title: "Professional Experience",
      download: "Download CV (PDF)",
      roles: [
        {
          company: "Almaden Ltd. — Brazil",
          positions: [
            {
              role: "Fullstack Developer",
              period: "2024 – 2025",
              bullets: [
                "Developed and maintained web applications using React.js, Next.js and Node.js",
                "Collaborated with distributed teams through daily meetings in English",
                "Focused on clean code, maintainability and continuous delivery"
              ]
            },
            {
              role: "Infrastructure Analyst / Support Supervisor",
              period: "2021 – 2024",
              bullets: [
                "Led and supervised a technical support team",
                "Acted as the main bridge between technical staff and management",
                "Conducted meetings, reports and escalations in English",
                "Managed key enterprise clients, including conflict resolution and retention"
              ]
            }
          ]
        },
        {
          company: "Souza & Cambos — Brazil",
          positions: [
            {
              role: "IT Support & Junior Developer",
              period: "2017 – 2021",
              bullets: [
                "Provided full IT support across multiple departments",
                "Developed internal systems using PHP, JavaScript, HTML5, CSS3 and Laravel",
                "Worked with Delphi (Pascal) at an intermediate level"
              ]
            }
          ]
        },
        {
          company: "Equinix do Brasil",
          positions: [
            {
              role: "Junior Bilingual Data Center Operator",
              period: "2014 – 2016",
              bullets: [
                "Delivered data center services for national and international clients",
                "Provided technical support in English via phone, email and on-site",
                "Worked in mission-critical environments with strict SLAs"
              ]
            }
          ]
        }
      ]
    },
    pt: {
      title: "Experiência Profissional",
      download: "Baixar CV (PDF)",
      roles: [
        {
          company: "Almaden Ltda. — Brasil",
          positions: [
            {
              role: "Desenvolvedor Fullstack",
              period: "2024 – 2025",
              bullets: [
                "Desenvolvimento e manutenção de aplicações web utilizando React.js, Next.js e Node.js",
                "Colaboração com times distribuídos em reuniões diárias em inglês",
                "Foco em código limpo, manutenibilidade e entregas contínuas"
              ]
            },
            {
              role: "Analista de Infraestrutura / Supervisor de Suporte",
              period: "2021 – 2024",
              bullets: [
                "Liderança e supervisão de equipe de suporte técnico",
                "Atuação como elo entre equipe técnica e gestão",
                "Condução de reuniões, relatórios e escalonamentos em inglês",
                "Gestão de clientes estratégicos e resolução de conflitos"
              ]
            }
          ]
        },
        {
          company: "Souza & Cambos — Brasil",
          positions: [
            {
              role: "Suporte de TI / Desenvolvedor Júnior",
              period: "2017 – 2021",
              bullets: [
                "Suporte técnico completo para múltiplos departamentos",
                "Desenvolvimento de sistemas internos com PHP, JavaScript, HTML5, CSS3 e Laravel",
                "Atuação intermediária com Delphi (Pascal)"
              ]
            }
          ]
        },
        {
          company: "Equinix do Brasil",
          positions: [
            {
              role: "Operador de Data Center Bilíngue Júnior",
              period: "2014 – 2016",
              bullets: [
                "Prestação de serviços de data center para clientes nacionais e internacionais",
                "Suporte técnico em inglês por telefone, e-mail e presencial",
                "Atuação em ambientes críticos com SLAs rigorosos"
              ]
            }
          ]
        }
      ]
    }
  };

  const t = content[lang];

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
              onClick={() => setLang(lang === "en" ? "pt" : "en")}
              className="text-sm px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
            >
              {lang === "en" ? "PT" : "EN"}
            </button>
            <a
              href={`/api/cv?lang=${lang}`}
              className="text-sm px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
            >
              {t.download}
            </a>
          </div>
        </div>

        <div className="space-y-14">
          {t.roles.map((roleBlock, idx) => (
            <motion.section
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-4">{roleBlock.company}</h2>

              {roleBlock.positions.map((pos, i) => (
                <div key={i} className="mb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h3 className="text-xl font-medium">{pos.role}</h3>
                    <span className="text-gray-400">{pos.period}</span>
                  </div>
                  <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                    {pos.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.section>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8">
          <a href="/" className="text-blue-400">← Back to Home</a>
        </div>
      </div>
    </main>
  );
}
