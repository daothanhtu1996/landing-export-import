import React, { useState, useContext } from "react";
import "./Header.scss";
import logoDen from "../../assets/den.png";
import useTranslate from "../../hooks/useTranslate";
import { LanguageContext } from "../../providers/LanguageProvider";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { language, switchLanguage } = useContext(LanguageContext);
  const t = useTranslate();

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "products", label: t("nav.products") },
    { id: "career", label: t("nav.career") },
    { id: "contact", label: t("nav.contact") },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLanguage = () => {
    const nextLang = language === "en" ? "vi" : "en";
    switchLanguage(nextLang);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logoDen} alt="MATRION Logo" className="logo-img" />
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "active" : ""}
              onClick={() => {
                setActive(item.id);
                setMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="actions">
          <button
            className={`lang-toggle ${language === "en" ? "active" : ""}`}
            onClick={toggleLanguage}
          >
            {language.toUpperCase()}
          </button>

          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
