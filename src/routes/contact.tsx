import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl font-black tracking-tighter text-foreground md:text-7xl lg:text-[7rem] leading-[0.9]">
            LET'S BUILD <br /> <span className="text-primary">SOMETHING THAT MOVES.</span>
          </h1>
        </motion.div>

        <div className="mt-24 grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-foreground/70"
          >
            <p className="max-w-sm">
              We work with ambitious businesses ready to scale their growth and digital presence.
              Tell us what you're building.
            </p>

            <div className="mt-16 space-y-8">
              <div>
                <h3 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground/40 mb-2">
                  Email
                </h3>
                <a
                  href="mailto:hello@navogiz.com"
                  className="text-xl font-semibold hover:text-primary transition-colors"
                >
                  hello@navogiz.com
                </a>
              </div>
              <div>
                <h3 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground/40 mb-2">
                  Location
                </h3>
                <p className="text-xl font-semibold">Global Execution</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-8"
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              setSubmitStatus("idle");
              try {
                const formData = new FormData(e.currentTarget as HTMLFormElement);
                formData.append("access_key", "9f7ba6d6-e17f-4a0b-b089-c69894187538");
                formData.append("subject", "New Contact Form Submission");
                
                const res = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: formData,
                });
                const json = await res.json();
                
                if (json.success) {
                  setSubmitStatus("success");
                  (e.target as HTMLFormElement).reset();
                } else {
                  setSubmitStatus("error");
                }
              } catch (err) {
                setSubmitStatus("error");
              } finally {
                setIsSubmitting(false);
              }
            }}
          >
            {submitStatus === "success" && (
              <div className="flex flex-col items-center justify-center p-8 text-center bg-accent/10 rounded-2xl border border-accent/20">
                <CheckCircle2 className="size-12 text-accent mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">Message Sent</h3>
                <p className="text-foreground/70">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 bg-destructive/10 border border-destructive/30 text-destructive rounded-lg text-sm">
                Something went wrong. Please try again or email us directly.
              </div>
            )}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="peer w-full border-b border-border bg-transparent py-4 text-lg outline-none transition-colors focus:border-primary placeholder-transparent"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-4 text-lg text-foreground/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs peer-valid:text-foreground/40 cursor-text"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                className="peer w-full border-b border-border bg-transparent py-4 text-lg outline-none transition-colors focus:border-primary placeholder-transparent"
                required
              />
              <label
                htmlFor="company"
                className="absolute left-0 top-4 text-lg text-foreground/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs peer-valid:text-foreground/40 cursor-text"
              >
                Company
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="peer w-full border-b border-border bg-transparent py-4 text-lg outline-none transition-colors focus:border-primary placeholder-transparent"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-4 text-lg text-foreground/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs peer-valid:text-foreground/40 cursor-text"
              >
                Email
              </label>
            </div>

            <div className="relative mt-4">
              <textarea
                id="message"
                name="message"
                placeholder="What are you looking to build?"
                rows={4}
                className="peer w-full border-b border-border bg-transparent py-4 text-lg outline-none transition-colors focus:border-primary placeholder-transparent resize-none"
                required
              />
              <label
                htmlFor="message"
                className="absolute left-0 top-4 text-lg text-foreground/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs peer-valid:text-foreground/40 cursor-text"
              >
                What are you looking to build?
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group mt-8 inline-flex w-fit items-center justify-center rounded-full bg-foreground px-10 py-5 font-semibold text-background transition-all hover:bg-primary disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <ArrowRight className="ml-3 size-5 transition-transform group-hover:translate-x-2" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
