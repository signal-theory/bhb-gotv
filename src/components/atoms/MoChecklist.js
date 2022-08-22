import React from "react"
import { Fade } from "react-awesome-reveal";
import { missouriData } from "../../data-missouri"

const MoChecklist = () => {

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
              <h3 className="red-text">
                Election day is November 8, 2022.</h3>
              <label className={`checkbox`} for="check_registration">
                <input
                  type="checkbox"
                  value="check_registration"
                  id="check_registration"
                />
                <p>Check voter registration <a href="https://s1.sos.mo.gov/elections/voterlookup" target="_blank" rel="noopener noreferrer">here.</a></p>
              </label>
              <label className={`red-text checkbox`} for="register_here">
                <input
                  type="checkbox"
                  value="register_here"
                  id="register_here"
                />
                <p>Register to vote <a href="https://s1.sos.mo.gov/elections/voterregistration/" target="_blank" rel="noopener noreferrer">here.</a></p>
              </label>
              <label className={`checkbox`} for="research_rules">
                <input
                  type="checkbox"
                  value="research_rules"
                  id="research_rules"
                />
                <p>I have researched the <a href="https://www.sos.mo.gov/CMSImages/ElectionGoVoteMissouri//2021ElectionLaws_10.22.pdf" target="_blank" rel="noopener noreferrer">rules and regulations</a> around voting in Missouri.</p>
              </label>


              <h4>I plan on voting via:</h4>
              <label className={`checkbox`} for="vote_inperson">
                <input
                  type="radio"
                  name="voteplan"
                  value="vote_inperson"
                  id="vote_inperson"
                />
                <p>In-person on election day <strong>or</strong></p>
              </label>
              <label className={`checkbox`} for="vote_bymail">
                <input
                  type="radio"
                  name="voteplan"
                  value="vote_bymail"
                  id="vote_bymail"
                />
                <p>By mail - <a href="https://www.sos.mo.gov/elections/goVoteMissouri/howtovote#absentee" target="_blank" rel="noopener noreferrer">Request your absentee ballot</a> <strong>or</strong></p>
              </label>


              <h2>My Polling Place</h2>
              <label className={`checkbox`} for="check_place">
                <input
                  type="checkbox"
                  value="check_place"
                  id="check_place"
                />
                <p>Check the location of your polling place <a href="https://voteroutreach.sos.mo.gov/PRD/VoterOutreach/VOSearch.aspx" target="_blank" rel="noopener noreferrer">here.</a><br />
                  <span className="red-text small">Polls are open from 6 a.m. to 7 p.m. If you're in line when your polling location closes, you are still allowed to vote. Stay in line!</span></p>
              </label>
              <label className="inputtext">My polling place is located at:
                <textarea></textarea>
              </label>
            </div>
            <div className="column">
              <h2>Day-of Checklist</h2>
              <h3 className="red-text">Missouri requires Voter ID. <br />These are all acceptable forms of identification:</h3>
              <label className={`checkbox`} for="drivers_id">
                <input
                  type="radio"
                  name="dayof"
                  value="drivers_id"
                  id="drivers_id"
                />
                <p>Driver's license <strong>or</strong></p>
              </label>
              <label className={`checkbox`} for="passport_id">
                <input
                  type="radio"
                  name="dayof"
                  value="passport_id"
                  id="passport_id"
                />
                <p>Passport <strong>or</strong></p>
              </label>
              <label className={`checkbox`} for="education_id">
                <input
                  type="radio"
                  name="dayof"
                  value="education_id"
                  id="education_id"
                />
                <p>Identification from a university, college, vocational and technical school <strong>or</strong></p>
              </label>
              <label className={`checkbox`} for="native_tribe_id">
                <input
                  type="radio"
                  name="dayof"
                  value="native_tribe_id"
                  id="native_tribe_id"
                />
                <p>Identification issued by a local election authority <strong>or</strong></p>
              </label>
              <label className={`checkbox`} for="bill_id">
                <input
                  type="radio"
                  name="dayof"
                  value="bill_id"
                  id="bill_id"
                />
                <p>A current utility bill, bank statement, paycheck, government check or other government document containing your name and address.</p>
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
        </div >
      </form >
    </>
  )
}

export default MoChecklist
