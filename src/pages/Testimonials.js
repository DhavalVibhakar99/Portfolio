import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide components
import { Pagination, Autoplay } from "swiper/modules"; // Import modules from 'swiper/modules'
 // Import Swiper base styles
import "swiper/css/pagination"; // Import Pagination styles
import "swiper/css/autoplay"; // If you're using autoplay
import "swiper/css/pagination"; 
import "./../styles/Testimonials.css"; // Import your custom styles

const testimonials = [
  {
    name: "Jonathan Benezry",
    feedback:
      "Dhaval is a reliable and versatile team member who reported to me at Dual Fuel Company. I've seen him tackle a wide range of challenges in broad disciplines like design, data visualizations and code refactoring as well in niche domains such as IoT system configuration and AI-enhanced equipment load forecasting. Dhaval is always eager to learn and expand his knowledge and is a very thoughtful teammate, making him a valuable asset. He can seamlessly wear multiple hats and contribute effectively across various areas.",
  },
  {
    name: "Bhavya Rao",
    feedback:
      "I had the pleasure of working with Dhaval while designing the UI/UX interface for Dual Fuel, and he made the project seamless. He was an excellent bridge between me, the developers, and senior team members. His management skills made each step of the process smooth and productive. I’d highly recommend working with him.",
  },
  {
    name: "Piyush Vibhakar",
    feedback:
      "At one on the Critical Project of Insight where project delivery abd execution was under pressure, Dhaval contributed and showed a positive and constructive attitude. During the covid lockdown he was on field with special permission was active on field. The Learning ability and interest stand him apart from the rest of the crowd. I recommend him for his positive attitude and smart work ethic.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      {/* Title */}
      <div className="testimonials-header">
        <h2 className="testimonials-title">Testimonials</h2>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="swiper-container"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-item">
              <div className="testimonial-content">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
