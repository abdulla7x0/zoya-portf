import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Works", href: "#works" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/lavani-zoya-sabah-khan-534129361/" },
    { name: "GitHub", icon: Github, href: "https://github.com/zoya245" },
    // { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  ];

  return (
    <footer className="bg-primary py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Zoya khan</h3>
            <p className="text-primary-foreground/60 text-sm">
              Frontend developer
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-4">
              Menu
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-4">
              Socials
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors text-primary-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Zoya khan All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/50">
            Built with love & care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
