import { useState, useEffect } from "react";

const PageLoader = () => {
  const [phase, setPhase] = useState<"flash" | "blast" | "expand" | "exit" | "done">("flash");

  useEffect(() => {
    const flashTimer = setTimeout(() => setPhase("blast"), 150);
    const blastTimer = setTimeout(() => setPhase("expand"), 400);
    const expandTimer = setTimeout(() => setPhase("exit"), 1400);
    const exitTimer = setTimeout(() => setPhase("done"), 2200);

    return () => {
      clearTimeout(flashTimer);
      clearTimeout(blastTimer);
      clearTimeout(expandTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  if (phase === "done") return null;

  // Generate 48 particles with varied properties
  const particles = [...Array(48)].map((_, i) => {
    const angle = (i * 7.5 * Math.PI) / 180;
    const distance = 300 + Math.random() * 500;
    const size = Math.random() * 8 + 4;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    const delay = Math.random() * 100;
    return { x, y, size, delay, angle };
  });

  // Secondary smaller particles
  const smallParticles = [...Array(36)].map((_, i) => {
    const angle = (i * 10 * Math.PI) / 180;
    const distance = 200 + Math.random() * 400;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    const delay = 50 + Math.random() * 100;
    return { x, y, delay };
  });

  // Rising spark trails
  const sparks = [...Array(20)].map((_, i) => ({
    x: (Math.random() - 0.5) * 600,
    delay: i * 40,
    height: 100 + Math.random() * 200,
  }));

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Main overlay */}
      <div
        className={`absolute inset-0 bg-primary transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] ${
          phase === "exit" ? "-translate-y-full duration-700" : "translate-y-0 duration-300"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {/* Core explosion */}
          <div
            className={`absolute rounded-full bg-primary-foreground transition-all ease-out ${
              phase === "flash"
                ? "w-8 h-8 opacity-100 duration-100"
                : phase === "blast"
                ? "w-40 h-40 opacity-90 duration-200"
                : phase === "expand"
                ? "w-[400vmax] h-[400vmax] opacity-0 duration-800"
                : "w-[400vmax] h-[400vmax] opacity-0 duration-200"
            }`}
          />

          {/* Shockwave rings */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`ring-${i}`}
              className={`absolute rounded-full border-2 transition-all ease-out ${
                phase === "flash" || phase === "blast"
                  ? "opacity-0 scale-0"
                  : phase === "expand"
                  ? "opacity-0"
                  : "opacity-0"
              }`}
              style={{
                width: phase === "expand" || phase === "exit" ? `${100 + i * 60}vmax` : 0,
                height: phase === "expand" || phase === "exit" ? `${100 + i * 60}vmax` : 0,
                borderColor: `hsl(0 0% ${100 - i * 15}% / ${0.4 - i * 0.06})`,
                transitionDuration: `${700 + i * 120}ms`,
                transitionDelay: `${i * 60}ms`,
              }}
            />
          ))}

          {/* Main particles burst */}
          {particles.map((p, i) => (
            <div
              key={`particle-${i}`}
              className={`absolute rounded-full bg-primary-foreground transition-all ease-out ${
                phase === "flash"
                  ? "opacity-0 scale-0"
                  : phase === "blast"
                  ? "opacity-100 scale-100"
                  : phase === "expand"
                  ? "opacity-0 scale-50"
                  : "opacity-0 scale-0"
              }`}
              style={{
                width: p.size,
                height: p.size,
                transform:
                  phase === "blast" || phase === "expand" || phase === "exit"
                    ? `translate(${p.x}px, ${p.y}px) scale(${phase === "expand" ? 0.3 : 1})`
                    : "translate(0, 0) scale(0)",
                transitionDuration: "700ms",
                transitionDelay: `${p.delay}ms`,
                boxShadow: "0 0 20px 5px hsl(0 0% 100% / 0.5)",
              }}
            />
          ))}

          {/* Small particles */}
          {smallParticles.map((p, i) => (
            <div
              key={`small-${i}`}
              className={`absolute w-2 h-2 rounded-full bg-primary-foreground/70 transition-all ease-out ${
                phase === "flash" || phase === "blast"
                  ? "opacity-0"
                  : phase === "expand"
                  ? "opacity-0"
                  : "opacity-0"
              }`}
              style={{
                transform:
                  phase !== "flash"
                    ? `translate(${p.x}px, ${p.y}px)`
                    : "translate(0, 0)",
                transitionDuration: "600ms",
                transitionDelay: `${p.delay}ms`,
              }}
            />
          ))}

          {/* Rising spark trails */}
          {sparks.map((s, i) => (
            <div
              key={`spark-${i}`}
              className={`absolute bottom-1/2 transition-all ease-out ${
                phase === "expand" || phase === "exit"
                  ? "opacity-0"
                  : "opacity-0"
              }`}
              style={{
                left: `calc(50% + ${s.x}px)`,
                width: "2px",
                height: phase === "expand" ? s.height : 0,
                background: "linear-gradient(to top, transparent, hsl(0 0% 100%))",
                transform: `translateY(${phase === "expand" ? -s.height - 200 : 0}px)`,
                transitionDuration: "1000ms",
                transitionDelay: `${s.delay + 200}ms`,
              }}
            />
          ))}

          {/* Central logo */}
          <div className="relative z-20">
            <span
              className={`block text-7xl md:text-9xl font-black text-primary-foreground tracking-tighter transition-all duration-500 ${
                phase === "flash"
                  ? "opacity-0 scale-[2] blur-xl"
                  : phase === "blast"
                  ? "opacity-0 scale-150 blur-md"
                  : phase === "expand"
                  ? "opacity-100 scale-100 blur-0"
                  : "opacity-0 -translate-y-32 blur-sm"
              }`}
              style={{
                textShadow: "0 0 60px hsl(0 0% 0% / 0.5)",
              }}
            >
              ZA
            </span>
          </div>

          {/* Radial glow */}
          <div
            className={`absolute rounded-full transition-all ease-out ${
              phase === "expand"
                ? "w-96 h-96 opacity-30"
                : "w-0 h-0 opacity-0"
            }`}
            style={{
              background: "radial-gradient(circle, hsl(0 0% 0% / 0.3), transparent 70%)",
              transitionDuration: "800ms",
            }}
          />
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-foreground/10 overflow-hidden">
          <div
            className={`h-full bg-primary-foreground transition-all ease-out ${
              phase === "flash"
                ? "w-0 duration-100"
                : phase === "blast"
                ? "w-1/4 duration-200"
                : phase === "expand"
                ? "w-full duration-800"
                : "w-full duration-100"
            }`}
          />
        </div>
      </div>

      {/* Initial flash overlay */}
      <div
        className={`absolute inset-0 bg-primary-foreground pointer-events-none transition-opacity ${
          phase === "flash" ? "opacity-100 duration-100" : "opacity-0 duration-200"
        }`}
      />
    </div>
  );
};

export default PageLoader;
