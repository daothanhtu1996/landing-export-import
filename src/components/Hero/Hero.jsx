import React from "react";
import useTranslate from "../../hooks/useTranslate";
import "./Hero.scss";
//import truckBg from "../../assets/truck-bg.png";

const Hero = () => {
  const t = useTranslate();

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>{t("heroTitle")}</h1>
          <p>{t("heroSubtitle")}</p>
          <a href="#contact" className="cta-button">
            {t("contact")}
          </a>
        </div>
        {/* Không có nội dung bên phải, hình đã nằm dưới dạng background */}
      </div>
    </section>
  );
};

export default Hero;
