import React from 'react'
import BTN1 from "../images/btn-check-registration.svg"
import BTN2 from "../images/btn-register-to-vote.svg"
import BTN3 from "../images/btn-register-paper-english.svg"
//import BTN4 from "./images/btn-register-paper-espanol.svg"
//import FAQS_MO from "./components/atoms/VoteYourHeartOut.svg"


export const missouriData = {
  heading: "Are you registered?",
  links: [
    {
      image: BTN1,
      title: "Check Your Registration",
      url: "https://s1.sos.mo.gov/elections/voterlookup",
    },
    {
      image: BTN2,
      title: "Register To Vote Online",
      url: "https://s1.sos.mo.gov/elections/voterregistration/",
    },
    {
      image: BTN3,
      title: "Register To Vote By Paper (English)",
      url: "https://s1.sos.mo.gov/Elections/VoterRegistration/Home/Print",
    },
  ],
  headingDates: "Important dates for Missouri",
  dates: [
    {
      date: 'OCT. 12',
      title: "Last day to register to vote",
    },
    {
      date: 'OCT. 22',
      title: "Last day to mail out absentee ballot",
    },
    {
      date: 'NOV. 7',
      title: "Last day to vote absentee in person",
    },
    {
      date: 'NOV. 8',
      title: "Election day",
    },
  ],
  headingFAQs: "FAQS",
  faqs: [
    {
      title: "Is it too late to register to vote?",
      description: <>
        <p className="highlight">Election day in Missouri is November 8, 2022. <strong>You can register to vote right now <a href="https://s1.sos.mo.gov/elections/voterregistration/" target="_blank" rel="noopener noreferrer">here.</a></strong></p>
        <p><strong>Register by mail:</strong> Voter registration must be postmarked by 10/12/2022.</p>
        <p><strong>Register in person:</strong> Voter registration must be received by 10/12/2022.</p>
        <p><strong>Return your completed absentee ballot application by mail:</strong> Ballot must be received by 5:00 pm 10/26/2022.</p>
        <p><strong>Return your completed absentee ballot application by hand:</strong> Ballot must be received by 5:00 pm 11/07/2022.</p>
        <p><strong>Return your completed ballot by mail:</strong> Ballot must be received by 7:00 pm 11/08/2022.</p>
        <p><strong>Return your completed ballot by hand:</strong> Ballot must be received by 7:00 pm 11/07/2022.</p>
      </>,
    },
    {
      title: "How can I make sure I'm registered to vote?",
      description: <p>You can check voter registration <a href="https://s1.sos.mo.gov/elections/voterlookup" target="_blank" rel="noopener noreferrer">here.</a></p>,
    },
    {
      title: "What are the early voting locations?",
      description: <><p>Missouri does not offer early in-person voting or no-excuse absentee voting.</p><p>Learn how to vote absentee by mail and <a href="https://www.sos.mo.gov/elections/goVoteMissouri/howtovote#absentee" target="_blank" rel="noopener noreferrer">request your mail-in absentee ballot.</a></p></>,
    },
    {
      title: "Can I pre-register if I'll be 18 years old before the next election?",
      description: <p>If you are 17 years old and will be 18 before the next election, you may apply to register to vote <a href="https://s1.sos.mo.gov/elections/voterregistration/" target="_blank" rel="noopener noreferrer">here</a>.</p>,
    },
    {
      title: "I moved to a new address, can I vote?",
      description: <>
        <p>Individuals who move to a different address <strong>within the same county</strong>, you are permitted to change your registration address on Election Day at your new polling place or the central polling location. It is recommended that you contact your local election official with any address changes prior to Election Day in order to determine your assigned polling place.</p>
        <p>Individuals who move to a <strong>new county</strong> of the election jurisdiction in which you were previously registered, you will need to fill out a new voter registration application.</p>
        <p>If you moved before the deadline to register for an election, you must complete your new registration prior to the registration deadline to be eligible to vote a full ballot in your new jurisdiction. If you moved after the registration deadline, you will be entitled to vote a limited ballot, containing only federal and statewide candidates and issues once you submit a completed voter registration application in person with the local election authority.</p>
        <p>Individuals who <strong>move to Missouri from another state</strong> after the deadline to register for a presidential election, you are entitled to register and vote only a presidential and vice presidential ballot in your new jurisdiction.</p>
      </>,
    }
  ],
  headingChecklist: "My 2022 Voting Plan Checklist",
  paragraphChecklist:
    "Complete the checklist to ensure you have everything you need to vote successfully."
}