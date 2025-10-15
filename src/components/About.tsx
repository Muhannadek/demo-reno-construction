import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Clock, value: '1000+', label: 'Projects Completed' },
    { icon: ThumbsUp, value: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="about" className="py-20 bg-[#2a2a3e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#f4a220] mb-2 inline-block relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#f4a220] group-hover:w-full transition-all duration-500"></span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <span className="text-[#f4a220] font-semibold">Bass Azazmeh</span>, a licensed General Contractor with over a decade of experience, leads Demo & Reno Construction with a commitment to excellence and precision.
              </p>
              <p>
                We specialize in transforming indoor spaces through expert craftsmanship and attention to detail. From small repairs to complete renovations, we handle every project with professionalism and care.
              </p>
              <p>
                Our mission is to deliver high-quality construction services that exceed expectations. We work closely with our clients to understand their vision and bring it to life with integrity, transparency, and superior workmanship.
              </p>
              <p className="text-white font-medium">
                Your space deserves the best, and we're here to make it happen.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#1a1a2e] to-[#0a0a1e] p-6 rounded-2xl border border-gray-700 text-center hover:border-[#f4a220] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#f4a220]/20 group"
                >
                  <div className="bg-gradient-to-br from-[#f4a220] to-[#fdb642] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon className="w-6 h-6 text-[#1a1a2e]" />
                  </div>
                  <div className="text-3xl font-bold text-[#f4a220] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
