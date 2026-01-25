import { useState } from "react";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <p className="section-title">Get In Touch</p>
            <h2 className="heading-lg mb-6">
              Say Hello
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Have a project, opportunity, or idea? Let's build something meaningful together.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="input-field"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="input-field"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="input-field resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="pill-button group">
              Send Message
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
