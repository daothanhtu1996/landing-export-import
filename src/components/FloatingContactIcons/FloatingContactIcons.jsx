import React, { useState } from "react";
import { FaFacebookMessenger, FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import "./FloatingContactIcons.scss";

const FloatingContactIcons = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`floating-icons ${open ? "open" : ""}`}>
      <button className="main-button" onClick={() => setOpen(!open)}>
        💬
      </button>
      <div className="icon-list">
        {/* <a
          href="https://m.me/daothanhtu1996"
          target="_blank"
          rel="noopener noreferrer"
          className="icon facebook"
        >
          <FaFacebookF />
        </a> */}
        <a
          href="https://zalo.me/0937083564"
          target="_blank"
          rel="noopener noreferrer"
          className="icon zalo"
        >
          <SiZalo />
        </a>
      </div>
    </div>
  );
};

export default FloatingContactIcons;
