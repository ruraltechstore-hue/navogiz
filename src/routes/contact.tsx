import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl font-black tracking-tighter text-foreground md:text-7xl lg:text-[7rem] leading-[0.9]">
            LET'S BUILD <br/> <span className="text-primary">SOMETHING THAT MOVES.</span>
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
              We work with ambitious businesses ready to scale their growth and digital presence. Tell us what you're building.
            </p>
            
            <div className="mt-16 space-y-8">
              <div>
                <h3 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground/40 mb-2">Email</h3>
                <a href="mailto:hello@navogiz.com" className="text-xl font-semibold hover:text-primary transition-colors">hello@navogiz.com</a>
              </div>
              <div>
                <h3 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground/40 mb-2">Location</h3>
                <p className="text-xl font-semibold">Global Execution</p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative">
              <input 
                type="text" 
                id="name"
                placeholder="Name" 
                className="peer w-full border-b border-border bg-transparent py-4 text-lg outline-none transition-colors focus:border-primary placeholder-transparent"
                required
              />
              <label htmlFor="name" className="absolute left-0 top-4 text-lg text-foreground/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs peer-valid:text-foreground/40 cursor-text">Name</label>
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                id="company"
                placeholder="Company" 
                className="peer w-full border-b border-border bg-transparent py-4 text-lg outline-none transition-colors focus:border-primary placeholder-transparent"
                required
              />
              <label htmlFor="company" className="absolute left-0 top-4 text-lg text-foreground/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs peer-valid:text-foreground/40 cursor-text">Company</label>
            </div>
            
            <div className="relative">
              <input 
                type="email" 
                id="email"
                placeholder="Email" 
                className="peer w-full border-b border-border bg-transparent py-4 text-lg outline-none transition-colors focus:border-primary placeholder-transparent"
                required
              />
              <label htmlFor="email" className="absolute left-0 top-4 text-lg text-foreground/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs peer-valid:text-foreground/40 cursor-text">Email</label>
            </div>
            
            <div className="relative mt-4">
              <textarea 
                id="message"
                placeholder="What are you looking to build?" 
                rows={4}
                className="peer w-full border-b border-border bg-transparent py-4 text-lg outline-none transition-colors focus:border-primary placeholder-transparent resize-none"
                required
              />
              <label htmlFor="message" className="absolute left-0 top-4 text-lg text-foreground/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs peer-valid:text-foreground/40 cursor-text">What are you looking to build?</label>
            </div>

            <button type="submit" className="group mt-8 inline-flex w-fit items-center justify-center rounded-full bg-foreground px-10 py-5 font-semibold text-background transition-all hover:bg-primary">
              Send Message <ArrowRight className="ml-3 size-5 transition-transform group-hover:translate-x-2" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}