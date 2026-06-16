"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const PARTICLE_COUNT = 8;
const PARTICLE_SIZE = 5;
const PARTICLE_TRAVEL = 40;

export default function CustomCursor() {
  const dotRef = useRef(null);
  const isHovering = useRef(false);
  const isVisible = useRef(false);
  const splitEls = useRef([]);
  const hoveredEl = useRef(null); // ADD THIS LINE
  const pathname = usePathname();

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;
    isHovering.current = false;
    gsap.killTweensOf(dot);

    const svg = dot.querySelector("svg");
    if (svg) {
      gsap.killTweensOf(svg);
      gsap.set(svg, { attr: { width: 17, height: 17 } });
    }

    gsap.set(dot, { opacity: 1 });
    splitEls.current.forEach((el) => el?.remove());
    splitEls.current = [];
  }, [pathname]);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) {
      dot.style.display = "none";
      return;
    }

    let mouseX = -100;
    let mouseY = -100;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        gsap.set(dot, { opacity: 1 });
      }

      gsap.to(dot, {
        x: Math.round(mouseX - 4),
        y: Math.round(mouseY - 4),
        duration: 0.08,
        ease: "none",
      });
    };

    const onEnter = () => {
      isHovering.current = true;
      const svg = dot.querySelector("svg");
      gsap.to(svg, {
        attr: { width: 25, height: 25 },
        duration: 0.35,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      isHovering.current = false;
      const svg = dot.querySelector("svg");
      gsap.to(svg, {
        attr: { width: 17, height: 17 },
        duration: 0.35,
        ease: "power2.out",
      });
    };

    const onMouseOut = (e) => {
      if (!e.relatedTarget && !e.toElement) {
        isHovering.current = false;
        isVisible.current = false;
        gsap.to(dot, {
          width: 8,
          height: 8,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const onMouseOver = () => {
      if (!isVisible.current) {
        isVisible.current = true;
        gsap.to(dot, { opacity: 1, duration: 0.3 });
      }
    };

    const onClick = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      splitEls.current.forEach((el) => el?.remove());
      splitEls.current = [];

      gsap.set(dot, { opacity: 0 });

      Array.from({ length: PARTICLE_COUNT }, () => {
        const angle = Math.random() * 360;
        const rad = (angle * Math.PI) / 180;
        const tx =
          Math.cos(rad) * (PARTICLE_TRAVEL * (0.5 + Math.random() * 0.8));
        const ty =
          Math.sin(rad) * (PARTICLE_TRAVEL * (0.5 + Math.random() * 0.8));
        const startRotation = Math.random() * 360;

        // wrapper handles position + blend mode
        const wrapper = document.createElement("div");
        wrapper.style.cssText = `
          position: fixed;
          width: ${PARTICLE_SIZE}px;
          height: ${PARTICLE_SIZE}px;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          will-change: transform, opacity;
        `;

        // set initial position via gsap so it controls all transforms
        gsap.set(wrapper, {
          x: mouseX - PARTICLE_SIZE / 2,
          y: mouseY - PARTICLE_SIZE / 2,
          rotation: startRotation,
          opacity: 1,
          scale: 1,
        });

        wrapper.innerHTML = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="${PARTICLE_SIZE}"
    height="${PARTICLE_SIZE}"
    viewBox="0 0 10 10"
    style="display:block;"
  >
    <circle cx="5" cy="5" r="5" fill="white"/>
  </svg>
`;

        document.body.appendChild(wrapper);
        splitEls.current.push(wrapper);

        gsap.to(wrapper, {
          x: mouseX - PARTICLE_SIZE / 2 + tx,
          y: mouseY - PARTICLE_SIZE / 2 + ty,
          rotation: startRotation + (Math.random() * 180 - 90),
          opacity: 0,
          scale: 0.3,
          duration: 0.45,
          ease: "power2.out",
          onComplete: () => {
            wrapper.remove();
            splitEls.current = splitEls.current.filter((p) => p !== wrapper);
          },
        });
      });

      gsap.to(dot, {
        opacity: 1,
        delay: 0.25,
        duration: 0.18,
        ease: "power2.out",
      });
    };

    // const attached = new WeakSet();

    // const attachHover = (el) => {
    //   if (attached.has(el)) return;
    //   attached.add(el);
    //   el.addEventListener("mouseenter", onEnter);
    //   el.addEventListener("mouseleave", onLeave);
    // };

    // const detachHover = (el) => {
    //   if (!attached.has(el)) return;
    //   el.removeEventListener("mouseenter", onEnter);
    //   el.removeEventListener("mouseleave", onLeave);
    // };

    const attached = new WeakSet();

    const attachHover = (el) => {
      if (attached.has(el)) return;
      attached.add(el);

      const enter = () => {
        hoveredEl.current = el;
        onEnter();
      };
      const leave = () => {
        if (hoveredEl.current === el) hoveredEl.current = null;
        onLeave();
      };

      el.__cursorEnter = enter;
      el.__cursorLeave = leave;

      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    };

    const detachHover = (el) => {
      if (!attached.has(el)) return;
      el.removeEventListener("mouseenter", el.__cursorEnter);
      el.removeEventListener("mouseleave", el.__cursorLeave);
    };

    const getHoverables = () =>
      document.querySelectorAll("a, button, [data-cursor]");

    getHoverables().forEach(attachHover);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node === dot || node === dotRef.current) return; // ignore cursor
          if (node.matches?.("a, button, [data-cursor]")) attachHover(node);
          node
            .querySelectorAll?.("a, button, [data-cursor]")
            .forEach(attachHover);
        });
        // mutation.removedNodes.forEach((node) => {
        //   if (node.nodeType !== 1) return;
        //   if (node.matches?.("a, button, [data-cursor]")) detachHover(node);
        //   node
        //     .querySelectorAll?.("a, button, [data-cursor]")
        //     .forEach(detachHover);
        // });

        mutation.removedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.matches?.("a, button, [data-cursor]")) detachHover(node);
          node
            .querySelectorAll?.("a, button, [data-cursor]")
            .forEach(detachHover);

          // ADD THIS BLOCK
          if (
            hoveredEl.current &&
            (node === hoveredEl.current || node.contains?.(hoveredEl.current))
          ) {
            hoveredEl.current = null;
            onLeave();
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mouseover", onMouseOver);
      getHoverables().forEach(detachHover);
      observer.disconnect();
      splitEls.current.forEach((el) => el?.remove());
      splitEls.current = [];
    };
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: "fixed",
        width: 8,
        height: 8,
        mixBlendMode: "difference",
        pointerEvents: "none",
        zIndex: 9999,
        top: 0,
        left: 0,
        opacity: 0,
        willChange: "transform",
      }}
      dangerouslySetInnerHTML={{
        __html: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 1024 1024" fill="white" style="display:block;">
      <g transform="translate(0,1024) scale(0.1,-0.1)">
        <path d="M1824 9291 c-210 -60 -349 -266 -314 -463 10 -56 239 -1116 385 -1783 30 -137 100 -459 155 -715 357 -1648 1082 -4824 1131 -4955 28 -76 96 -147 177 -187 61 -30 74 -33 162 -33 92 0 97 1 170 41 95 51 445 278 1100 712 354 235 434 302 485 406 45 92 44 125 -13 361 -28 116 -69 289 -91 385 -252 1096 -371 1640 -371 1692 0 14 17 9 98 -28 131 -60 676 -335 1508 -760 897 -458 910 -464 1045 -464 126 0 199 33 741 341 677 385 700 400 785 493 82 90 98 131 98 261 0 102 -2 115 -31 176 -38 81 -125 175 -230 250 -44 31 -227 150 -409 264 -181 115 -465 294 -630 398 -165 104 -471 298 -680 430 -209 132 -713 453 -1120 712 -681 434 -838 534 -1315 837 -251 159 -934 597 -1120 718 -91 59 -228 148 -305 197 -77 49 -201 130 -275 178 -127 83 -228 148 -577 373 -162 104 -235 143 -312 166 -70 20 -169 19 -247 -3z"/>
      </g>
    </svg>`,
      }}
    />
  );
}
