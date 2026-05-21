import { Download } from "lucide-react";

const resumePath = `${import.meta.env.BASE_URL}CHANDANA-RESUME.pdf`;

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="section-inner">
        <div className="glass-card floating-panel grid gap-6 rounded-2xl p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="section-kicker">Resume</p>
            <h2 className="section-title">Professional full-stack developer resume.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
              Download my updated resume with my frontend, full-stack, project and technical skill details.
            </p>
          </div>
          <a href={resumePath} download="Chandana_Resume.pdf" className="primary-button">
            <Download size={18} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
