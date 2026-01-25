import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "JOB PORTAL",
    subtitle: "Full-Stack Recruitment Platform",
    category: "DEVELOPMENT",
    year: "2025",
    link: "#",
  },
  {
    title: "Portfolio Builder App",
    subtitle: "A ready to made Portfolio Builder",
    category: " Development",
    year: "2025",
    link: "#",
  },
  {
    title: "Code Editor Lightweight",
    subtitle: "Developer-First Code Visualization Tool",
    category: "DEVELOPMENT",
    year: "2025",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="works" className="py-32 md:py-40 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Premium heading */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-20 md:mb-28">
          SELECTED
          <br />
          <span className="text-muted-foreground">WORKS</span>
        </h2>

        {/* Project list */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              className="group block border-t border-border py-10 md:py-14 transition-colors hover:bg-card/30"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Left: Number + Title */}
                <div className="flex items-start md:items-center gap-6 md:gap-10">
                  <span className="text-sm text-muted-foreground font-medium tabular-nums mt-2 md:mt-0">
                    0{index + 1}
                  </span>
                  
                  <div>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base mt-2 md:mt-3">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right: Tags + Arrow */}
                <div className="flex items-center gap-4 md:gap-6 ml-12 md:ml-0">
                  {/* Pills */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground px-3 py-1.5 rounded-full border border-border">
                      {project.category}
                    </span>
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground px-3 py-1.5 rounded-full border border-border">
                      {project.year}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground group-hover:rotate-45 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </a>
          ))}
          
          {/* Bottom border */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
