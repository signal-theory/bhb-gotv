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
      url: "/",
    },
    {
      image: BTN2,
      title: "Register To Vote Online",
      url: "/",
    },
    {
      image: BTN3,
      title: "Register To Vote By Paper (English)",
      url: "/",
    },
    {
      image: BTN4,
      title: "Register To Vote By Paper (Espanol)",
      url: "/",
    },
  ],
  headingDates: "Important dates for Kansas",
  dates: [
    {
      date: 'OCT. 11',
      title: "Last day to register to vote",
    },
    {
      date: 'NOV. 1',
      title: "Last day to mail out absentee ballot",
    },
    {
      date: 'NOV. 4',
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
      description: <><p>Election day in Kansas is November 8, 2022. <strong>You can register to vote right now here.</strong></p><p><strong>Register by mail:</strong> Voter registration must be postmarked by 10/11/2022.</p><p><strong>Register in person:</strong> Voter registration must be received by 10/11/2022.</p><p><strong>Return your completed absentee ballot application by mail:</strong> Ballot must be received by 5:00 pm 11/1/2022.</p><p><strong>Return your completed absentee ballot application by hand:</strong> Ballot must be received by 5:00 pm 11/04/2022.</p><p><strong>Return your completed ballot by mail:</strong> Ballot must be received by 7:00 pm 11/08/2022.</p><p><strong>Return your completed ballot by hand:</strong> Ballot must be received by 7:00 pm 11/07/2022.</p></>,
    },
    {
      title: "How can I make sure I'm registered to vote?",
      description: <p>Lorem Ipsum</p>,
    },
    {
      title: "What are the early voting locations?",
      description: <p>Lorem Ipsum</p>,
    },
    {
      title: "Do I have to live in Kansas for a certain amount of time to be eligible to vote?",
      description: <p>Lorem Ipsum</p>,
    },
    {
      title: "Can I pre-register if I'll be 18 years old before the next election?",
      description: <p>Lorem Ipsum</p>,
    },
    {
      title: "I moved to a new address, can I vote?",
      description: <p>Lorem Ipsum</p>,
    }
  ],
  headingChecklist: "My 2022 Voting Plan Checklist",
  paragraphChecklist:
    "Complete the checklist to ensure you have everything you need to vote successfully."
}