import React from 'react';
import { Award, Users, Clock, Star, Scissors, Crown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { isDark } = useTheme();

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '10K+', label: 'Happy Clients' },
    { icon: <Clock className="w-8 h-8" />, number: '9+', label: 'Years Experience' },
    { icon: <Award className="w-8 h-8" />, number: '50+', label: 'Awards Won' },
    { icon: <Star className="w-8 h-8" />, number: '4.9', label: 'Average Rating' }
  ];

  const team = [
    {
      name: 'Marcus Johnson',
      role: 'Master Barber & Owner',
      image: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '12 years',
      specialty: 'Classic & Modern Cuts'
    },
    {
      name: 'David Thompson',
      role: 'Senior Barber',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '8 years',
      specialty: 'Beard Artistry'
    },
    {
      name: 'James Wilson',
      role: 'Style Specialist',
      image: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '6 years',
      specialty: 'Creative Designs'
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Premium Barber
          </h2>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Since 2015, we've been crafting exceptional grooming experiences that blend traditional barbering techniques with modern innovation. Our passion for excellence drives everything we do.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group text-center p-4 sm:p-6 backdrop-blur-xl border rounded-2xl transition-all duration-500 hover:scale-105 ${
                isDark 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10'
                  : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {stat.number}
              </h3>
              <p className={`text-sm sm:text-base ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-20">
          <div className={`backdrop-blur-xl border rounded-3xl p-6 sm:p-8 ${
            isDark 
              ? 'bg-white/5 border-white/10'
              : 'bg-white/80 border-gray-200/50'
          }`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Our Story
              </h3>
            </div>
            <p className={`text-sm sm:text-base leading-relaxed mb-4 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              What started as a small neighborhood barbershop has grown into Ghana's premier grooming destination. Our founder, Marcus Johnson, brought his vision of combining traditional craftsmanship with modern luxury to create an unparalleled experience.
            </p>
            <p className={`text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Every cut, every shave, every service is performed with meticulous attention to detail and a commitment to excellence that has earned us the trust of thousands of satisfied clients.
            </p>
          </div>

          <div className={`backdrop-blur-xl border rounded-3xl p-6 sm:p-8 ${
            isDark 
              ? 'bg-white/5 border-white/10'
              : 'bg-white/80 border-gray-200/50'
          }`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Our Mission
              </h3>
            </div>
            <p className={`text-sm sm:text-base leading-relaxed mb-4 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              To redefine the barbering experience by combining time-honored techniques with contemporary innovation, creating a space where every client feels valued, confident, and impeccably groomed.
            </p>
            <p className={`text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              We believe that great grooming is more than just a service—it's an art form that enhances confidence and celebrates individual style.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Meet Our Master Barbers
            </h3>
            <p className={`text-base sm:text-lg ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Skilled artisans dedicated to perfecting your look
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`group backdrop-blur-xl border rounded-3xl p-6 transition-all duration-500 hover:scale-105 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10'
                    : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
                }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="text-center">
                  <h4 className={`text-lg sm:text-xl font-bold mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {member.name}
                  </h4>
                  <p className="text-cyan-400 font-semibold mb-2">{member.role}</p>
                  <div className={`text-sm space-y-1 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <p>{member.experience} experience</p>
                    <p>Specialty: {member.specialty}</p>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl -z-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;