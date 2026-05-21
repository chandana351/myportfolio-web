import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact
} from "react-icons/fa";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500", glow: "group-hover:shadow-orange-500/25" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500", glow: "group-hover:shadow-blue-500/25" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400", glow: "group-hover:shadow-yellow-400/25" },
  { name: "React", icon: FaReact, color: "text-sky-400", glow: "group-hover:shadow-sky-400/25" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-cyan-400", glow: "group-hover:shadow-cyan-400/25" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-violet-500", glow: "group-hover:shadow-violet-500/25" },
  { name: "Git", icon: FaGitAlt, color: "text-red-500", glow: "group-hover:shadow-red-500/25" },
  { name: "GitHub", icon: FaGithub, color: "text-slate-900 dark:text-white", glow: "group-hover:shadow-slate-500/25" },
  { name: "Firebase basics", icon: RiFirebaseFill, color: "text-amber-500", glow: "group-hover:shadow-amber-500/25" }
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <p className="section-kicker">Skills</p>
        <h2 className="section-title">Tools I use to build web experiences.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
            <div
              key={skill.name}
              className={`skill-card group glass-card rounded-xl p-5 hover:-translate-y-2 hover:border-teal-300 hover:shadow-2xl ${skill.glow} dark:hover:border-teal-300/60`}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-3xl transition duration-300 group-hover:rotate-3 group-hover:scale-110 dark:bg-white/10">
                  <Icon className={skill.color} aria-hidden="true" />
                </span>
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">{skill.name}</span>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Frontend toolkit</p>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
