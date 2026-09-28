import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorText, setCursorText] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable on mobile
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const button = target.closest("button");
      const link = target.closest("a");
      const serviceCard = target.closest(".service-card"); // Add this class to service cards
      
      if (serviceCard) {
        setCursorVariant("view");
        setCursorText("VIEW");
      } else if (button || (link && link.classList.contains("btn"))) {
        setCursorVariant("expand");
        setCursorText("");
      } else if (link) {
        setCursorVariant("link");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "rgba(22, 131, 255, 0.5)",
      mixBlendMode: "difference" as any
    },
    expand: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(22, 131, 255, 0.2)",
      mixBlendMode: "normal" as any
    },
    link: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: "rgba(22, 131, 255, 0.4)",
      mixBlendMode: "difference" as any
    },
    view: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(22, 131, 255, 1)",
      mixBlendMode: "normal" as any
    }
  };

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full text-[10px] font-bold tracking-widest text-white transition-colors"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        {cursorText}
      </motion.div>
      <style>{`
        @media (pointer: fine) {
          body {
            cursor: none;
          }
          a, button, input, textarea {
            cursor: none;
          }
        }
      `}</style>
    </>
  );
}
