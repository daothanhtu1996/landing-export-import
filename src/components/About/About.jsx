import React from "react";
import "./About.scss";
import useTranslate from "../../hooks/useTranslate";
import aboutImage from "../../assets/xe.jpeg";
import blob from "../../assets/blob.svg";

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
          <div className="fact-box">
            <p className="facts-subtitle">{t("about.factsSubtitle1")}</p>
            <h3 className="facts-title">{t("about.factsTitle1")}</h3>
            <p className="facts-description">{t("about.factsDescription1")}</p>
          </div>
          <div className="fact-box">
            <h3 className="facts-title">{t("about.factsTitle2")}</h3>
            <p className="facts-description">{t("about.factsDescription2")}</p>
          </div>
          <div className="fact-box">
            <h3 className="facts-title">{t("about.factsTitle3")}</h3>
            <p className="facts-description">{t("about.factsDescription3")}</p>
          </div>
          <div className="fact-box">
            <h3 className="facts-title">{t("about.factsTitle4")}</h3>
            <p className="facts-description">{t("about.factsDescription4")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
