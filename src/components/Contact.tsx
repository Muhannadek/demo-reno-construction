import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitMessage('Thank you! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-[#2a2a3e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f4a220] mb-2 relative inline-block group">
            Get In Touch
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#f4a220] group-hover:w-full transition-all duration-500"></span>
          </h2>
          <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
            Ready to start your renovation project? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <a
                href="tel:+14377703399"
                className="flex items-start gap-4 p-4 bg-[#1a1a2e] rounded-lg border border-gray-700 hover:border-[#f4a220] transition-all group"
              >
                <div className="bg-[#f4a220] p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-[#1a1a2e]" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Phone</div>
                  <div className="text-white font-medium">+1 (437) 770-3399</div>
                </div>
              </a>

              <a
                href="mailto:baslazazmt@gmail.com"
                className="flex items-start gap-4 p-4 bg-[#1a1a2e] rounded-lg border border-gray-700 hover:border-[#f4a220] transition-all group"
              >
                <div className="bg-[#f4a220] p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-[#1a1a2e]" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Email</div>
                  <div className="text-white font-medium">baslazazmt@gmail.com</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-[#1a1a2e] rounded-lg border border-gray-700">
                <div className="bg-[#f4a220] p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#1a1a2e]" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Website</div>
                  <div className="text-white font-medium">demorenoconstruction.com</div>
                </div>
              </div>

              <a
                href="https://www.instagram.com/demoreno.construction/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-[#1a1a2e] rounded-lg border border-gray-700 hover:border-[#f4a220] transition-all group"
              >
                <div className="bg-gradient-to-br from-[#f4a220] to-[#fdb642] p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6 text-[#1a1a2e]" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Instagram</div>
                  <div className="text-white font-medium">@demoreno.construction</div>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a1a2e] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#f4a220] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a1a2e] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#f4a220] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a1a2e] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#f4a220] transition-colors"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1a1a2e] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#f4a220] transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#f4a220] to-[#fdb642] text-[#1a1a2e] px-6 py-4 rounded-xl font-semibold hover:from-[#fdb642] hover:to-[#f4a220] transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5" />
              </button>

              {submitMessage && (
                <div className="bg-green-500 text-white px-4 py-3 rounded-lg text-center">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
