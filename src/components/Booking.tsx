import React, { useEffect } from 'react';
import { CALENDLY } from '../constants/config';
import '../assets/styles/Booking.scss';

function Booking() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="booking">
      <div className="items-container">
        <div className="booking_wrapper">
          <h1>Schedule a Meeting</h1>
          <p>
            Ready to discuss your project? Book a convenient time slot to talk about work opportunities,
            project collaborations, or any questions you might have. I'm excited to hear about your ideas!
          </p>
          <div className="calendly-container">
            <div
              className="calendly-inline-widget"
              data-url={CALENDLY.url}
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;