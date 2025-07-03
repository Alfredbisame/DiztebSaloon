import React from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import AboutStats from './AboutStats';
import AboutStory from './AboutStory';
import AboutMission from './AboutMission';
import AboutTeam from './AboutTeam';

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
            About Dizteb Barber
          </h2>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Since 2022, we've been crafting exceptional grooming experiences that blend traditional barbering techniques with modern innovation. Our passion for excellence drives everything we do.
          </p>
        </div>

        {/* Stats Section */}
        <AboutStats stats={stats} isDark={isDark} />

        {/* Story & Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-20">
          <AboutStory isDark={isDark} />
          <AboutMission isDark={isDark} />
        </div>

        {/* Team Section */}
        <AboutTeam team={team} isDark={isDark} />
      </div>
    </section>
  );
};

export default About;