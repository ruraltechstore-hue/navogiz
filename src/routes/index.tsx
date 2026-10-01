import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, MousePointerClick, MoveUpRight, Navigation, Target, Zap } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import CloudSky from "@/components/originkit/ui/cloud-sky";
import FolderFloat from "@/components/FolderFloat";

export const Route = createFileRoute("/")({
  component: Index,
});

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return isMobile;
}


function Index() {
  return (
    <div className="relative w-full bg-background">
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ScrollStorySection />
      <CapabilitiesSection />
      <WhyNavogizSection />
      <ProcessSection />
      <BigCTASection />
    </div>
  );
}

function HeroSection() {
  const isMobile = useIsMobile();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["BUILD", "SELL", "GROW", "MOVE"];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-hero">
      <div className="absolute inset-0 z-0 opacity-100">
        {!isMobile ? (
          <CloudSky
            background="#07111F"
            baseColor="#1683FF"
            accentColor="#FFFFFF"
            density={60}
            size={80}
            speed={20}
            clouds={{ softness: 90, shadow: 120, cirrus: 20 }}
            sun={{ x: 50, y: 50, glow: "rgba(22, 131, 255, 0.9)" }}
            pointer={{ parallax: 150, wind: 50, damping: 20 }}
          />
        ) : (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/images/smalldevicebackground.jpg')` }}
          />
        )}
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/20 to-background" />

      <motion.div
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pointer-events-none"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 font-mono text-sm font-bold tracking-[0.2em] text-primary"
        >
          NAVOGIZ
        </motion.p> */}

        <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-[7rem]">
          <span className="block flex flex-wrap items-center">WE <div className="inline-grid w-[220px] sm:w-[300px] md:w-[450px] overflow-hidden ml-2 sm:ml-4">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={words[currentWordIndex]}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="col-start-1 row-start-1 text-primary drop-shadow"
              >
                {words[currentWordIndex]}.
              </motion.span>
            </AnimatePresence>
          </div>
          </span>
          <span className="block mt-2">MOMENTUM.</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 max-w-lg text-lg font-medium leading-relaxed text-white/80 md:text-xl"
        >
          Digital growth systems for businesses ready to move.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-wrap gap-5 pointer-events-auto"
        >
          <Link to="/services" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:text-black">
            <span className="relative z-10 flex items-center gap-2">Explore Services <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
            <div className="absolute inset-0 z-0 scale-x-0 bg-white transition-transform duration-500 origin-left group-hover:scale-x-100" />
          </Link>
          <Link to="/contact" className="group inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40">
            Start a Conversation
          </Link>
        </motion.div>

        <div
          className="pointer-events-none absolute z-20 hidden w-[280px] xl:flex flex-col items-end gap-20"
          style={{ right: 'clamp(32px, 7vw, 120px)', top: 'clamp(220px, 28vh, 300px)' }}
        >
          <div className="translate-x-[20px]">
            <motion.div
              className="w-[200px] rounded-[20px] p-4 backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.15)] pointer-events-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
              animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white"><Navigation className="size-5" /></div>
                <div>
                  <p className="text-[11px] font-semibold text-white/60">Digital Growth</p>
                  <p className="text-sm font-bold text-white">Accelerated</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="-translate-x-[20px]">
            <motion.div
              className="w-[200px] rounded-[20px] p-4 backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.15)] pointer-events-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
              animate={{ y: [10, -10, 10], rotate: [2, -2, 2] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white"><Target className="size-5" /></div>
                <div>
                  <p className="text-[11px] font-semibold text-white/60">Sales Strategy</p>
                  <p className="text-sm font-bold text-white">Optimized</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="-translate-x-[80px]">
            <motion.div
              className="w-[200px] rounded-[20px] p-4 backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.15)] pointer-events-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
              animate={{ y: [-8, 8, -8], rotate: [-1, 1, -1] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white"><Zap className="size-5" /></div>
                <div>
                  <p className="text-[11px] font-semibold text-white/60">Brand Identity</p>
                  <p className="text-sm font-bold text-white">Elevated</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-xs font-bold uppercase tracking-widest text-gray-400">
        <span className="block mb-2">Scroll to explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="mx-auto size-4" />
        </motion.div>
      </div>
    </section>
  );
}

function IntroSection() {
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });
  const [demoHover, setDemoHover] = useState(false);

  useEffect(() => {
    if (isInView) {
      setDemoHover(true);
      const t = setTimeout(() => setDemoHover(false), 3000);
      return () => clearTimeout(t);
    }
  }, [isInView]);

  return (
    <section className="relative min-h-[95vh] py-32 px-6 bg-background text-center flex flex-col justify-center items-center overflow-hidden">

      {/* Top Header placed behind folder */}
      <div className="relative z-0 w-full flex flex-col items-center pointer-events-none mt-16 md:mt-28">
        {/* <p className="font-mono text-sm font-bold tracking-widest text-foreground/40 uppercase mb-4">
          What we do
        </p> */}
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground/20 md:text-6xl lg:text-7xl max-w-4xl">
          Not another digital agency.
        </h2>
      </div>

      {/* Folder Hero Component tightly packed */}
      {!isMobile && (
        <div className="relative z-10 w-full flex items-center justify-center mt-10 md:mt-20 pointer-events-none">
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-auto scale-110 md:scale-125 lg:scale-150"
          >
            <FolderFloat
              items={[
                "Accelerated growth",
                "AI automation",
                "Brand positioning",
                "Sales funnels"
              ]}
              label="Navogiz Solutions"
              sublabel="4 core services"
              forceOpen={demoHover}
            />
          </motion.div>
        </div>
      )}

      {/* Tightly packed bottom text */}
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full max-w-5xl px-4 mt-6 md:mt-10 pointer-events-none drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] dark:drop-shadow-[0_0_15px_rgba(0,0,0,0.7)]"
      >
        <p className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-7xl">
          From ideas on screen to results in the <span className="text-primary italic"> real world.</span>
        </p>
      </motion.div>

    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "SaaS",
      headline: "Turn software into sales.",
      desc: "Lead generation, customer acquisition and sales outreach for SaaS businesses.",
      href: "/services/saas-sales"
    },
    {
      id: "02",
      title: "LOGISTICS",
      headline: "Move more than freight.",
      desc: "Customer acquisition and business development for logistics companies.",
      href: "/services/logistics-sales"
    },
    {
      id: "03",
      title: "EDUCATION",
      headline: "Learn skills that pay.",
      desc: "Practical digital skills for careers, freelancing and business growth.",
      href: "/services/educational-services"
    },
    {
      id: "04",
      title: "RURAL TECH",
      headline: "Take digital further.",
      desc: "Digital services and entrepreneurship opportunities for rural and semi-urban communities.",
      href: "/services/rural-tech-store"
    }
  ];

  return (
    <section className="py-24 bg-surface-strong px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-5xl font-bold uppercase leading-none md:text-7xl">
          FOUR WAYS <br />WE MOVE BUSINESS.
        </h2>

        <div className="mt-20 flex flex-col gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link to={svc.href as any} className="group relative block overflow-hidden rounded-3xl bg-background p-8 md:p-12 transition-all duration-500 hover:bg-primary/5 hover:scale-[1.02] border border-border h-full">
                <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-4">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary text-white">
                    <MoveUpRight className="size-8" />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-24 relative z-10">
                  <div className="font-mono text-6xl font-black text-foreground/10 transition-colors duration-500 group-hover:text-primary/30">
                    {svc.id}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-sm font-bold tracking-widest text-primary uppercase mb-4">{svc.title}</h3>
                    <h4 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">{svc.headline}</h4>
                    <p className="mt-4 max-w-lg text-lg text-foreground/70 opacity-0 -translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScrollStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.3], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.6], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);

  const display1 = useTransform(scrollYProgress, (v) => v > 0.35 ? "none" : "block");
  const display2 = useTransform(scrollYProgress, (v) => v > 0.65 ? "none" : "block");

  const y1 = useTransform(scrollYProgress, [0.25, 0.3], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.6], [50, 0, 0, -50]);
  const y3 = useTransform(scrollYProgress, [0.65, 0.75], [50, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-foreground text-background">
      <div className="sticky top-0 grid h-screen place-items-center px-6 overflow-hidden">
        <motion.div style={{ opacity: opacity1, y: y1, display: display1 as any }} className="col-start-1 row-start-1 w-full text-center">
          <h2 className="font-display text-6xl font-black md:text-9xl tracking-tighter">ATTENTION<br />ISN'T THE GOAL.</h2>
        </motion.div>

        <motion.div style={{ opacity: opacity2, y: y2, display: display2 as any }} className="col-start-1 row-start-1 w-full text-center relative z-10">
          <motion.div
            className="absolute inset-0 mx-auto w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-primary/20 blur-[60px] md:blur-[100px] mix-blend-screen -z-10"
            animate={{ rotate: [0, 180, 360], scale: [0.8, 1.1, 0.8] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <h2 className="font-display text-6xl font-black md:text-9xl tracking-tighter text-primary">TRACTION IS.</h2>
        </motion.div>

        <motion.div style={{ opacity: opacity3, y: y3 }} className="col-start-1 row-start-1 w-full text-center relative z-10">
          <motion.div
            className="absolute inset-0 mx-auto w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-blue-500/20 blur-[60px] md:blur-[100px] mix-blend-screen -z-10"
            animate={{ rotate: [360, 180, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <h2 className="font-display text-6xl font-black md:text-9xl tracking-tighter text-primary">RESULTS ARE.</h2>
        </motion.div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  const capabilities = [
    "Sales", "Lead Generation", "Customer Acquisition", "Digital Marketing",
    "AI", "E-Commerce", "Business Development", "Technology", "Training", "Entrepreneurship"
  ];

  return (
    <section className="py-32 px-6 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-sm font-bold tracking-widest text-foreground/40 uppercase mb-16 text-center">
          What We Bring
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap}
              whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "white" }}
              className="rounded-full border border-border bg-surface px-8 py-4 font-display text-xl font-medium tracking-tight text-foreground transition-colors cursor-pointer"
            >
              {cap}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyNavogizSection() {
  return (
    <section className="py-32 px-6 bg-surface-strong">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-7xl font-bold tracking-tighter text-foreground/10 md:text-[10rem] mb-20 text-center">
          WHY NAVOGIZ?
        </h2>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 md:col-start-2"
          >
            <h3 className="font-display text-5xl font-bold leading-tight">Less noise.<br /><span className="text-primary">More movement.</span></h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:col-start-8"
          >
            <p className="text-xl font-medium text-foreground/70">Strategy that actually ships.</p>
            <p className="mt-8 text-xl font-medium text-foreground/70">Digital execution with commercial intent.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { num: "01", title: "FIND THE GAP" },
    { num: "02", title: "BUILD THE SYSTEM" },
    { num: "03", title: "CREATE THE MOTION" },
    { num: "04", title: "MEASURE THE SHIFT" },
  ];

  return (
    <section className="py-32 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between relative">
          <div className="absolute top-[48px] left-0 w-full h-[1px] bg-border hidden md:block">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex flex-row md:flex-col items-center gap-6 mb-12 md:mb-0 bg-background md:px-8 py-4"
            >
              <div className="flex size-16 items-center justify-center rounded-full border-2 border-primary bg-background font-mono text-xl font-bold text-primary">
                {step.num}
              </div>
              <h4 className="font-display text-xl font-bold tracking-tight">{step.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BigCTASection() {
  return (
    <div className="px-4 pb-4 md:px-6 md:pb-6">
      <section className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-foreground py-40 px-6 text-background text-center">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(22,131,255,0.15),transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <h2 className="font-display text-6xl font-black tracking-tighter md:text-9xl">READY TO <br /> MOVE?</h2>
          <p className="mt-8 text-2xl opacity-70">Tell us what you're building.</p>

          <div className="mt-16">
            <Link to="/contact" className="group inline-flex items-center justify-center rounded-full bg-primary px-10 py-6 font-semibold text-white transition-all hover:scale-110 hover:bg-white hover:text-primary">
              Start a Conversation <ArrowRight className="ml-3 size-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
