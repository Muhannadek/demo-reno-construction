import { Hammer, Phone, Mail, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0a0a1e] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start">
          <div>
            <div className="flex items-center space-x-3 mb-4 group cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="bg-gradient-to-br from-[#f4a220] to-[#fdb642] p-2 rounded-lg group-hover:scale-110 transition-transform">
                <Hammer className="w-6 h-6 text-[#1a1a2e]" />
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">Demo & Reno</div>
                <div className="text-[#f4a220] text-xs font-medium">Construction</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional indoor construction and renovation services with a commitment to quality and excellence.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => onNavigate(item.toLowerCase())}
                  className="block text-gray-400 hover:text-[#f4a220] transition-colors text-sm"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+14377703399"
                className="flex items-center gap-2 text-gray-400 hover:text-[#f4a220] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +1 (437) 770-3399
              </a>
              <a
                href="mailto:baslazazmt@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-[#f4a220] transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                baslazazmt@gmail.com
              </a>
              <a
                href="https://www.instagram.com/demoreno.construction/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#f4a220] transition-colors text-sm group"
              >
                <Instagram className="w-4 h-4 group-hover:scale-125 transition-transform" />
                @demoreno.construction
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <div className="text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Demo & Reno Construction. All rights reserved.</p>
              <p className="mt-1">Bass Azazmeh, General Contractor</p>
            </div>
            <div className="flex gap-4">
              <a
                href="tel:+14377703399"
                className="hover:text-[#f4a220] transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:baslazazmt@gmail.com"
                className="hover:text-[#f4a220] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/demoreno.construction/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f4a220] transition-colors"
              >
                <Instagram className="w-5 h-5 hover:scale-125 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
