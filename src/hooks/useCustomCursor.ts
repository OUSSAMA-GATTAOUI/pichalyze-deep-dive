import { useEffect } from "react";

export const useCustomCursor = () => {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    // Hover effect on interactive elements
    const onEnter = () => {
      ring.style.width = "50px";
      ring.style.height = "50px";
      ring.style.backgroundColor = "rgba(0,255,136,0.1)";
    };
    const onLeave = () => {
      ring.style.width = "34px";
      ring.style.height = "34px";
      ring.style.backgroundColor = "transparent";
    };

    const els = document.querySelectorAll("a, button");
    els.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);
};
