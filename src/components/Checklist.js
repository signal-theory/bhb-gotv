import React from "react"
import Fade from "react-reveal/Fade"
import { checklistData } from "../data-checklist"

const Checklist = () => {
  return (
    <>
      <div className="section checklist secondary-blue">
        <div className="checklist-wrapper">
          <Fade>
            <h1 className="white-text">{checklistData.heading}</h1>
          </Fade>
          <p className="white-text">{checklistData.paragraph}</p>
        </div>
      </div>
      <form>
        <div className="section white">
          <div className="checklist-columns">
            <div className="column">
              <h2>Before Election Day</h2>
              <h3>Election day is November 8, 2022.</h3>
              <div className="checkbox">
                <input type="checkbox" id="todo" name="todo" value="todo" />
                <label for="todo" data-content="Get out of bed">Get out of bed</label>
              </div>
            </div>
            <div className="column">
              <h2>Day-of Checklist</h2>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Checklist
