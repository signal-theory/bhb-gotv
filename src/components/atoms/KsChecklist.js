import React, { useState } from "react"
import { Fade } from "react-awesome-reveal";
import { kansasData } from "../../data/data-kansas"
import kansasChecklist from "../../images/Checklist_Kansas.pdf"
import SocialShare from "./SocialShare";

const KsChecklist = () => {
  // local storage
  const [checkbox1, setCheckbox1] = useState(localStorage.getItem('check-registration') === 'true');
  const [checkbox2, setCheckbox2] = useState(localStorage.getItem('register_here') === 'true');
  const [checkbox3, setCheckbox3] = useState(localStorage.getItem('research_rules') === 'true');
  const [checkbox4, setCheckbox4] = useState(localStorage.getItem('view_candidate') === 'true');
  const [radio1, setRadio1] = useState(localStorage.getItem('vote_plan1') === 'true');
  const [radio2, setRadio2] = useState(localStorage.getItem('vote_plan2') === 'true');
  const [radio3, setRadio3] = useState(localStorage.getItem('vote_plan3') === 'true');
  const [radioGroup1, setRadioGroup1] = useState(localStorage.getItem('radio_group1') === 'true');
  const [checkbox5, setCheckbox5] = useState(localStorage.getItem('check_place') === 'true');
  const [notes, setNotes] = useState(localStorage.getItem("notes"));
  const [radio4, setRadio4] = useState(localStorage.getItem('dayof1') === 'true');
  const [radio5, setRadio5] = useState(localStorage.getItem('dayof2') === 'true');
  const [radio6, setRadio6] = useState(localStorage.getItem('dayof3') === 'true');
  const [radio7, setRadio7] = useState(localStorage.getItem('dayof4') === 'true');
  const [radio8, setRadio8] = useState(localStorage.getItem('dayof5') === 'true');
  const [radio9, setRadio9] = useState(localStorage.getItem('dayof6') === 'true');
  const [radio10, setRadio10] = useState(localStorage.getItem('dayof7') === 'true');
  const [radio11, setRadio11] = useState(localStorage.getItem('dayof8') === 'true');
  const [radioGroup2, setRadioGroup2] = useState(localStorage.getItem('radio_group2') === 'true');
  const [checkbox6, setCheckbox6] = useState(localStorage.getItem('reach_out') === 'true');

  // share button
  const [toggle, setToggle] = useState(false)
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
              <label className={`checkbox open`} for="check_registration">
                <input
                  type="checkbox"
                  id="check_registration"
                  checked={checkbox1}
                  onChange={
                    (e) => {
                      localStorage.setItem('check-registration', `${e.target.checked}`);
                      setCheckbox1(e.target.checked);
                    }
                  }
                />
                <p>I have checked my <a href="https://myvoteinfo.voteks.org/voterview/" target="_blank" rel="noopener noreferrer">voter registration</a></p>
              </label>
              <label className={`red-text checkbox open`} for="register_here">
                <input
                  type="checkbox"
                  id="register_here"
                  checked={checkbox2}
                  onChange={
                    (e) => {
                      localStorage.setItem('register_here', `${e.target.checked}`);
                      setCheckbox2(e.target.checked);
                    }
                  }
                />
                <p>I have <a href="https://www.kdor.ks.gov/Apps/VoterReg" target="_blank" rel="noopener noreferrer">registered to vote</a></p>
              </label>
              <label className={`checkbox open`} for="research_rules">
                <input
                  type="checkbox"
                  id="research_rules"
                  checked={checkbox3}
                  onChange={
                    (e) => {
                      localStorage.setItem('research_rules', `${e.target.checked}`);
                      setCheckbox3(e.target.checked);
                    }
                  }
                />
                <p>I have researched the <a href="https://sos.ks.gov/elections/voter-information.html" target="_blank" rel="noopener noreferrer">rules and regulations</a> around voting in Kansas</p>
              </label>
              <label className={`checkbox open`} for="view_candidate">
                <input
                  type="checkbox"
                  id="view_candidate"
                  checked={checkbox4}
                  onChange={
                    (e) => {
                      localStorage.setItem('view_candidate', `${e.target.checked}`);
                      setCheckbox4(e.target.checked);
                    }
                  }
                />
                <p>I have viewed my list of candidates with this <a href="https://ballotpedia.org/Kansas_Sample_Ballot" target="_blank" rel="noopener noreferrer">sample ballot lookup tool</a></p>
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
                      localStorage.setItem("vote_plan1", e.target.checked);
                      setRadio1(e.target.checked);
                      localStorage.setItem("vote_plan2", false);
                      setRadio2(false);
                      localStorage.setItem("vote_plan3", false);
                      setRadio3(false);
                      localStorage.setItem("radio_group1", true);
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
                      localStorage.setItem("vote_plan2", e.target.checked);
                      setRadio2(e.target.checked);
                      localStorage.setItem("vote_plan3", false);
                      setRadio3(false);
                      localStorage.setItem("vote_plan1", false);
                      setRadio1(false);
                      localStorage.setItem("radio_group1", true);
                      setRadioGroup1(true);
                    }
                  }
                />
                <p>By mail - Request an advanced ballot <a href="https://www.sos.ks.gov/forms/elections/AV1.pdf" target="_blank" rel="noopener noreferrer">English</a>/<a href="https://www.sos.ks.gov/forms/elections/Spanish/AV1%20(Spanish).pdf" target="_blank" rel="noopener noreferrer">Español</a> <em>or</em></p>
              </label>

              <label className={`checkbox ${radio3 === true ? "checked" : radioGroup1 === false ? "open" : ""}`} for="vote_early">
                <input
                  type="radio"
                  id="vote_early"
                  name="voteplan"
                  checked={radio3}
                  onChange={
                    (e) => {
                      localStorage.setItem("vote_plan3", e.target.checked);
                      setRadio3(e.target.checked);
                      localStorage.setItem("vote_plan2", false);
                      setRadio2(false);
                      localStorage.setItem("vote_plan1", false);
                      setRadio1(false);
                      localStorage.setItem("radio_group1", true);
                      setRadioGroup1(true);
                    }
                  }
                />
                <p>Early Voting - <a href="https://www.usvotefoundation.org/vote/eoddomestic.htm" target="_blank" rel="noopener noreferrer">Find early voting locations</a></p>
              </label>


              <h2>My Polling Place</h2>
              <label className={`checkbox open`} for="check_place">
                <input
                  type="checkbox"
                  id="check_place"
                  checked={checkbox5}
                  onChange={
                    (e) => {
                      localStorage.setItem('check_place', `${e.target.checked}`);
                      setCheckbox5(e.target.checked);
                    }
                  }
                />
                <p>I have checked the <a href="https://myvoteinfo.voteks.org/VoterView" target="_blank" rel="noopener noreferrer">location of my polling place</a><br />
                  <span className="red-text small">Polls are open from 7 a.m. to 7 p.m., but counties have discretion to open earlier or close later. If you're in line when your polling location closes, you are still allowed to vote. Stay in line!</span></p>
              </label>
              <label className="inputtext open">My polling place is located at:
                <textarea
                  value={notes}
                  onChange={
                    (e) => {
                      localStorage.setItem("notes", e.target.value);
                      setNotes(e.target.value);
                    }
                  }
                />
              </label>
            </div>
            <div className="column">
              <h2>Day-of Checklist</h2>
              <h3 className="red-text">Kansas requires Voter ID. <br />I have one of these acceptable forms of identification:</h3>
              <label className={`checkbox ${radio4 === true ? "checked" : radioGroup2 === false ? "open" : ""}`} for="drivers_id">
                <input
                  type="radio"
                  name="dayof"
                  id="drivers_id"
                  checked={radio4}
                  onChange={
                    (e) => {
                      localStorage.setItem("dayof1", e.target.checked);
                      setRadio4(e.target.checked);
                      localStorage.setItem("dayof2", false);
                      setRadio5(false);
                      localStorage.setItem("dayof3", false);
                      setRadio6(false);
                      localStorage.setItem("dayof4", false);
                      setRadio7(false);
                      localStorage.setItem("dayof5", false);
                      setRadio8(false);
                      localStorage.setItem("dayof6", false);
                      setRadio9(false);
                      localStorage.setItem("dayof7", false);
                      setRadio10(false);
                      localStorage.setItem("dayof8", false);
                      setRadio11(false);
                      localStorage.setItem("radio_group2", true);
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
                      localStorage.setItem("dayof2", e.target.checked);
                      setRadio5(e.target.checked);
                      localStorage.setItem("dayof3", false);
                      setRadio6(false);
                      localStorage.setItem("dayof4", false);
                      setRadio7(false);
                      localStorage.setItem("dayof5", false);
                      setRadio8(false);
                      localStorage.setItem("dayof6", false);
                      setRadio9(false);
                      localStorage.setItem("dayof7", false);
                      setRadio10(false);
                      localStorage.setItem("dayof8", false);
                      setRadio11(false);
                      localStorage.setItem("dayof1", false);
                      setRadio4(false);
                      localStorage.setItem("radio_group2", true);
                      setRadioGroup2(true);
                    }
                  }
                />
                <p>Passport <em>or</em></p>
              </label>
              <label className={`checkbox ${radio6 === true ? "checked" : radioGroup2 === false ? "open" : ""}`} for="military_id">
                <input
                  type="radio"
                  name="dayof"
                  id="military_id"
                  checked={radio6}
                  onChange={
                    (e) => {
                      localStorage.setItem("dayof3", e.target.checked);
                      setRadio6(e.target.checked);
                      localStorage.setItem("dayof4", false);
                      setRadio7(false);
                      localStorage.setItem("dayof5", false);
                      setRadio8(false);
                      localStorage.setItem("dayof6", false);
                      setRadio9(false);
                      localStorage.setItem("dayof7", false);
                      setRadio10(false);
                      localStorage.setItem("dayof8", false);
                      setRadio11(false);
                      localStorage.setItem("dayof1", false);
                      setRadio4(false);
                      localStorage.setItem("dayof2", false);
                      setRadio5(false);
                      localStorage.setItem("radio_group2", true);
                      setRadioGroup2(true);
                    }
                  }
                />
                <p>Military ID <em>or</em></p>
              </label>
              <label className={`checkbox ${radio7 === true ? "checked" : radioGroup2 === false ? "open" : ""}`} for="election_auth_id">
                <input
                  type="radio"
                  name="dayof"
                  id="election_auth_id"
                  checked={radio7}
                  onChange={
                    (e) => {
                      localStorage.setItem("dayof4", e.target.checked);
                      setRadio7(e.target.checked);
                      localStorage.setItem("dayof5", false);
                      setRadio8(false);
                      localStorage.setItem("dayof6", false);
                      setRadio9(false);
                      localStorage.setItem("dayof7", false);
                      setRadio10(false);
                      localStorage.setItem("dayof8", false);
                      setRadio11(false);
                      localStorage.setItem("dayof1", false);
                      setRadio4(false);
                      localStorage.setItem("dayof2", false);
                      setRadio5(false);
                      localStorage.setItem("dayof3", false);
                      setRadio6(false);
                      localStorage.setItem("radio_group2", true);
                      setRadioGroup2(true);
                    }
                  }
                />
                <p>Identification issued by a local election authority <em>or</em></p>
              </label>
              <label className={`checkbox ${radio8 === true ? "checked" : radioGroup2 === false ? "open" : ""}`} for="native_tribe_id">
                <input
                  type="radio"
                  name="dayof"
                  id="native_tribe_id"
                  checked={radio8}
                  onChange={
                    (e) => {
                      localStorage.setItem("dayof5", e.target.checked);
                      setRadio8(e.target.checked);
                      localStorage.setItem("dayof6", false);
                      setRadio9(false);
                      localStorage.setItem("dayof7", false);
                      setRadio10(false);
                      localStorage.setItem("dayof8", false);
                      setRadio11(false);
                      localStorage.setItem("dayof1", false);
                      setRadio4(false);
                      localStorage.setItem("dayof2", false);
                      setRadio5(false);
                      localStorage.setItem("dayof3", false);
                      setRadio6(false);
                      localStorage.setItem("dayof4", false);
                      setRadio7(false);
                      localStorage.setItem("radio_group2", true);
                      setRadioGroup2(true);
                    }
                  }
                />
                <p>ID card issued by a Native American tribe <em>or</em></p>
              </label>
              <label className={`checkbox ${radio9 === true ? "checked" : radioGroup2 === false ? "open" : ""}`} for="employee_id">
                <input
                  type="radio"
                  name="dayof"
                  id="employee_id"
                  checked={radio9}
                  onChange={
                    (e) => {
                      localStorage.setItem("dayof6", e.target.checked);
                      setRadio9(e.target.checked);
                      localStorage.setItem("dayof7", false);
                      setRadio10(false);
                      localStorage.setItem("dayof8", false);
                      setRadio11(false);
                      localStorage.setItem("dayof1", false);
                      setRadio4(false);
                      localStorage.setItem("dayof2", false);
                      setRadio5(false);
                      localStorage.setItem("dayof3", false);
                      setRadio6(false);
                      localStorage.setItem("dayof4", false);
                      setRadio7(false);
                      localStorage.setItem("dayof5", false);
                      setRadio8(false);
                      localStorage.setItem("radio_group2", true);
                      setRadioGroup2(true);
                    }
                  }
                />
                <p>Employee badge or ID issued by a government office <em>or</em></p>
              </label>
              <label className={`checkbox ${radio10 === true ? "checked" : radioGroup2 === false ? "open" : ""}`} for="education_id">
                <input
                  type="radio"
                  name="dayof"
                  id="education_id"
                  checked={radio10}
                  onChange={
                    (e) => {
                      localStorage.setItem("dayof7", e.target.checked);
                      setRadio10(e.target.checked);
                      localStorage.setItem("dayof8", false);
                      setRadio11(false);
                      localStorage.setItem("dayof1", false);
                      setRadio4(false);
                      localStorage.setItem("dayof2", false);
                      setRadio5(false);
                      localStorage.setItem("dayof3", false);
                      setRadio6(false);
                      localStorage.setItem("dayof4", false);
                      setRadio7(false);
                      localStorage.setItem("dayof5", false);
                      setRadio8(false);
                      localStorage.setItem("dayof6", false);
                      setRadio9(false);
                      localStorage.setItem("radio_group2", true);
                      setRadioGroup2(true);
                    }
                  }
                />
                <p>Identification from an accredited postsecondary education institution in Kansas <em>or</em></p>
              </label>
              <label className={`checkbox ${radio11 === true ? "checked" : radioGroup2 === false ? "open" : ""}`} for="gov_id">
                <input
                  type="radio"
                  name="dayof"
                  id="gov_id"
                  checked={radio11}
                  onChange={
                    (e) => {
                      localStorage.setItem("dayof8", e.target.checked);
                      setRadio11(e.target.checked);
                      localStorage.setItem("dayof1", false);
                      setRadio4(false);
                      localStorage.setItem("dayof2", false);
                      setRadio5(false);
                      localStorage.setItem("dayof3", false);
                      setRadio6(false);
                      localStorage.setItem("dayof4", false);
                      setRadio7(false);
                      localStorage.setItem("dayof5", false);
                      setRadio8(false);
                      localStorage.setItem("dayof6", false);
                      setRadio9(false);
                      localStorage.setItem("dayof7", false);
                      setRadio10(false);
                      localStorage.setItem("radio_group2", true);
                      setRadioGroup2(true);
                    }
                  }
                />
                <p>Public assistance ID card issued by a government office</p>
              </label>
              <h2>Spread the Word</h2>
              <label className={`checkbox open`} for="reach_out">
                <input
                  type="checkbox"
                  id="reach_out"
                  checked={checkbox6}
                  onChange={
                    (e) => {
                      localStorage.setItem('reach_out', `${e.target.checked}`);
                      setCheckbox6(e.target.checked);
                    }
                  }
                />
                <p>Reach out to three friends or family members to help create a voting and/or carpool plan</p>
              </label>
            </div>
          </div>

        </div >
      </form >
      <div className="checklist-buttons section">
        <a className="download-btn" href={kansasChecklist} target="_blank" rel="noreferrer">DOWNLOAD CHECKLIST</a>
        <button className="share-btn" onClick={() => setToggle(!toggle)}>SHARE</button>
        {toggle === true ? <SocialShare
          shareURL={kansasData.shareURL}
          title={kansasData.shareTitle}
          description={kansasData.shareDescription}
          hashtag0={kansasData.hashtag0}
          hashtag1={kansasData.hashtag1} /> : null}
      </div>
    </>
  )
}

export default KsChecklist
