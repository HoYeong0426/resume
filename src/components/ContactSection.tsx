import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MessageCircle, Phone, MapPin, Gift } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "cjsghdud426@gmail.com",
      href: "mailto:cjsghdud426@gmail.com",
      primary: true
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/HoYeong0426",
      href: "https://github.com/HoYeong0426",
      primary: false
    },
    {
      icon: Gift,
      label: "Blog",
      value: "rich-yuna-daddy.tistory.com",
      href: "https://rich-yuna-daddy.tistory.com/",
      primary: false
    },
    // {
    //   icon: Phone,
    //   label: "Phone",
    //   value: "+82 10-1234-5678",
    //   href: "tel:+821012345678",
    //   primary: false
    // }
  ];

  const additionalInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Seoul, South Korea"
    },
    {
      icon: MessageCircle,
      label: "Availability",
      value: "Open to new opportunities"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card-dark text-card-dark-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-6 text-white">Contact</h2>
            <div className="section-divider mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <div className="space-y-4">
                  {contactMethods.map((contact) => {
                    const IconComponent = contact.icon;
                    return (
                      <a
                        key={contact.label}
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group hover:scale-105"
                      >
                        <div className={`p-3 rounded-full ${contact.primary ? 'bg-primary' : 'bg-white/10'} group-hover:bg-primary transition-colors duration-300`}>
                          <IconComponent className={`h-5 w-5 ${contact.primary ? 'text-white' : 'text-gray-300'} group-hover:text-white transition-colors duration-300`} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">{contact.label}</p>
                          <p className="text-white font-medium group-hover:text-primary transition-colors duration-300">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Social Links */}
            {/* <div className="flex flex-col justify-center items-center lg:items-start">
              <h3 className="text-xl font-semibold text-white mb-6">
                Connect with me
              </h3>
              <div className="flex gap-4">
                <Button 
                  size="lg"
                  className="bg-gray-800 hover:bg-primary text-white border-0"
                  asChild
                >
                  <a href="https://github.com/developer" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white border-0"
                  asChild
                >
                  <a href="https://linkedin.com/in/developer" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="border-t border-white/10 mt-16 pt-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Backend Developer. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;