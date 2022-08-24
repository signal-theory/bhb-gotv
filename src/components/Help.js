import React from "react"
import { Fade } from "react-awesome-reveal"
import { helpData } from "../data/data-help"

const Help = () => {
  return (
    <div className="section help" id="help">
      <div className="container help-container">
        <Fade>
          <h1>{helpData.heading}</h1>
        </Fade>
        <p>{helpData.paragraph}</p>
      </div>
    </div>
  )
}
export default Help