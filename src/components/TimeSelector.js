import React, { useState } from 'react';
import './TimeSelector.css';

const TimeSelector = ({ onChange }) => {
  const [selectedTime, setSelectedTime] = useState({
    hour: new Date().getHours(),
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    gmt: 7
  });

  // Generate options for selectors
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - 50 + i);
  const gmtValues = Array.from({ length: 25 }, (_, i) => i - 12); // GMT-12 to GMT+12

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newTime = {
      ...selectedTime,
      [name]: parseInt(value)
    };
    setSelectedTime(newTime);
    if (onChange) {
      onChange(newTime);
    }
  };

  return (
    <div className="time-selector">
      <div className="time-selector-grid">
        <select name="hour" value={selectedTime.hour} onChange={handleChange}>
          {hours.map(hour => (
            <option key={hour} value={hour}>
              {hour.toString().padStart(2, '0')}h
            </option>
          ))}
        </select>
        <select name="day" value={selectedTime.day} onChange={handleChange}>
          {days.map(day => (
            <option key={day} value={day}>
              {day.toString().padStart(2, '0')}
            </option>
          ))}
        </select>
        <select name="month" value={selectedTime.month} onChange={handleChange}>
          {months.map(month => (
            <option key={month} value={month}>
              {month.toString().padStart(2, '0')}
            </option>
          ))}
        </select>
        <select name="year" value={selectedTime.year} onChange={handleChange}>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select name="gmt" value={selectedTime.gmt} onChange={handleChange}>
          {gmtValues.map(gmt => (
            <option key={gmt} value={gmt}>
              GMT{gmt >= 0 ? '+' : ''}{gmt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TimeSelector;
