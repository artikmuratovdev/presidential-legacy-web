import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary-foreground/10 p-2 rounded-lg">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-display font-bold">Presidential School</span>
                <span className="text-xs opacity-80">of Uzbekistan</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Excellence in education, innovation, and leadership. Shaping the future scholars of Uzbekistan.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Our Teachers
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Programs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-80" />
                <span className="text-sm opacity-80">Tashkent, Uzbekistan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 opacity-80" />
                <span className="text-sm opacity-80">+998 71 123 45 67</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 opacity-80" />
                <span className="text-sm opacity-80">info@presidentialschool.uz</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Presidential School of Uzbekistan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
