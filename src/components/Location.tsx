import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import LocationHeader from './LocationHeader';
import AddressCard from './AddressCard';
import MapCard from './MapCard';
import HoursCard from './HoursCard';
import ContactCard from './ContactCard';

const Location: React.FC = () => {
  const { isDark } = useTheme();

  const hours = [
    { day: 'Monday', time: '9:00 AM - 8:00 PM' },
    { day: 'Tuesday', time: '9:00 AM - 8:00 PM' },
    { day: 'Wednesday', time: '9:00 AM - 8:00 PM' },
    { day: 'Thursday', time: '9:00 AM - 8:00 PM' },
    { day: 'Friday', time: '9:00 AM - 9:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 9:00 PM' },
    { day: 'Sunday', time: '10:00 AM - 6:00 PM' }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <LocationHeader isDark={isDark} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Map/Address Section */}
          <div className="space-y-6 sm:space-y-8">
            <AddressCard isDark={isDark} />
            <MapCard isDark={isDark} />
          </div>
          {/* Hours & Contact Section */}
          <div className="space-y-6 sm:space-y-8">
            <HoursCard isDark={isDark} hours={hours} />
            <ContactCard isDark={isDark} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;