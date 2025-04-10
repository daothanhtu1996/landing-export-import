import React from "react";
import "./Testimonials.scss";

const testimonials = [
  {
    name: "Nguyễn Văn A",
    role: "Giám đốc công ty ABC",
    feedback: "Dịch vụ vận chuyển của họ rất chuyên nghiệp, đúng tiến độ và luôn hỗ trợ tận tình.",
  },
  {
    name: "Trần Thị B",
    role: "CEO Logistics Co.",
    feedback: "Chúng tôi đã hợp tác hơn 3 năm và rất hài lòng với chất lượng dịch vụ và sự minh bạch.",
  },
  {
    name: "Lê Hoàng C",
    role: "Quản lý vận hành - XNK Group",
    feedback: "Giải pháp logistics toàn diện, tiết kiệm được nhiều thời gian và chi phí cho doanh nghiệp chúng tôi.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>Khách Hàng Nói Gì?</h2>
        <div className="testimonial-list">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="feedback">“{item.feedback}”</p>
              <p className="name">{item.name}</p>
              <p className="role">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
