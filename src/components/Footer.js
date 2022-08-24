import React from "react"
import { footerData } from "../data/data-footer"

const Footer = (props) => {
  return (
    <div className="footer primary-blue" id="contact">
      <div className="container">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={footerData.logo} alt="Babes Helpin' Babes at Signal Theory" />
          </div>
          <div className="copyright">© 2022 Babes Helping Babes</div>
          <div className="social-icons">
            {footerData.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt={socialLink.title}></img>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-sticker"></div>
    </div>
  )
}

export default Footer
