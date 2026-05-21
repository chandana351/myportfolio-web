import { Send } from "lucide-react";
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setStatus({ type: "success", message: data.message });
      setForm(initialForm);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-white dark:bg-slate-900/50">
      <div className="section-inner grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let us build something useful.</h2>
          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
            Have an entry-level role, internship or project idea? Send a message and the Express backend will
            receive it through the contact API.
          </p>
        </div>

        <form onSubmit={submitForm} className="glass-card rounded-2xl p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Name</span>
              <input
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                type="text"
                name="name"
                value={form.name}
                onChange={updateField}
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Email</span>
              <input
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                type="email"
                name="email"
                value={form.email}
                onChange={updateField}
                required
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Subject</span>
            <input
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15 dark:border-white/10 dark:bg-slate-950 dark:text-white"
              type="text"
              name="subject"
              value={form.subject}
              onChange={updateField}
            />
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Message</span>
            <textarea
              className="mt-2 min-h-36 w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15 dark:border-white/10 dark:bg-slate-950 dark:text-white"
              name="message"
              value={form.message}
              onChange={updateField}
              required
            />
          </label>

          {status.message && (
            <p
              className={`mt-5 rounded-lg px-4 py-3 text-sm font-semibold ${
                status.type === "success"
                  ? "bg-teal-50 text-teal-700 dark:bg-teal-400/10 dark:text-teal-200"
                  : "bg-rose-50 text-rose-700 dark:bg-rose-400/10 dark:text-rose-200"
              }`}
            >
              {status.message}
            </p>
          )}

          <button type="submit" className="primary-button mt-6" disabled={isSubmitting}>
            <Send size={18} /> {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
