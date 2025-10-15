import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern Kitchen Renovation',
    category: 'Kitchen',
    before: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    title: 'Luxury Bathroom Remodel',
    category: 'Bathroom',
    before: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    title: 'Living Room Transformation',
    category: 'Living Room',
    before: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    title: 'Hardwood Flooring Installation',
    category: 'Flooring',
    before: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f4a220] mb-2 inline-block relative group">
            Our Work
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#f4a220] group-hover:w-full transition-all duration-500"></span>
          </h2>
          <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
            See the transformations we've created for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="bg-[#2a2a3e] rounded-2xl overflow-hidden border border-gray-700 hover:border-[#f4a220] transition-all duration-500 hover:shadow-2xl hover:shadow-[#f4a220]/20">
                <div className="grid grid-cols-2 gap-px bg-gray-700">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a2e]">
                    <img
                      src={project.before}
                      alt={`${project.title} - Before`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Before
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a2e]">
                    <img
                      src={project.after}
                      alt={`${project.title} - After`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <ImageIcon className="w-4 h-4 text-[#f4a220]" />
                    <span className="text-[#f4a220] text-sm font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
