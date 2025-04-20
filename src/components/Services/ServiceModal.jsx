import React from "react";
import "./ServiceModal.scss";

const ServiceModal = ({ open, onClose, data }) => {
  if (!open || !data) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <img src={data.image} alt={data.title} className="modal-image" />
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default ServiceModal;
