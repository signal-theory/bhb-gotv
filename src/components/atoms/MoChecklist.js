import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import { missouriData } from "../../data-missouri"

const MoChecklist = () => {

  const [permission0, setPermission0] = useState(false);
  const [permission1, setPermission1] = useState(false);
  const [permission2, setPermission2] = useState(false);
  const [permission3, setPermission3] = useState(false);
  const [permission4, setPermission4] = useState(false);
  const [permission5, setPermission5] = useState(false);
  const [permission6, setPermission6] = useState(false);
  const [permission7, setPermission7] = useState(false);
  const [permission8, setPermission8] = useState(false);
  const [permission9, setPermission9] = useState(false);
  const [permission10, setPermission10] = useState(false);

  return (
    <>
      <div className="section checklist secondary-blue">
        <div className="checklist-wrapper">
          <Fade>
            <h1 className="white-text">{missouriData.headingChecklist}</h1>
          </Fade>
          <p className="white-text">{missouriData.paragraphChecklist}</p>
        </div>
      </div>
      <form>
        <div className="section white">
          <div className="checklist-columns">
            <div className="column">
              <h2>Before Election Day</h2>
              <h3 className="red-text">Election day is November 8, 2022.</h3>
              <div className="checkbox">
                <input
                  type="checkbox"
                  checked={permission0}
                  onChange={e => setPermission0(e.target.checked)}
                />
                <label className={permission0 ? "checked-item" : null}>Check voter registration <a href="/" target="_blank" rel="noopener noreferrer">here.</a></label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  checked={permission1}
                  onChange={e => setPermission1(e.target.checked)}
                />
                <label className={`red-text ${permission1 ? "checked-item" : null}`}>Register to vote <a href="/" target="_blank" rel="noopener noreferrer">here.</a></label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  checked={permission1}
                  onChange={e => setPermission1(e.target.checked)}
                />
                <label className={permission0 ? "checked-item" : null}>I have researched the <a href="/" target="_blank" rel="noopener noreferrer">rules and regulations</a> around voting in Missouri.</label>
              </div>

              <h4>I plan on voting via:</h4>


              <h2>My Polling Place</h2>


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

export default MoChecklist
