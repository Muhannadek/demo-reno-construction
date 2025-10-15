import { Home, Hammer, Square, Grid3x3, Layers, ChefHat, Bath, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Indoor Framing',
    description: 'Structural framing for walls, partitions, and interior spaces with precision and code compliance.'
  },
  {
    icon: Square,
    title: 'Window Installation',
    description: 'Professional window installation and replacement to enhance natural light and energy efficiency.'
  },
  {
    icon: Layers,
    title: 'Drywall',
    description: 'Expert drywall installation, finishing, and repair for smooth, flawless walls and ceilings.'
  },
  {
    icon: Grid3x3,
    title: 'Ceiling Tiles',
    description: 'Drop ceiling and tile installation for commercial and residential spaces.'
  },
  {
    icon: Sparkles,
    title: 'Flooring',
    description: 'Installation of hardwood, laminate, tile, and vinyl flooring with meticulous attention to detail.'
  },
  {
    icon: ChefHat,
    title: 'Kitchen Renovation',
    description: 'Complete kitchen remodeling including cabinets, countertops, and custom finishes.'
  },
  {
    icon: Bath,
    title: 'Bathroom Renovation',
    description: 'Full bathroom renovations with modern fixtures, tiling, and waterproofing.'
  },
  {
    icon: Hammer,
    title: 'Full Indoor Renovation',
    description: 'Comprehensive interior renovation services from concept to completion.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f4a220] mb-2 inline-block relative group">
            Our Services
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#f4a220] group-hover:w-full transition-all duration-500"></span>
          </h2>
          <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
            Professional construction and renovation services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#2a2a3e] to-[#1a1a2e] p-6 rounded-2xl border border-gray-700 hover:border-[#f4a220] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#f4a220]/20 group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-[#f4a220] to-[#fdb642] w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-7 h-7 text-[#1a1a2e]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#f4a220] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
