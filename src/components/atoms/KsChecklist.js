import React, { useState } from "react"
// import { Fade } from "react-awesome-reveal";
import { kansasData } from "../../data-kansas"

const KsChecklist = () => {

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
  const [permission11, setPermission11] = useState(false);
  const [permission12, setPermission12] = useState(false);
  const [permission13, setPermission13] = useState(false);
  const [permission14, setPermission14] = useState(false);

  return (
    <>
      <div className="section checklist secondary-blue">
        <div className="checklist-wrapper">
          {/* <Fade> */}
          <h1 className="white-text">{kansasData.headingChecklist}</h1>
          {/* </Fade> */}
          <p className="white-text">{kansasData.paragraphChecklist}</p>
        </div>
      </div>
      <form>
        <div className="section white">
          <div className="checklist-columns">
            <div className="column">
              <h2>Before Election Day</h2>
              <h3 className="red-text">
                Election day is November 8, 2022.</h3>
              <div className="checkbox">
                <input
                  type="checkbox"
                  checked={permission0}
                  onChange={e => setPermission0(e.target.checked)}
                />
                <label className={permission0 ? "checked-item" : null}>
                  Check voter registration <a href="/" target="_blank" rel="noopener noreferrer">here.</a></label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  checked={permission1}
                  onChange={e => setPermission1(e.target.checked)}
                />
                <label className={`red-text ${permission1 ? "checked-item" : null}`}>
                  Register to vote <a href="/" target="_blank" rel="noopener noreferrer">here.</a></label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  checked={permission2}
                  onChange={e => setPermission2(e.target.checked)}
                />
                <label className={permission2 ? "checked-item" : null}>
                  I have researched the <a href="/" target="_blank" rel="noopener noreferrer">rules and regulations</a> around voting in Kansas.</label>
              </div>

              <h4>I plan on voting via:</h4>
              <div className="checkbox">
                <input
                  type="radio"
                  name="voteplan"
                  checked={permission3}
                  onChange={e => setPermission3(e.target.checked)}
                />
                <label className={permission3 ? "checked-item" : null}>
                  In-person on election day <strong>or</strong></label>
              </div>
              <div className="checkbox">
                <input
                  type="radio"
                  name="voteplan"
                  checked={permission4}
                  onChange={e => setPermission4(e.target.checked)}
                />
                <label className={permission4 ? "checked-item" : null}>
                  By mail - <a href="/" target="_blank" rel="noopener noreferrer">Request your absentee ballot</a> <strong>or</strong></label>
              </div>
              <div className="checkbox">
                <input
                  type="radio"
                  name="voteplan"
                  checked={permission4}
                  onChange={e => setPermission4(e.target.checked)}
                />
                <label className={permission4 ? "checked-item" : null}>
                  Early Voting - <a href="/" target="_blank" rel="noopener noreferrer">Find early voting locations.</a></label>
              </div>

              <h2>My Polling Place</h2>
              <div className="checkbox">
                <input
                  type="checkbox"
                  checked={permission5}
                  onChange={e => setPermission5(e.target.checked)}
                />
                <label className={permission5 ? "checked-item" : null}>
                  Check the location of your polling place <a href="/" target="_blank" rel="noopener noreferrer">here.</a><br />
                  <span className="red-text small">Polls are open from 7 a.m. to 7 p.m., but counties have discretion to open earlier or close later. If you're in line when your polling location closes, you are still allowed to vote. Stay in line!</span>
                </label>
              </div>
              <div className="inputtext">
                <label>My polling place is located at:</label>
                <textarea placeholder="Enter address"></textarea>
              </div>
            </div>
            <div className="column">
              <h2>Day-of Checklist</h2>
              <h3 className="red-text">kansas requires Voter ID. <br />These are all acceptable forms of identification:</h3>
              <div className="checkbox">
                <input
                  type="radio"
                  name="dayof"
                  checked={permission6}
                  onChange={e => setPermission6(e.target.checked)}
                />
                <label className={permission6 ? "checked-item" : null}>
                  Driver's license <strong>or</strong>
                </label>
              </div>
              <div className="checkbox">
                <input
                  type="radio"
                  name="dayof"
                  checked={permission7}
                  onChange={e => setPermission7(e.target.checked)}
                />
                <label className={permission7 ? "checked-item" : null}>
                  Passport <strong>or</strong>
                </label>
              </div>
              <div className="checkbox">
                <input
                  type="radio"
                  name="dayof"
                  checked={permission8}
                  onChange={e => setPermission8(e.target.checked)}
                />
                <label className={permission8 ? "checked-item" : null}>
                  Military ID <strong>or</strong>
                </label>
              </div>
              <div className="checkbox">
                <input
                  type="radio"
                  name="dayof"
                  checked={permission9}
                  onChange={e => setPermission9(e.target.checked)}
                />
                <label className={permission9 ? "checked-item" : null}>
                  Identification issued by a local election authority <strong>or</strong>
                </label>
              </div>
              <div className="checkbox">
                <input
                  type="radio"
                  name="dayof"
                  checked={permission10}
                  onChange={e => setPermission10(e.target.checked)}
                />
                <label className={permission10 ? "checked-item" : null}>
                  ID card issued by a Native American tribe <strong>or</strong>
                </label>
              </div>
              <div className="checkbox">
                <input
                  type="radio"
                  name="dayof"
                  checked={permission11}
                  onChange={e => setPermission11(e.target.checked)}
                />
                <label className={permission11 ? "checked-item" : null}>
                  Employee badge or ID issued by a government office <strong>or</strong>
                </label>
              </div>
              <div className="checkbox">
                <input
                  type="radio"
                  name="dayof"
                  checked={permission12}
                  onChange={e => setPermission12(e.target.checked)}
                />
                <label className={permission12 ? "checked-item" : null}>
                  Identification from an accredited postsecondary education institution in Kansas <strong>or</strong>
                </label>
              </div>
              <div className="checkbox">
                <input
                  type="radio"
                  name="dayof"
                  checked={permission13}
                  onChange={e => setPermission13(e.target.checked)}
                />
                <label className={permission13 ? "checked-item" : null}>
                  Public assistance ID card issued by a government office.
                </label>
              </div>
              <h2>Spread the Word</h2>
              <div className="checkbox">
                <input
                  type="checkbox"
                  checked={permission14}
                  onChange={e => setPermission14(e.target.checked)}
                />
                <label className={permission14 ? "checked-item" : null}>
                  Reach out to three friends or family members to help create a voting and/or carpool plan.
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default KsChecklist
