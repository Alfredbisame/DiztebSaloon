import React from 'react';
import AboutTeamCard from './AboutTeamCard';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  experience: string;
  specialty: string;
}

const AboutTeam: React.FC<{ team: TeamMember[]; isDark: boolean }> = ({ team, isDark }) => (
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
        <AboutTeamCard key={index} member={member} isDark={isDark} />
      ))}
    </div>
  </div>
);

export default AboutTeam; 