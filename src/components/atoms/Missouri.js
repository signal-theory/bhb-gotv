import React from 'react'
import Fade from "react-reveal/Fade"
import { missouriData } from "../../data-missouri"

const Missouri = () => {
  return (
    <>
      <div className="section registration-links">
        <Fade>
          <h1>{missouriData.heading}</h1>
        </Fade>
        <div className="links-wrapper">
          {missouriData.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.image} alt={link.title} />
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Missouri