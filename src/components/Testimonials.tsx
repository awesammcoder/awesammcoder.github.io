import React from "react";
import { TESTIMONIALS } from '../constants/config';
import '../assets/styles/Testimonials.scss';

function Testimonials() {
  return (
    <div className="testimonials-container" id="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonials-list">
        {TESTIMONIALS.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="testimonial-content">
              <div className="video-wrapper">
                <video
                  controls
                  poster={testimonial.thumbnail}
                  preload="metadata"
                >
                  <source src={testimonial.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="testimonial-text">
                <div className="quote-mark">"</div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;