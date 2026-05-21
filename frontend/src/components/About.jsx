import { Briefcase, Code2, GraduationCap } from "lucide-react";

const recruiterPoints = [
  {
    icon: Code2,
    title: "Frontend Focus",
    text: "Builds responsive React interfaces with clean UI, reusable components and smooth user flows."
  },
  {
    icon: Briefcase,
    title: "Project Practice",
    text: "Ships deployed projects with GitHub links, live demos and clear problem-focused descriptions."
  },
  {
    icon: GraduationCap,
    title: "Fresher Mindset",
    text: "Ready to learn, collaborate and grow inside a professional development team."
  }
];

export default function About() {
  return (
    <section id="about" className="section bg-white dark:bg-slate-900/50">
      <div className="section-inner grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="section-kicker">About Me</p>
          <h2 className="section-title">Ready to grow with the right team.</h2>
        </div>
        <div className="glass-card glass-shine rounded-2xl p-6 sm:p-8">
          <p className="leading-8 text-slate-600 dark:text-slate-300">
            I am Chandana, a fresher Frontend and Full Stack Developer focused on creating clean,
            user-friendly and responsive web applications. I enjoy turning ideas into practical interfaces,
            learning modern development workflows and writing code that is simple to understand and easy to
            improve.
          </p>
          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
            My current skill set includes React, JavaScript, Tailwind CSS, Bootstrap, Git, GitHub, Firebase
            basics and Node.js with Express. I can build interfaces, connect contact forms to backend APIs,
            deploy projects and keep improving with feedback from experienced developers.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {recruiterPoints.map((point) => {
              const Icon = point.icon;

              return (
                <div key={point.title} className="rounded-xl border border-slate-200 bg-white/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
                  <Icon className="mb-3 text-teal-600 dark:text-teal-300" size={24} aria-hidden="true" />
                  <h3 className="font-bold text-slate-950 dark:text-white">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{point.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
