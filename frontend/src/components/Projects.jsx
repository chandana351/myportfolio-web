import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "QuickBasket Grocery Website",
    description: "A responsive grocery shopping interface with product sections, cart-focused layout and clean navigation.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/chandana351/quickbasket-grocery",
    demo: "https://chandana351.github.io/quickbasket-grocery/"
  },
  {
    title: "Responsive Pizza Pie Project",
    description: "A responsive pizza website with a polished food ordering layout, menu sections and modern visual styling.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chandana351/pizza-pie",
    demo: "https://chandana351.github.io/pizza-pie/"
  },
  {
    title: "Movie Search App",
    description: "A movie discovery app with search functionality, result cards and a responsive browsing experience.",
    tech: ["JavaScript", "React", "API"],
    github: "https://github.com/chandana351/movie-search-app",
    demo: "https://chandana351.github.io/movie-search-app/"
  },
  {
    title: "Airbnb Clone",
    description: "A responsive Airbnb-inspired landing page clone with modern layout, property cards and clean spacing.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chandana351/airbnb-clone",
    demo: "https://chandana351.github.io/airbnb-clone/"
  },
  {
    title: "To-Do List App",
    description: "A productivity app for adding, completing and clearing daily tasks with a minimal interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chandana351/todo-list-app",
    demo: "/demos/to-do-list-app.html"
  },
  {
    title: "Calculator App",
    description: "A clean calculator with basic arithmetic operations, keyboard-friendly layout and responsive sizing.",
    tech: ["JavaScript", "React"],
    github: "https://github.com/chandana351/basic-calculator",
    demo: "https://chandana351.github.io/basic-calculator/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section bg-white dark:bg-slate-900/50">
      <div className="section-inner">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Practice projects that show my fundamentals.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card glass-card glass-shine flex h-full flex-col rounded-2xl p-6 hover:border-teal-300 dark:hover:border-teal-300/60"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-sm font-extrabold text-teal-700 dark:bg-teal-300/10 dark:text-teal-200">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800 dark:border-teal-300/20 dark:bg-teal-300/10 dark:text-teal-200">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="secondary-button !px-4 !py-2">
                    <Github size={17} /> GitHub
                  </a>
                ) : (
                  <span className="secondary-button !pointer-events-none !px-4 !py-2 opacity-60" aria-disabled="true">
                    <Github size={17} /> GitHub Soon
                  </span>
                )}
                <a href={project.demo} target="_blank" rel="noreferrer" className="primary-button !px-4 !py-2">
                  <ExternalLink size={17} /> Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
