import React, { useState } from "react"
import { Fade } from "react-awesome-reveal";
import { missouriData } from "../../data/data-missouri"
import missouriChecklist from "../../images/Checklist_Missouri.pdf"
import SocialShare from "./SocialShare";

const MoChecklist = () => {
  // local storage
  const [checkbox1, setCheckbox1] = useState(localStorage.getItem('check-registration_mo') === 'true');
  const [checkbox2, setCheckbox2] = useState(localStorage.getItem('register_here_mo') === 'true');
  const [checkbox3, setCheckbox3] = useState(localStorage.getItem('research_rules_mo') === 'true');
  const [checkbox4, setCheckbox4] = useState(localStorage.getItem('view_candidate_mo') === 'true');
  const [radio1, setRadio1] = useState(localStorage.getItem('vote_plan1_mo') === 'true');
  const [radio2, setRadio2] = useState(localStorage.getItem('vote_plan2_mo') === 'true');
  const [radioGroup1, setRadioGroup1] = useState(localStorage.getItem('radio_group1_mo') === 'true');
  const [checkbox5, setCheckbox5] = useState(localStorage.getItem('check_place_mo') === 'true');
  const [notes, setNotes] = useState(localStorage.getItem("notes_mo"));
  const [radio4, setRadio4] = useState(localStorage.getItem('dayof1_mo') === 'true');
  const [radio5, setRadio5] = useState(localStorage.getItem('dayof2_mo') === 'true');
  const [radio6, setRadio6] = useState(localStorage.getItem('dayof3_mo') === 'true');
  const [radio8, setRadio8] = useState(localStorage.getItem('dayof5_mo') === 'true');
  const [radio9, setRadio9] = useState(localStorage.getItem('dayof6_mo') === 'true');
  const [radioGroup2, setRadioGroup2] = useState(localStorage.getItem('radio_group2_mo') === 'true');
  const [checkbox6, setCheckbox6] = useState(localStorage.getItem('reach_out_mo') === 'true');

  // share button
  const [toggle, setToggle] = useState(false)

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
              <label className={`checkbox open`} for="check_registration">
                <input
                  type="checkbox"
                  id="check_registration"
                  checked={checkbox1}
                  onChange={
                    (e) => {
                      localStorage.setItem('check-registration_mo', `${e.target.checked}`);
                      setCheckbox1(e.target.checked);
                    }
                  }
                />
                <p>I have checked my <a href="https://s1.sos.mo.gov/elections/voterlookup" target="_blank" rel="noopener noreferrer">voter registration</a></p>
              </label>
              <label className={`red-text checkbox open`} for="register_here_mo">
                <input
                  type="checkbox"
                  id="register_here_mo"
                  checked={checkbox2}
                  onChange={
                    (e) => {
                      localStorage.setItem('register_here_mo', `${e.target.checked}`);
                      setCheckbox2(e.target.checked);
                    }
                  }
                />
                <p>I have <a href="https://s1.sos.mo.gov/elections/voterregistration/" target="_blank" rel="noopener noreferrer">registered to vote</a></p>
              </label>
              <label className={`checkbox open`} for="research_rules_mo">
                <input
                  type="checkbox"
                  id="research_rules_mo"
                  checked={checkbox3}
                  onChange={
                    (e) => {
                      localStorage.setItem('research_rules_mo', `${e.target.checked}`);
                      setCheckbox3(e.target.checked);
                    }
                  }
                />
                <p>I have researched the <a href="https://www.sos.mo.gov/CMSImages/ElectionGoVoteMissouri//2021ElectionLaws_10.22.pdf" target="_blank" rel="noopener noreferrer">rules and regulations</a> around voting in Missouri</p>
              </label>
              <label className={`checkbox open`} for="view_candidate_mo">
                <input
                  type="checkbox"
                  id="view_candidate_mo"
                  checked={checkbox4}
                  onChange={
                    (e) => {
                      localStorage.setItem('view_candidate_mo', `${e.target.checked}`);
                      setCheckbox4(e.target.checked);
                    }
                  }
                />
                <p>I have viewed my list of candidates with this <a href="https://ballotpedia.org/Missouri_Sample_Ballot" target="_blank" rel="noopener noreferrer">sample ballot lookup tool</a></p>
              </label>


              <h4>I plan on voting via:</h4>
              <label className={`checkbox ${radio1 === true ? "checked" : radioGroup1 === false ? "open" : ""}`} for="vote_inperson">
                <input
                  type="radio"
                  id="vote_inperson"
                  name="voteplan"
                  checked={radio1}
                  onChange={
                    (e) => {
                      localStorage.setItem("vote_plan1_mo", e.target.checked);
                      setRadio1(e.target.checked);
                      localStorage.setItem("vote_plan2_mo", false);
                      setRadio2(false);
                      localStorage.setItem("radio_group1_mo", true);
                      setRadioGroup1(true);
                    }
                  }
                />
                <p>In-person on election day <em>or</em></p>
              </label>
              <label className={`checkbox ${radio2 === true ? "checked" : radioGroup1 === false ? "open" : ""}`} for="vote_bymail">
                <input
                  type="radio"
                  id="vote_bymail"
                  name="voteplan"
                  checked={radio2}
                  onChange={
                    (e) => {
                      localStorage.setItem("vote_plan2_mo", e.target.checked);
                      setRadio2(e.target.checked);
                      localStorage.setItem("vote_plan1_mo", false);
                      setRadio1(false);
                      localStorage.setItem("radio_group1_mo", true);
                      setRadioGroup1(true);
                    }
                  }
                />
                <p>By mail - <a href="https://www.sos.mo.gov/elections/goVoteMissouri/howtovote#absentee" target="_blank" rel="noopener noreferrer">Request absentee ballot</a> <em>or</em></p>
              </label>


              <h2>My Polling Place</h2>
              <label className={`checkbox open`} for="check_place_mo">
                <input
                  type="checkbox"
                  id="check_place_mo"
                  checked={checkbox5}
                  onChange={
                    (e) => {
                      localStorage.setItem('check_place_mo', `${e.target.checked}`);
                      setCheckbox5(e.target.checked);
                    }
                  }
                />
                <p>I have checked the <a href="https://voteroutreach.sos.mo.gov/PRD/VoterOutreach/VOSearch.aspx" target="_blank" rel="noopener noreferrer">location of my polling place.</a><br />
                  <span className="red-text small">Polls are open from 6 a.m. to 7 p.m. If you're in line when your polling location closes, you are still allowed to vote. Stay in line!</span></p>
              </label>
              <label className="inputtext open">My polling place is located at:
                <textarea
                  value={notes}
                  onChange={
                    (e) => {
                      localStorage.setItem("notes_mo", e.target.value);
                      setNotes(e.target.value);
                    }
                  }
                />
              </label>
            </div>
            <div className="column">
              <h2>Day-of Checklist</h2>
              <h3 className="red-text">Missouri requires Voter ID. <br />I have one of these acceptable forms of identification:</h3>
              <label className={`checkbox ${radio4 === true ? "checked" : radioGroup2 === false ? "open" : ""}`} for="drivers_id">
                <input
                  type="radio"
                  name="dayof"
                  id="drivers_id"
                  checked={radio4}
                  onChange={
                    (e) => {
                      localStorage.setItem("dayof1_mo", e.target.checked);
                      setRadio4(e.target.checked);
                      localStorage.setItem("dayof2_mo", false);
                      setRadio5(false);
                      localStorage.setItem("dayof3_mo", false);
                      setRadio6(false);
                      localStorage.setItem("dayof5_mo", false);
                      setRadio8(false);
                      localStorage.setItem("dayof6_mo", false);
                      setRadio9(false);
                      localStorage.setItem("radio_group2_mo", true);
                      setRadioGroup2(true);
                    }
                  }
                />
                <p>Driver's license <em>or</em></p>
              </label>
              <label className={`checkbox ${radio5 === true ? "checked" : radioGroup2 === false ? "open" : ""}`} for="passport_id">
                <input
                  type="radio"
                  name="dayof"
                  id="passport_id"
                  checked={radio5}
                  onChange={
                    (e) => {
                      localStorage.setItem("dayof2_mo", e.target.checked);
                      setRadio5(e.target.checked);
                      localStorage.setItem("dayof3_mo", false);
                      setRadio6(false);
                      localStorage.setItem("dayof5_mo", false);
                      setRadio8(false);
                      localStorage.setItem("dayof6_mo", false);
                      setRadio9(false);
                      localStorage.setItem("dayof1_mo", false);
                      setRadio4(false);
                      localStorage.setItem("radio_group2_mo", true);
                      setRadioGroup2(true);
                    }
                  }
                />
                <p>Passport <em>or</em></p>
              </label>
              <label className={`checkbox ${radio6 === true ? "checked" : radioGroup2 === false ? "open" : ""}`} for="education_id">
                <input
                  type="radio"
                  name="dayof"
                  id="education_id"
                  checked={radio6}
                  onChange={
                    (e) => {
                      localStorage.setItem("dayof3_mo", e.target.checked);
                      setRadio6(e.target.checked);
                      localStorage.setItem("dayof5_mo", false);
                      setRadio8(false);
                      localStorage.setItem("dayof6_mo", false);
                      setRadio9(false);
                      localStorage.setItem("dayof1_mo", false);
                      setRadio4(false);
                      localStorage.setItem("dayof2_mo", false);
                      setRadio5(false);
                      localStorage.setItem("radio_group2_mo", true);
                      setRadioGroup2(true);
                    }
                  }
                />
                <p>Identification from a university, college, vocational and technical school <em>or</em></p>
              </label>
              <label className={`checkbox ${radio8 === true ? "checked" : radioGroup2 === false ? "open" : ""}`} for="election_authority_id">
                <input
                  type="radio"
                  name="dayof"
                  id="election_authority_id"
                  checked={radio8}
                  onChange={
                    (e) => {
                      localStorage.setItem("dayof5_mo", e.target.checked);
                      setRadio8(e.target.checked);
                      localStorage.setItem("dayof6_mo", false);
                      setRadio9(false);
                      localStorage.setItem("dayof1_mo", false);
                      setRadio4(false);
                      localStorage.setItem("dayof2_mo", false);
                      setRadio5(false);
                      localStorage.setItem("dayof3_mo", false);
                      setRadio6(false);
                      localStorage.setItem("radio_group2_mo", true);
                      setRadioGroup2(true);
                    }
                  }
                />
                <p>Identification issued by a local election authority <em>or</em></p>
              </label>
              <label className={`checkbox ${radio9 === true ? "checked" : radioGroup2 === false ? "open" : ""}`} for="utility_bill_id">
                <input
                  type="radio"
                  name="dayof"
                  id="utility_bill_id"
                  checked={radio9}
                  onChange={
                    (e) => {
                      localStorage.setItem("dayof6_mo", e.target.checked);
                      setRadio9(e.target.checked);
                      localStorage.setItem("dayof1_mo", false);
                      setRadio4(false);
                      localStorage.setItem("dayof2_mo", false);
                      setRadio5(false);
                      localStorage.setItem("dayof3_mo", false);
                      setRadio6(false);
                      localStorage.setItem("dayof5_mo", false);
                      setRadio8(false);
                      localStorage.setItem("radio_group2_mo", true);
                      setRadioGroup2(true);
                    }
                  }
                />
                <p>A current utility bill, bank statement, paycheck, government check or other government document containing your name and address</p>
              </label>

              <h2>Spread the Word</h2>
              <label className={`checkbox open`} for="reach_out_mo">
                <input
                  type="checkbox"
                  id="reach_out_mo"
                  checked={checkbox6}
                  onChange={
                    (e) => {
                      localStorage.setItem('reach_out_mo', `${e.target.checked}`);
                      setCheckbox6(e.target.checked);
                    }
                  }
                />
                <p>Reach out to three friends or family members to help create a voting and/or carpool plan</p>
              </label>
            </div>
          </div>
        </div>
      </form ><div className="checklist-buttons section">
        <a className="download-btn" href={missouriChecklist} target="_blank" rel="noreferrer">DOWNLOAD CHECKLIST</a>
        <button className="share-btn" onClick={() => setToggle(!toggle)}>SHARE</button>
        {toggle === true ? <SocialShare
          shareURL={missouriData.shareURL}
          title={missouriData.shareTitle}
          description={missouriData.shareDescription}
          hashtag0={missouriData.hashtag0}
          hashtag1={missouriData.hashtag1} /> : null}
      </div>
    </>
  )
}

export default MoChecklist
