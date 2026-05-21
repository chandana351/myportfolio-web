import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar({ isDark, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#home" className="text-xl font-extrabold tracking-normal text-slate-950 dark:text-white">
          Chandana
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:border-teal-300 hover:text-teal-600 dark:border-white/10 dark:text-slate-200 dark:hover:text-teal-300"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden dark:border-white/10 dark:text-slate-200"
            aria-label="Toggle navigation"
            title="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden dark:border-white/10 dark:bg-slate-950">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-teal-50 hover:text-teal-700 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-teal-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
