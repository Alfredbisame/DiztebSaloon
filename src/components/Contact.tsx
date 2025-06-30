import React from 'react';
import { Instagram, Facebook, Twitter, Phone, Mail, MessageCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { isDark } = useTheme();

  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, name: 'Instagram', handle: '@premiumbarber' },
    { icon: <Facebook className="w-6 h-6" />, name: 'Facebook', handle: 'Premium Barber Studio' },
    { icon: <Twitter className="w-6 h-6" />, name: 'Twitter', handle: '@premiumbarber' }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Stay Connected
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Follow us for the latest styles, tips, and exclusive offers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className={`text-xl sm:text-2xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Get In Touch
            </h3>
            
            {/* Phone */}
            <div className={`group backdrop-blur-xl border rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:scale-105 cursor-pointer ${
              isDark 
                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
            }`}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Call Us
                  </h4>
                  <p className="text-cyan-400 font-medium">+233 123 456 789</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className={`group backdrop-blur-xl border rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:scale-105 cursor-pointer ${
              isDark 
                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
            }`}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Email Us
                  </h4>
                  <p className="text-cyan-400 font-medium">info@premiumbarber.com</p>
                </div>
              </div>
            </div>

            {/* Live Chat */}
            <div className={`group backdrop-blur-xl border rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:scale-105 cursor-pointer ${
              isDark 
                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
            }`}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Live Chat
                  </h4>
                  <p className="text-cyan-400 font-medium">Available 9AM - 8PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className={`text-xl sm:text-2xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Follow Us
            </h3>
            
            {socialLinks.map((social, index) => (
              <div 
                key={index}
                className={`group backdrop-blur-xl border rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:scale-105 cursor-pointer ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10'
                    : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
                }`}
                style={{
                  animation: `slideInRight 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {social.name}
                    </h4>
                    <p className="text-cyan-400 font-medium">{social.handle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className={`mt-8 sm:mt-12 backdrop-blur-xl border rounded-3xl p-6 sm:p-8 ${
          isDark 
            ? 'bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border-cyan-400/20'
            : 'bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200/50'
        }`}>
          <div className="text-center mb-6">
            <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Stay Updated
            </h3>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              Subscribe to our newsletter for exclusive offers and style tips
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className={`flex-1 p-4 backdrop-blur-sm border rounded-2xl focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/25 transition-all duration-300 ${
                isDark 
                  ? 'bg-white/5 border-white/20 text-white placeholder-gray-400'
                  : 'bg-white/80 border-gray-200 text-gray-900 placeholder-gray-500'
              }`}
            />
            <button className="px-6 sm:px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;