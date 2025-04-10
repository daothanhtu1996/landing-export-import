import React from "react";
import "./Services.scss";

const services = [
  {
    title: "Vận chuyển quốc tế",
    description: "Dịch vụ vận tải hàng hóa bằng đường biển, hàng không và đường bộ tới hơn 100 quốc gia."
  },
  {
    title: "Khai báo hải quan",
    description: "Xử lý nhanh chóng và chính xác các thủ tục thông quan, đảm bảo hàng hóa đến đúng lịch trình."
  },
  {
    title: "Kho bãi & lưu trữ",
    description: "Hệ thống kho hiện đại, an toàn, đáp ứng đầy đủ nhu cầu lưu trữ và phân phối."
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Dịch Vụ Của Chúng Tôi</h2>
        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
