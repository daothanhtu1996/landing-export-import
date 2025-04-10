import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import useTranslate from "../../hooks/useTranslate";
import "./Header.scss";
import denLogo from "../../assets/den.png";
import trangLogo from "../../assets/trang.png";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { toggleLanguage } = useLanguage();
  const t = useTranslate();

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          src={darkMode ? trangLogo : denLogo}
          alt="logo"
          className="logo-img"
        />
      </div>

      <div className="menu-row">
        <nav className="nav">
          <a href="#home">{t("home")}</a>
          <a href="#about">{t("about")}</a>
          <a href="#services">{t("services")}</a>
          <a href="#fleet">{t("fleet")}</a>
          <a href="#contact">{t("contact")}</a>
        </nav>

        <div className="actions">
          <button className="lang-toggle" onClick={toggleLanguage}>
            🌐
          </button>
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
