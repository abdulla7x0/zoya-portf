const services = [
  {
    number: "01",
    title: "Frontend  Development",
    description:
      "I design and build complete web applications — from intuitive frontends to reliable  systems. My focus is on scalability, maintainability, and real-world performance.",
    stack: ["React",   "REST APIs", "twss", "Docker", "Git"],
  },
  {
    number: "02",
    title: "UI/UX & Frontend Engineering",
    description:
      "I create interfaces that feel effortless to use. Clean layouts, smooth interactions, and responsive design are at the core of my frontend work — always balancing aesthetics with usability.",
    stack: ["Next.js", "Tailwind CSS", "GSAP", "TypeScript", "Figma-to-Code"],
  },
  {
    number: "03",
    title: "Optimization & System Design",
    description:
      "I enjoy solving structural problems — improving performance, designing efficient data flows, and applying core computer science principles to build systems that scale smoothly.",
    stack: ["Data Structures", "Algorithms", "DBMS", "OOP", "Scalability"],
  },
];

const Services = () => {
  // Nav height ~72px, each card ~200px, stagger by ~60px visible
  const getTopOffset = (index: number) => {
    return 72 + index * 16; // Nav height + stacked offset
  };

  return (
    <section id="services" className="py-24 md:py-32 px-0 md:px-12">
      <div className="container mx-auto px-0 md:px-0">
        <p className="section-title sticky top-16 z-40 bg-background pb-4 px-6 md:px-0">What I Do</p>

        <div className="relative">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="bento-card grid md:grid-cols-12 gap-4 md:gap-8 items-start sticky mb-4 md:mb-6 transition-shadow duration-300 rounded-xl md:rounded-2xl mx-2 md:mx-0"
              style={{
                top: `${getTopOffset(index)}px`,
                zIndex: 10 + index,
              }}
            >
              <div className="md:col-span-2">
                <span className="service-number">{service.number}</span>
              </div>
              
              <div className="md:col-span-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  {service.title}
                </h3>
              </div>
              
              <div className="md:col-span-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="tech-tag px-3 py-1 rounded-full bg-secondary/50 border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
