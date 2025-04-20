import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useTranslate from "../../hooks/useTranslate";
import "./Testimonials.scss";
import avatar1 from "../../assets/avatar.jpg";
import avatar2 from "../../assets/avatar.jpg";
import avatar3 from "../../assets/avatar.jpg";
import avatar4 from "../../assets/avatar.jpg";
import avatar5 from "../../assets/avatar.jpg";
import avatar6 from "../../assets/avatar.jpg";

const testimonials = [
  {
    id: 1,
    name: "Leslie Alexander",
    company: "FERRARI",
    image: avatar1,
    messageKey: "testimonials.items.0.message",
  },
  {
    id: 2,
    name: "Annette Black",
    company: "LOUIS VUITTON",
    image: avatar2,
    messageKey: "testimonials.items.1.message",
  },
  {
    id: 3,
    name: "Ralph Edwards",
    company: "MITSUBISHI",
    image: avatar3,
    messageKey: "testimonials.items.2.message",
  },
  {
    id: 4,
    name: "Esther Howard",
    company: "TESLA",
    image: avatar4,
    messageKey: "testimonials.items.3.message",
  },
  {
    id: 5,
    name: "Jenny Wilson",
    company: "AMAZON",
    image: avatar5,
    messageKey: "testimonials.items.4.message",
  },
  {
    id: 6,
    name: "Devon Lane",
    company: "NIKE",
    image: avatar6,
    messageKey: "testimonials.items.5.message",
  },
];

const Testimonials = () => {
  const t = useTranslate();

  return (
    <section className="testimonials-section" id="testimonials">
      <p className="subtitle">{t("testimonials.subtitle")}</p>
      <h2 className="title">{t("testimonials.title")}</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonial-card">
              <div className="quote-mark">“</div>
              <div className="user">
                <img src={item.image} alt={item.name} className="avatar" />
                <div className="user-info">
                  <h4>{item.name}</h4>
                  <p className="company">{item.company}</p>
                </div>
              </div>
              <p className="message">{t(item.messageKey)}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
