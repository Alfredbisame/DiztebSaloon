import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  experience: string;
  specialty: string;
}

const AboutTeamCard: React.FC<{ member: TeamMember; isDark: boolean }> = ({ member, isDark }) => (
  <div
    className={`group relative backdrop-blur-xl border rounded-3xl p-6 transition-all duration-500 hover:scale-105 focus-within:scale-105 shadow-md ${
      isDark
        ? 'bg-white/5 border-white/10 hover:bg-white/10'
        : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
    }`}
    tabIndex={0}
    aria-label={member.name}
    style={{
      animation: `fadeInUp 0.6s ease-out both`,
    }}
  >
    <div className="relative mb-6">
      <img
        src={member.image}
        alt={member.name}
        className="w-full aspect-square object-cover rounded-2xl group-hover:scale-105 group-focus:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300" />
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
    <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl -z-10" />
  </div>
);

export default AboutTeamCard; 