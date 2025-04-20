import React from "react";
import "./About.scss";
import useTranslate from "../../hooks/useTranslate";
import aboutImage from "../../assets/truck-bg.png";
import blob from "../../assets/blob.svg";
import { FaSmile, FaBox, FaPen } from "react-icons/fa";

const About = () => {
  const t = useTranslate();

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-top container">
          <div className="about-image">
            <div className="blob-wrapper">
              <img src={blob} alt="blob" className="blob-bg" />
              <img src={aboutImage} alt="About Us" className="about-photo" />
            </div>
          </div>
          <div className="about-content">
            <p className="subtitle">{t("about.subtitle")}</p>
            <h2 className="title">{t("about.title")}</h2>
            <p className="description">{t("about.description")}</p>
            <a href="#" className="read-more">
              {t("about.cta")} <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="about-bottom container">
          <div className="facts-left">
            <p className="facts-subtitle">{t("about.factsSubtitle")}</p>
            <h3 className="facts-title">{t("about.factsTitle")}</h3>
            <p className="facts-description">{t("about.factsDescription")}</p>
          </div>
          <div className="facts-right">
            <div className="fact-box">
              <FaSmile className="icon" />
              <p>
                <span>100</span> {t("about.clients")}
              </p>
            </div>
            <div className="fact-box">
              <FaBox className="icon" />
              <p>
                <span>10</span> {t("about.shipments")}
              </p>
            </div>
            <div className="fact-box">
              <FaPen className="icon" />
              <p>
                <span>4</span> {t("about.reviews")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
