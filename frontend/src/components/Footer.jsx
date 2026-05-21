import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-5 py-8 text-white dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-300">© {year} Chandana. All rights reserved.</p>
        <div className="flex gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 p-2 text-slate-200 transition hover:border-teal-300 hover:text-teal-200" aria-label="GitHub" title="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 p-2 text-slate-200 transition hover:border-teal-300 hover:text-teal-200" aria-label="LinkedIn" title="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:chandana@example.com" className="rounded-lg border border-white/10 p-2 text-slate-200 transition hover:border-teal-300 hover:text-teal-200" aria-label="Email Chandana" title="Email Chandana">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
