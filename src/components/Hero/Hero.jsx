import React from "react";
import "./Hero.scss";
import useTranslate from "../../hooks/useTranslate";
import heroImage from "../../assets/hero-illustration.png"; // Cập nhật nếu có SVG khác

const Hero = () => {
  const t = useTranslate();

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-left">
          <p className="hero-subtitle">{t("hero.subtitle")}</p>
          <h1 className="hero-title">{t("hero.title")}</h1>
          <p className="hero-highlight">{t("hero.highlight")}</p>
          <a href="#about" className="hero-button">
            {t("hero.cta")} <span className="arrow">→</span>
          </a>
        </div>
        <div className="hero-right">
          <img src={heroImage} alt="Hero Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
