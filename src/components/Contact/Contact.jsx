import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import useTranslate from "../../hooks/useTranslate";
import "./Contact.scss";

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
    <section
      className="contact"
      id="contact"
      style={{
        backgroundColor: "var(--section-bg)",
        color: "var(--text-color)",
      }}
    >
      <div className="container">
        <h2>{t("contactUs")}</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder={t("name")}
            required
            style={{
              background: "var(--bg-color)",
              color: "var(--text-color)",
              borderColor: "#ccc",
            }}
          />
          <input
            type="email"
            name="user_email"
            placeholder={t("email")}
            required
            style={{
              background: "var(--bg-color)",
              color: "var(--text-color)",
              borderColor: "#ccc",
            }}
          />
          <textarea
            name="message"
            placeholder={t("message")}
            required
            style={{
              background: "var(--bg-color)",
              color: "var(--text-color)",
              borderColor: "#ccc",
            }}
          ></textarea>
          <button
            type="submit"
            disabled={isLoading}
            style={{ backgroundColor: "var(--primary-color)", color: "white" }}
          >
            {isLoading ? t("sending") : t("send")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
