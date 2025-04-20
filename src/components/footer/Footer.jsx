import React from "react";
import "./Footer.scss";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";
import useTranslate from "../../hooks/useTranslate";

const Footer = () => {
  const t = useTranslate();

  return (
    <footer className="footer">
      <div className="container">
        {/* Column 1: Address */}
        <div>
          <h4>{t("footer.address.title")}</h4>
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>{t("footer.address.line1")}</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt />
            <span>{t("footer.address.phone")}</span>
          </div>
          <div className="contact-item">
            <FaEnvelope />
            <span>{t("footer.address.email")}</span>
          </div>
        </div>

        {/* Column 2: Products */}
        <div>
          <h4>{t("footer.products.title")}</h4>
          <ul>
            <li>
              <a href="#">{t("footer.products.chemicals")}</a>
            </li>
            <li>
              <a href="#">{t("footer.products.industrial")}</a>
            </li>
            <li>
              <a href="#">{t("footer.products.pigments")}</a>
            </li>
            <li>
              <a href="#">{t("footer.products.lubricant")}</a>
            </li>
            <li>
              <a href="#">{t("footer.products.detergent")}</a>
            </li>
            <li>
              <a href="#">{t("footer.products.tyres")}</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h4>{t("footer.links.title")}</h4>
          <ul>
            <li>
              <a href="#">{t("footer.links.home")}</a>
            </li>
            <li>
              <a href="#">{t("footer.links.about")}</a>
            </li>
            <li>
              <a href="#">{t("footer.links.careers")}</a>
            </li>
            <li>
              <a href="#">{t("footer.links.contact")}</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="newsletter">
          <h4>{t("footer.newsletter.title")}</h4>
          <p>{t("footer.newsletter.desc")}</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder={t("footer.newsletter.placeholder")}
            />
            <button type="submit">
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024 {t("footer.copyright")}</p>
        <div className="social-icons">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
