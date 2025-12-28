import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const CalendarPicker = ({ selectedDate, onDateTimeSelect }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [duration, setDuration] = useState(30); // 15, 30, or 45 minutes

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    // Generate time slots (9:00 AM to 5:00 PM in 15-minute intervals)
    const generateTimeSlots = () => {
        const slots = [];
        for (let hour = 9; hour <= 17; hour++) {
            for (let minute = 0; minute < 60; minute += 15) {
                if (hour === 17 && minute > 0) break; // Stop at 5:00 PM
                const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                const displayTime = formatTime(hour, minute);
                slots.push({ value: time, display: displayTime });
            }
        }
        return slots;
    };

    const formatTime = (hour, minute) => {
        const period = hour >= 12 ? 'pm' : 'am';
        const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        return `${displayHour}:${minute.toString().padStart(2, '0')}${period}`;
    };

    const timeSlots = generateTimeSlots();

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const days = [];
        // Add empty slots for days before the first day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null);
        }
        // Add all days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(new Date(year, month, day));
        }
        return days;
    };

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const handleDayClick = (day) => {
        if (day) {
            setSelectedDay(day);
            if (selectedTime) {
                notifyParent(day, selectedTime);
            }
        }
    };

    const handleTimeClick = (time) => {
        setSelectedTime(time);
        if (selectedDay) {
            notifyParent(selectedDay, time);
        }
    };

    const notifyParent = (day, time) => {
        const [hours, minutes] = time.split(':');
        const dateTime = new Date(day);
        dateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
        onDateTimeSelect(dateTime.toISOString().slice(0, 16));
    };

    const isToday = (date) => {
        if (!date) return false;
        const today = new Date();
        return date.toDateString() === today.toDateString();
    };

    const isPast = (date) => {
        if (!date) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };

    const days = getDaysInMonth(currentMonth);

    return (
        <div className="calendar-picker">
            <div className="calendar-grid-section">
                <div className="calendar-header">
                    <button type="button" onClick={handlePrevMonth} className="calendar-nav-btn">
                        <ChevronLeft size={18} />
                    </button>
                    <h3 className="calendar-month-title">
                        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </h3>
                    <button type="button" onClick={handleNextMonth} className="calendar-nav-btn">
                        <ChevronRight size={18} />
                    </button>
                </div>

                <div className="calendar-day-names">
                    {dayNames.map(day => (
                        <div key={day} className="calendar-day-name">{day}</div>
                    ))}
                </div>

                <div className="calendar-days-grid">
                    {days.map((day, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => handleDayClick(day)}
                            disabled={!day || isPast(day)}
                            className={`calendar-day ${!day ? 'calendar-day-empty' : ''} 
                                ${isToday(day) ? 'calendar-day-today' : ''} 
                                ${selectedDay && day && selectedDay.toDateString() === day.toDateString() ? 'calendar-day-selected' : ''}
                                ${isPast(day) ? 'calendar-day-past' : ''}`}
                        >
                            {day ? day.getDate() : ''}
                        </button>
                    ))}
                </div>
            </div>

            <div className="time-picker-section">
                <div className="duration-selector">
                    {[15, 30, 45].map(min => (
                        <button
                            key={min}
                            type="button"
                            onClick={() => setDuration(min)}
                            className={`duration-btn ${duration === min ? 'duration-btn-active' : ''}`}
                        >
                            {min}m
                        </button>
                    ))}
                </div>

                <div className="time-slots-container">
                    <div className="time-slots-header">
                        <Clock size={14} />
                        <span>SELECT TIME</span>
                    </div>
                    <div className="time-slots-scroll">
                        {timeSlots.map(slot => (
                            <button
                                key={slot.value}
                                type="button"
                                onClick={() => handleTimeClick(slot.value)}
                                className={`time-slot ${selectedTime === slot.value ? 'time-slot-selected' : ''}`}
                            >
                                {slot.display}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarPicker;
