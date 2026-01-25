import { useState, useRef, useEffect } from "react";

const Hero = () => {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const rippleIdRef = useRef(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (!nameRef.current) return;
    const rect = nameRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    const newRipple = { id: rippleIdRef.current++, x, y };
    setRipples(prev => [...prev.slice(-8), newRipple]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setRipples(prev => prev.slice(1));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <p className="section-title opacity-0 animate-fade-up text-primary-foreground/60">Frontend Developer</p>
        
        <h1 
          ref={nameRef}
          onMouseMove={handleMouseMove}
          className="heading-xl mb-6 opacity-0 animate-fade-up delay-100 text-primary-foreground relative cursor-default overflow-hidden"
        >
          {/* Water ripple effects */}
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              className="absolute pointer-events-none"
              style={{
                left: `${ripple.x}%`,
                top: `${ripple.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <span className="absolute w-4 h-4 rounded-full bg-primary-foreground/20 animate-water-ripple" />
              <span className="absolute w-4 h-4 rounded-full bg-primary-foreground/15 animate-water-ripple-delayed" />
              <span className="absolute w-4 h-4 rounded-full bg-primary-foreground/10 animate-water-ripple-slow" />
            </span>
          ))}
          <span className="relative z-10">Zoya khan</span>
        </h1>
        
       
        
        <div className="opacity-0 animate-fade-up delay-300">
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground text-primary font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/20">
            Contact ↗
          </a>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
          <div className="flex flex-col items-center gap-2 text-primary-foreground/60">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-primary-foreground/20"></div>
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-primary-foreground/5 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-primary-foreground/5 animate-pulse delay-500" />
    </section>
  );
};

export default Hero;
