import React from "react";
import "./Features.scss";
import useTranslate from "../../hooks/useTranslate";
import featureImg from "../../assets/feature-image.jpg";
import { FaGlobe, FaClock, FaPhoneAlt } from "react-icons/fa";

const Features = () => {
  const t = useTranslate();

  return (
    <section className="features-section " id="products">
      <div className="features-wrapper">
        <div className="features-image">
          <img src={featureImg} alt="Feature" />
        </div>
        <div className="features-content">
          <p className="subtitle">{t("features.subtitle")}</p>
          <h2 className="title">{t("features.title")}</h2>
          <div className="features-grid">
            <div className="feature-box">
              <FaGlobe className="icon" />
              <span>{t("features.items.1")}</span>
            </div>
            <div className="feature-box">
              <FaClock className="icon" />
              <span>{t("features.items.2")}</span>
            </div>
            <div className="feature-box">
              <FaPhoneAlt className="icon" />
              <span>{t("features.items.3")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
