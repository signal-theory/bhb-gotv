import React from 'react'
import Fade from "react-reveal/Fade"
import { kansasData } from "../../data-kansas"

const Kansas = () => {
  return (
    <>
      <div className="section registration-links">
        <Fade>
          <h1>{kansasData.heading}</h1>
        </Fade>
        <div className="links-wrapper">
          {kansasData.links.map((link, index) => (
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

export default Kansas