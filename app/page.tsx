"use client";

import { motion } from "framer-motion";
import { GitBranch, MessageCircle, Download, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const certifications = [
  {
    name: "AB-100 Agentic AI Business Solutions Architect",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/MohebAdel-3100/6915664EF46D24C9?sharingId=F3D98A83A1B4F731",
  },
  {
    name: "AI-103 Azure AI & Agentic Developer",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/MohebAdel-3100/D2F9226E2EBBB1C2?sharingId=F3D98A83A1B4F731",
  },
  {
    name: "AI-102 Azure AI Engineer Associate",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/MohebAdel-3100/9238F5BF84FB9679?sharingId=F3D98A83A1B4F731",
  },
  {
    name: "AB-731 AI Transformation Leader",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/MohebAdel-3100/ACE9AB4F6984528F?sharingId=F3D98A83A1B4F731",
  },
  {
    name: "AB-730 AI Business Professional",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/MohebAdel-3100/7B7FF9377A1BDEF?sharingId=F3D98A83A1B4F731",
  },
  {
    name: "AB-900 Copilot Administration Fundamentals",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/MohebAdel-3100/23CA11B037599D21?sharingId=F3D98A83A1B4F731",
  },
  {
    name: "AI-900 Azure AI Fundamentals",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/MohebAdel-3100/21B097930E7D997D?sharingId=F3D98A83A1B4F731",
  },
  {
    name: "AZ-900 Azure Fundamentals",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/MohebAdel-3100/166CC074CC43709A?sharingId=F3D98A83A1B4F731",
  },
];

const projects = [
  {
    title: "AI Avatar Presenter",
    description:
      "Create AI avatar videos from PowerPoint presentations using Azure AI Speech and Avatar APIs.",
    stack: ["Azure AI", "FastAPI", "PowerPoint"],
  },
  {
    title: "AI Speech Assistant",
    description:
      "Convert text into natural sounding speech using Azure Speech Services.",
    stack: ["Python", "Azure Speech", "FastAPI"],
  },
  {
    title: "Copilot & Agentic AI Solutions",
    description:
      "Business solutions powered by Copilot, RAG, Prompt Flow and Agentic AI.",
    stack: ["Copilot", "RAG", "Azure OpenAI"],
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background Blur Effects */}

      <div className="absolute top-0 left-0 h-150 w-150 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-150 w-150 rounded-full bg-blue-600/20 blur-[150px]" />

      <main className="relative z-10">
        {/* HERO */}

        <section className="max-w-7xl mx-auto px-6 py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Microsoft Business Program Manager Intern
              </span>

              <h1 className="text-6xl font-extrabold mt-6">Moheb Adel</h1>

              <div className="text-3xl font-semibold text-cyan-400 mt-5">
                <TypeAnimation
                  sequence={[
                    "AI Consultant",
                    2000,
                    "Microsoft Copilot Specialist",
                    2000,
                    "Agentic AI Architect",
                    2000,
                  ]}
                  repeat={Infinity}
                />
              </div>

              <p className="text-slate-300 text-lg mt-8 leading-relaxed max-w-xl">
                Passionate about Generative AI, Agentic AI, Microsoft Copilot,
                Azure AI and enterprise transformation. Building intelligent
                solutions that bridge business strategy with AI innovation.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="https://github.com/moheb2002"
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition"
                >
                  <GitBranch size={18} />
                  GitHub
                </a>

                <a
                  href="/Moheb_Adel_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/20 hover:border-cyan-400"
                >
                  <Download size={18} />
                  Resume
                </a>
              </div>
            </motion.div>

            {/* RIGHT CARD */}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 1 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10"
            >
              <h2 className="text-2xl font-bold">Quick Overview</h2>

              <div className="grid grid-cols-2 gap-5 mt-8">
                <div className="rounded-2xl bg-slate-900/50 p-4">
                  <h3 className="text-cyan-400 text-3xl font-bold">7+</h3>
                  <p>Microsoft Certifications</p>
                </div>

                <div className="rounded-2xl bg-slate-900/50 p-4">
                  <h3 className="text-cyan-400 text-3xl font-bold">3+</h3>
                  <p>AI Projects</p>
                </div>

                <div className="rounded-2xl bg-slate-900/50 p-4">
                  <h3 className="text-cyan-400 text-3xl font-bold">Azure</h3>
                  <p>AI Solutions</p>
                </div>

                <div className="rounded-2xl bg-slate-900/50 p-4">
                  <h3 className="text-cyan-400 text-3xl font-bold">Copilot</h3>
                  <p>Specialist</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CERTIFICATIONS */}

        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            className="text-4xl font-bold mb-10"
          >
            Certifications
          </motion.h2>

<div className="grid md:grid-cols-3 gap-6">
  {certifications.map((cert) => (
    <motion.a
      key={cert.name}
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 cursor-pointer hover:border-cyan-400"
    >
      <h3 className="text-xl font-semibold mb-3 text-cyan-300">{cert.name}</h3>
      <p className="text-slate-300 text-sm">
        View certification details on Microsoft Learn.
      </p>
    </motion.a>
  ))}
</div>
</section>

        {/* PROJECTS */}

        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-10">Featured Projects</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <motion.div
                key={project.title}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
              >
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <p className="text-slate-300">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.stack.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS */}

        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-10">Skills</h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Azure AI",
              "Azure OpenAI",
              "Microsoft Copilot",
              "Agentic AI",
              "RAG",
              "Prompt Flow",
              "FastAPI",
              "Python",
              "Node.js",
              "GitHub",
            ].map(skill => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="px-5 py-3 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* CONTACT */}

        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Connect</h2>

          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/moheb2002/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition"
            >
              <MessageCircle size={18} />
              LinkedIn
            </a>

            <a
              href="mailto:mohebadel13@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition"
            >
              <Mail size={18} />
              Mail
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
