import React from 'react'
import BTN1 from "./images/btn-check-registration.svg"
import BTN2 from "./images/btn-register-to-vote.svg"
import BTN3 from "./images/btn-register-paper-english.svg"
import BTN4 from "./images/btn-register-paper-espanol.svg"
//import FAQS_MO from "./components/atoms/VoteYourHeartOut.svg"


export const kansasData = {
  heading: "Are you registered?",
  links: [
    {
      image: BTN1,
      title: "Check Your Registration",
      url: "https://myvoteinfo.voteks.org/voterview/",
    },
    {
      image: BTN2,
      title: "Register To Vote Online",
      url: "https://www.kdor.ks.gov/Apps/VoterReg",
    },
    {
      image: BTN3,
      title: "Register To Vote By Paper (English)",
      url: "https://www.sos.ks.gov/forms//elections/AV1.pdf",
    },
    {
      image: BTN4,
      title: "Register To Vote By Paper (Espanol)",
      url: "https://www.sos.ks.gov/forms//elections/Spanish/AV1%20(Spanish).pdf",
    },
  ],
  headingDates: "Important dates for Kansas",
  dates: [
    {
      date: 'OCT. 18',
      title: "Last day to register to vote",
    },
    {
      date: 'NOV. 1',
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
        <p>Election day in Kansas is November 8, 2022. <strong>You can register to vote right now</strong> <a href="https://www.kdor.ks.gov/Apps/VoterReg" target="_blank" rel="noopener noreferrer">here</a>.</p>
        <p><strong>Register by mail:</strong> Voter registration must be postmarked by 10/18/2022.</p><p><strong>Register in person:</strong> Voter registration must be received by 10/18/2022.</p>
        <p>Request an Advaced Voting Ballot By Mail: <a href="https://www.sos.ks.gov/forms//elections/AV1.pdf" target="_blank" rel="noopener noreferrer">English</a>/<a href="https://www.sos.ks.gov/forms//elections/Spanish/AV1%20(Spanish).pdf" target="_blank" rel="noopener noreferrer">Español</a></p>
        <p>Request your Advanced Voting Ballot by: 11/01/22</p><p><strong>Return your completed absentee ballot application by mail:</strong> Ballot must be received by 11/8/2022.</p>
        <p><strong>Return your completed absentee ballot application by hand:</strong> Ballot must be received by 11/08/2022.</p><p><strong>Return your completed ballot by mail:</strong> Ballot must be received by 11/08/2022.</p>
        <p><strong>Return your completed ballot by hand:</strong> Ballot must be received by 11/08/2022.</p></>,
    },
    {
      title: "How can I make sure I'm registered to vote?",
      description: <p>You can check your voter registration <a href="https://myvoteinfo.voteks.org/voterview/" target="_blank" rel="noopener noreferrer">here</a></p>,
    },
    {
      title: "What are the early voting locations?",
      description: <p>You can find your early voting locations and regulations <a href="https://www.usvotefoundation.org/vote/eoddomestic.htm" target="_blank" rel="noopener noreferrer">here</a></p>,
    },
    {
      title: "Do I have to live in Kansas for a certain amount of time to be eligible to vote?",
      description: <p>No, Kansas does not have a length of residence requirement. However, you have to be registered 21 days prior to an election and be a resident of Kansas at the time of registration.</p>,
    },
    {
      title: "Can I pre-register if I'll be 18 years old before the next election?",
      description: <p>If you are 17 years old and will be 18 before the next election, you may apply <a href="https://www.kdor.ks.gov/Apps/VoterReg/Registration" target="_blank" rel="noopener noreferrer">here</a> to register to vote.
      </p>,
    },
    {
      title: "I moved to a new address, can I vote?",
      description: <><p>Individuals who move to a new address <strong>within the same county</strong> should update their information ASAP. If you move after the registration deadline, you may vote at the precinct assigned to your old address, but you will be required to complete a new voter registration application.</p><p>Individuals who move to <strong>a new county</strong> in Kansas before the registration deadline, you must complete a new voter registration application. If you move after the registration deadline, you can still vote at the precinct assigned to your old address, but you will be required to complete a new voter registration application.</p><p>Individuals who moved to Kansas <strong>from another state</strong> should register to vote in Kansas as soon as possible after moving. If 45 days before an election and the deadline to register has passed, you may vote a president-only ballot. To vote a president-only ballot, you must go to your local election office by noon on the day before the election and complete voter registration forms.</p></>,
    }
  ],
  headingChecklist: "My 2022 Voting Plan Checklist",
  paragraphChecklist:
    "Complete the checklist to ensure you have everything you need to vote successfully."
}