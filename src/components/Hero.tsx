import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://videos.pexels.com/video-files/4503134/4503134-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1e]/95 via-[#1a1a2e]/90 to-[#0a0a1e]/95" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#f4a220] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#f4a220] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
          Expert Indoor Renovations
          <span className="block text-[#f4a220] mt-2 animate-slide-up">& Remodeling</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto animate-fade-in-delay">
          Professional Indoor Renovation and Remodeling
        </p>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
          Transform your space with professional craftsmanship and attention to detail
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
          <button
            onClick={() => onNavigate('contact')}
            className="bg-[#f4a220] text-[#1a1a2e] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#fdb642] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            Request a Quote
          </button>
          <button
            onClick={() => onNavigate('services')}
            className="border-2 border-[#f4a220] text-[#f4a220] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#f4a220] hover:text-[#1a1a2e] transition-all duration-300 hover:shadow-xl"
          >
            View Services
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#f4a220]" />
        </div>
      </div>
    </section>
  );
}
