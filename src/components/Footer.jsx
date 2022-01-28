import React from "react";

// config
import config from "@assets/config";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-info">
        <div className="container-section">
          Contact Us:&nbsp;
          <a className="footer-mail-link" href={config.mailURL}>
            {" "}
            {config.contactEmail}{" "}
          </a>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <div className="footer-menu">
            <div className="footer-copyright">{config.copyright}</div>
            <a
              className="footer-link"
              href={config.termsURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Use
            </a>
            <a
              className="footer-link"
              href={config.privacyURL}
              target="_blank"
              rel="noreferrer"
            >
              Privacy &amp; Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
