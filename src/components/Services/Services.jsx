import React, { useState } from "react";
import "./Services.scss";
import useTranslate from "../../hooks/useTranslate";
import { FaArrowRight } from "react-icons/fa";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import service5 from "../../assets/service5.png";
import service6 from "../../assets/service6.png";
import ServiceModal from "../Services/ServiceModal";

const services = [
  {
    id: 1,
    title: "Agriculture Chemicals",
    image: service1,

    description:
      "High-quality chemicals used in agriculture to ensure productivity and sustainability.",
  },
  {
    id: 2,
    title: "Agriculture Machinery",
    image: service2,
    description:
      "Modern machinery designed to improve agricultural efficiency and reduce labor.",
  },
  {
    id: 3,
    title: "Industrial Chemicals",
    image: service3,
    description:
      "Essential chemicals for manufacturing, production, and industrial applications.",
  },
  {
    id: 4,
    title: "Pigments",
    image: service4,
    description:
      "Wide range of pigments used in plastics, coatings, inks, and cosmetics.",
  },
  {
    id: 5,
    title: "Lubricant",
    image: service5,
    description:
      "Premium lubricants formulated to extend machinery lifespan and reduce friction.",
  },
  {
    id: 6,
    title: "Detergents",
    image: service6,
    description:
      "Industrial and household detergents ensuring high cleaning performance.",
  },
];

const Services = () => {
  const t = useTranslate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        <p className="subtitle">{t("services.subtitle")}</p>
        <h2 className="title">{t("services.title")}</h2>

        <div className="services-grid">
          {services.map((s) => {
            const isActive = selectedService?.id === s.id;
            return (
              <div
                className={`service-card ${s.highlight ? "highlight" : ""} ${
                  isActive ? "active" : ""
                }`}
                key={s.id}
              >
                <div className="image">
                  <img
                    src={s.image}
                    alt={s.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <div className="content">
                  <h3>{t(`services.items.${s.id}.title`)}</h3>
                  <p>{t("services.description")}</p>
                  <button className="read-more" onClick={() => handleOpen(s)}>
                    {t("services.cta")} <FaArrowRight />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ServiceModal
        open={modalOpen}
        onClose={handleClose}
        data={selectedService}
      />
    </section>
  );
};

export default Services;
