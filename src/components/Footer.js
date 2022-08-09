import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Footer = () => {
  return (
    <div className="section primary-blue" id="contact">
      <div className="container">
        <div className="footer-container">
          <div className="footer-links">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAQs
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resources
            </a>
          </div>
          <div className="footer-sticker">sticker</div>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
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
    </div>
  )
}

export default Footer
