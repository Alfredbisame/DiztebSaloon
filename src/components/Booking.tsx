import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, CreditCard } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Booking: React.FC = () => {
  const [selectedService, setSelectedService] = useState('VIP');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const { isDark } = useTheme();

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const services = [
    { name: 'Basic', price: '₵35', duration: '30 min' },
    { name: 'VIP', price: '₵65', duration: '60 min' },
    { name: 'Platinum', price: '₵95', duration: '90 min' }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Book Your Experience
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Schedule your appointment and step into a world of premium grooming
          </p>
        </div>

        {/* Booking Form */}
        <div className={`backdrop-blur-xl border rounded-3xl p-6 sm:p-8 transition-all duration-500 ${
          isDark 
            ? 'bg-white/5 border-white/10 hover:bg-white/10'
            : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
        }`}>
          <form className="space-y-6 sm:space-y-8">
            {/* Service Selection */}
            <div>
              <label className={`block font-semibold mb-4 text-base sm:text-lg ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Select Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {services.map((service) => (
                  <button
                    key={service.name}
                    type="button"
                    onClick={() => setSelectedService(service.name)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                      selectedService === service.name
                        ? 'border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/25'
                        : isDark
                        ? 'border-white/20 hover:border-white/40 hover:bg-white/5'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-center">
                      <h3 className={`font-semibold mb-1 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {service.name}
                      </h3>
                      <p className="text-cyan-400 font-bold">{service.price}</p>
                      <p className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {service.duration}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Date and Time Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block font-semibold mb-4 text-base sm:text-lg flex items-center gap-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  <Calendar className="w-5 h-5" />
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className={`w-full p-4 backdrop-blur-sm border rounded-2xl focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/25 transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/5 border-white/20 text-white'
                      : 'bg-white/80 border-gray-200 text-gray-900'
                  }`}
                />
              </div>

              <div>
                <label className={`block font-semibold mb-4 text-base sm:text-lg flex items-center gap-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  <Clock className="w-5 h-5" />
                  Select Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className={`w-full p-4 backdrop-blur-sm border rounded-2xl focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/25 transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/5 border-white/20 text-white'
                      : 'bg-white/80 border-gray-200 text-gray-900'
                  }`}
                >
                  <option value="">Choose time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time} className={isDark ? 'bg-slate-800' : 'bg-white'}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block font-semibold mb-4 text-base sm:text-lg flex items-center gap-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  <User className="w-5 h-5" />
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className={`w-full p-4 backdrop-blur-sm border rounded-2xl focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/25 transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/5 border-white/20 text-white placeholder-gray-400'
                      : 'bg-white/80 border-gray-200 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>

              <div>
                <label className={`block font-semibold mb-4 text-base sm:text-lg flex items-center gap-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  <Phone className="w-5 h-5" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone"
                  className={`w-full p-4 backdrop-blur-sm border rounded-2xl focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/25 transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/5 border-white/20 text-white placeholder-gray-400'
                      : 'bg-white/80 border-gray-200 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className={`block font-semibold mb-4 text-base sm:text-lg flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                <Mail className="w-5 h-5" />
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full p-4 backdrop-blur-sm border rounded-2xl focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/25 transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/20 text-white placeholder-gray-400'
                    : 'bg-white/80 border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>

            {/* Special Notes */}
            <div>
              <label className={`block font-semibold mb-4 text-base sm:text-lg ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Special Requests
              </label>
              <textarea
                rows={4}
                placeholder="Any special requests or notes..."
                className={`w-full p-4 backdrop-blur-sm border rounded-2xl focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/25 transition-all duration-300 resize-none ${
                  isDark 
                    ? 'bg-white/5 border-white/20 text-white placeholder-gray-400'
                    : 'bg-white/80 border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>

            {/* Book Button */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-white text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25 flex items-center justify-center gap-3"
            >
              <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;