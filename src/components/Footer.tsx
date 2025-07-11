import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import img from "/image/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src={img}
              alt="Pawar Tech Logo"
              className="w-60 h-20 mb-5 object-contain"
            />
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>pawartechnologyservices@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 909-664-9556</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2 text-gray-300">
              <Link to="/about" className="block hover:text-white transition-colors">
                About Us
              </Link>
              <Link
                to="/services"
                className="block hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                to="/products"
                className="block hover:text-white transition-colors"
              >
                Products
              </Link>
              <Link
                to="/projects"
                className="block hover:text-white transition-colors"
              >
                Case Studies
              </Link>
              <Link
                to="/careers"
                className="block hover:text-white transition-colors"
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2 text-gray-300">
              <div>Web Development</div>
              <div>Software Development</div>
              <div>Digital Marketing</div>
              <div>UI/UX Design</div>
              <div>Strategy Consulting</div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-300">
              Subscribe to get updates on our latest technology insights and
              solutions.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-white text-primary hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-center text-center space-y-8">
          {/* Company Info */}
          <div className="space-y-4 w-full">
            <img
              src={img}
              alt="Pawar Tech Logo"
              className="mx-auto w-48 h-16 object-contain"
            />
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>pawartechnologyservices@gmail.com</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 909-664-9556</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 w-full">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2 text-gray-300">
              <Link
                to="/about"
                className="block hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="block hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                to="/products"
                className="block hover:text-white transition-colors"
              >
                Products
              </Link>
              <Link
                to="/projects"
                className="block hover:text-white transition-colors"
              >
                Case Studies
              </Link>
              <Link
                to="/careers"
                className="block hover:text-white transition-colors"
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 w-full">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2 text-gray-300">
              <div>Web Development</div>
              <div>Software Development</div>
              <div>Digital Marketing</div>
              <div>UI/UX Design</div>
              <div>Strategy Consulting</div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 w-full max-w-xs mx-auto">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-300">
              Subscribe to get updates on our latest technology insights and
              solutions.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-white text-primary hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-center md:text-left mb-4 md:mb-0">
            © 2025 Pawar Technology and Services. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link
              to="/privacy"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;