import React from "react"
import { Fade } from "react-awesome-reveal";
import { kansasData } from "../../data/data-kansas"

const KsChecklist = () => {

  return (
    <>
      <div className="section checklist secondary-blue">
        <div className="checklist-wrapper">
          <Fade>
            <h1 className="white-text">{kansasData.headingChecklist}</h1>
          </Fade>
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
              <label className={`checkbox`} for="check_registration">
                <input
                  type="checkbox"
                  value="check_registration"
                  id="check_registration"
                />
                <p>Check voter registration <a href="https://myvoteinfo.voteks.org/voterview/" target="_blank" rel="noopener noreferrer">here.</a></p>
              </label>
              <label className={`red-text checkbox`} for="register_here">
                <input
                  type="checkbox"
                  value="register_here"
                  id="register_here"
                />
                <p>Register to vote <a href="https://www.kdor.ks.gov/Apps/VoterReg" target="_blank" rel="noopener noreferrer">here.</a></p>
              </label>
              <label className={`checkbox`} for="research_rules">
                <input
                  type="checkbox"
                  value="research_rules"
                  id="research_rules"
                />
                <p>I have researched the <a href="https://sos.ks.gov/elections/voter-information.html" target="_blank" rel="noopener noreferrer">rules and regulations</a> around voting in Kansas.</p>
              </label>


              <h4>I plan on voting via:</h4>
              <label className={`checkbox`} for="vote_inperson">
                <input
                  type="radio"
                  name="voteplan"
                  value="vote_inperson"
                  id="vote_inperson"
                />
                <p>In-person on election day <em>or</em></p>
              </label>
              <label className={`checkbox`} for="vote_bymail">
                <input
                  type="radio"
                  name="voteplan"
                  value="vote_bymail"
                  id="vote_bymail"
                />
                <p>By mail - Request your advanced ballot <a href="https://www.sos.ks.gov/forms//elections/AV1.pdf" target="_blank" rel="noopener noreferrer">English</a>/<a href="https://www.sos.ks.gov/forms//elections/Spanish/AV1%20(Spanish).pdf" target="_blank" rel="noopener noreferrer">Español</a> <em>or</em></p>
              </label>

              <label className={`checkbox`} for="vote_early">
                <input
                  type="radio"
                  name="voteplan"
                  value="vote_early"
                  id="vote_early"
                />
                <p>Early Voting - <a href="https://www.usvotefoundation.org/vote/eoddomestic.htm" target="_blank" rel="noopener noreferrer">Find early voting locations.</a></p>
              </label>


              <h2>My Polling Place</h2>
              <label className={`checkbox`} for="check_place">
                <input
                  type="checkbox"
                  value="check_place"
                  id="check_place"
                />
                <p>Check the location of your polling place <a href="https://myvoteinfo.voteks.org/VoterView" target="_blank" rel="noopener noreferrer">here.</a><br />
                  <span className="red-text small">Polls are open from 7 a.m. to 7 p.m., but counties have discretion to open earlier or close later. If you're in line when your polling location closes, you are still allowed to vote. Stay in line!</span></p>
              </label>
              <label className="inputtext">My polling place is located at:
                <textarea></textarea>
              </label>
            </div>
            <div className="column">
              <h2>Day-of Checklist</h2>
              <h3 className="red-text">Kansas requires Voter ID. <br />These are all acceptable forms of identification:</h3>
              <label className={`checkbox`} for="drivers_id">
                <input
                  type="radio"
                  name="dayof"
                  value="drivers_id"
                  id="drivers_id"
                />
                <p>Driver's license <em>or</em></p>
              </label>
              <label className={`checkbox`} for="passport_id">
                <input
                  type="radio"
                  name="dayof"
                  value="passport_id"
                  id="passport_id"
                />
                <p>Passport <em>or</em></p>
              </label>
              <label className={`checkbox`} for="military_id">
                <input
                  type="radio"
                  name="dayof"
                  value="military_id"
                  id="military_id"
                />
                <p>Military ID <em>or</em></p>
              </label>
              <label className={`checkbox`} for="election_auth_id">
                <input
                  type="radio"
                  name="dayof"
                  value="election_auth_id"
                  id="election_auth_id"
                />
                <p>Identification issued by a local election authority <em>or</em></p>
              </label>
              <label className={`checkbox`} for="native_tribe_id">
                <input
                  type="radio"
                  name="dayof"
                  value="native_tribe_id"
                  id="native_tribe_id"
                />
                <p>ID card issued by a Native American tribe <em>or</em></p>
              </label>
              <label className={`checkbox`} for="employee_id">
                <input
                  type="radio"
                  name="dayof"
                  value="employee_id"
                  id="employee_id"
                />
                <p>Employee badge or ID issued by a government office <em>or</em></p>
              </label>
              <label className={`checkbox`} for="education_id">
                <input
                  type="radio"
                  name="dayof"
                  value="education_id"
                  id="education_id"
                />
                <p>Identification from an accredited postsecondary education institution in Kansas <em>or</em></p>
              </label>
              <label className={`checkbox`} for="gov_id">
                <input
                  type="radio"
                  name="dayof"
                  value="gov_id"
                  id="gov_id"
                />
                <p>Public assistance ID card issued by a government office.</p>
              </label>
              <h2>Spread the Word</h2>
              <label className={`checkbox`} for="reach_out">
                <input
                  type="checkbox"
                  value="reach_out"
                  id="reach_out"
                />
                <p>Reach out to three friends or family members to help create a voting and/or carpool plan.</p>
              </label>
            </div>
          </div>
          <div className="checklist-buttons section">
            <button className="download-btn">DOWNLOAD CHECKLIST</button>
            <button className="share-btn">SHARE</button>
          </div>
        </div >
      </form >
    </>
  )
}

export default KsChecklist
