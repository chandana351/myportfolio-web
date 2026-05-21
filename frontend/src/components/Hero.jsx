import { ArrowDown, Braces, Database, Github, Layers3, Linkedin, Mail, Server } from "lucide-react";

const highlights = [
  { value: "6+", label: "Projects" },
  { value: "9", label: "Skills" },
  { value: "100%", label: "Responsive" }
];

const stackFlow = [
  { label: "UI", detail: "React", icon: Layers3 },
  { label: "Logic", detail: "JavaScript", icon: Braces },
  { label: "API", detail: "Express", icon: Server },
  { label: "Data", detail: "Firebase", icon: Database }
];

const assetPath = `${import.meta.env.BASE_URL}chandana-profile.png`;

export default function Hero() {
  return (
    <section id="home" className="section relative overflow-hidden pt-32 sm:pt-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.20),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.14),transparent_30%)]" />
      <div className="section-inner grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="animate-fade-in">
          <p className="section-kicker">Frontend / Full Stack Developer</p>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-normal text-slate-950 sm:text-6xl dark:text-white">
            Hi, I am Chandana.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            A fresher developer building responsive frontends, clean UI components and full-stack
            project flows with React, JavaScript, Tailwind CSS, Node.js and Express.
          </p>

          <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-4">
            {stackFlow.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="glass-card glass-shine rounded-xl px-4 py-3">
                  <Icon className="text-teal-600 dark:text-teal-300" size={20} aria-hidden="true" />
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{item.label}</p>
                  <p className="mt-1 font-extrabold text-slate-950 dark:text-white">{item.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-5 grid max-w-xl grid-cols-3 gap-3">
            {highlights.map((item) => (
              <div key={item.label} className="glass-card glass-shine rounded-xl px-4 py-3 text-center">
                <strong className="block text-2xl font-extrabold text-slate-950 dark:text-white">{item.value}</strong>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="primary-button">
              View Projects <ArrowDown size={18} />
            </a>
            <a href="#contact" className="secondary-button">
              Contact Me <Mail size={18} />
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            <a className="secondary-button !px-3" href="https://github.com/chandana351" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
              <Github size={18} />
            </a>
            <a className="secondary-button !px-3" href="https://www.linkedin.com/in/sr-chandhana-7b6917383/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="floating-card glass-card relative mx-auto w-full max-w-sm rounded-2xl p-5 shadow-glow sm:max-w-md">
          <div className="floating-badge absolute -left-3 top-7 z-10 rounded-xl border border-teal-200 bg-white px-4 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-slate-200/70 dark:border-white/10 dark:bg-slate-900 dark:text-white">
            React Developer
          </div>
          <div className="floating-badge floating-delay absolute -right-3 bottom-28 z-10 rounded-xl border border-orange-200 bg-white px-4 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-slate-200/70 dark:border-white/10 dark:bg-slate-900 dark:text-white">
            Job Ready
          </div>
          <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-full border-4 border-teal-300/70 bg-slate-100 shadow-2xl shadow-teal-900/15 sm:w-72 dark:bg-slate-900">
            <img
              src={assetPath}
              alt="Chandana profile photo"
              className="h-full w-full object-cover object-[50%_28%]"
            />
          </div>
          <div className="mt-5 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-300">
              Chandana
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 dark:text-white">Frontend / Full Stack Developer</h2>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold">
            {["React", "Node.js", "Tailwind", "Firebase"].map((item) => (
              <span key={item} className="rounded-lg bg-slate-950 px-4 py-3 text-center text-white dark:bg-white dark:text-slate-950">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
