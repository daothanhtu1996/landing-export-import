import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import useTranslate from "../../hooks/useTranslate";
import "./Contact.scss";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslate();

  const sendEmail = (e) => {
    e.preventDefault();
    const formEl = form.current;
    const name = formEl.user_name.value.trim();
    const email = formEl.user_email.value.trim();
    const message = formEl.message.value.trim();

    if (!name || !email || !message) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_gfbyx2r",
        "template_zd4mu9h",
        form.current,
        "zfleLGnhslx4w9Rg"
      )
      .then(() => {
        alert("Gửi thành công!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Gửi thất bại!");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">
        <div className="contact-info">
          <p className="subtitle">{t("contact.subtitle")}</p>
          <h2 className="title">{t("contact.title")}</h2>
          <p className="desc">{t("contact.description")}</p>

          <div className="hotline">
            <div className="icon">
              <FaPhoneAlt />
            </div>
            <div className="text">
              <p className="call-label">{t("contact.callLabel")}</p>
              <p className="phone">+1 (229) 555-0109</p>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="row">
            <input
              type="text"
              name="user_name"
              placeholder={t("contact.name")}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder={t("contact.email")}
              required
            />
          </div>
          <div className="row">
            <input type="text" name="phone" placeholder={t("contact.phone")} />
            <select name="freight">
              <option value="">{t("contact.freightOption")}</option>
              <option value="air">{t("freight.air")}</option>
              <option value="sea">{t("freight.sea")}</option>
              <option value="road">{t("freight.road")}</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder={t("contact.message")}
            required
          ></textarea>
          <button type="submit" disabled={isLoading}>
            {isLoading ? t("contact.sending") : `${t("contact.send")} →`}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
