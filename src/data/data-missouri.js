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
      date: 'OCT. 26',
      title: "Last day to request absentee ballot",
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
  headingFAQs: "Missouri FAQs",
  faqs: [
    {
      title: "Is it too late to register to vote?",
      description: <>
        <p className="highlight">Election day in Missouri is November 8, 2022. <strong>You can register to vote right now <a href="https://s1.sos.mo.gov/elections/voterregistration/" target="_blank" rel="noopener noreferrer">here.</a></strong></p>
        <p><strong>Register by mail:</strong> Voter registration must be postmarked by 10/12/2022.</p>
        <p><strong>Register in person:</strong> Voter registration must be received by 10/12/2022.</p>
        <p><strong>Return your completed absentee ballot application by mail:</strong> Ballot must be received by 5:00 pm 10/26/2022.</p>
        <p><strong>Return your completed absentee ballot in person:</strong> Ballot must be received by 5:00 pm 11/07/2022.</p>
        <p><strong>Return your completed ballot by hand:</strong> Ballot must be received by 7:00 pm 11/07/2022.</p>
        <p><strong>Return your completed ballot by mail:</strong> Ballot must be received by 7:00 pm 11/08/2022.</p>
      </>,
    },
    {
      title: "How can I make sure I'm registered to vote?",
      description: <p>You can check voter registration <a href="https://s1.sos.mo.gov/elections/voterlookup" target="_blank" rel="noopener noreferrer">here.</a></p>,
    },
    {
      title: "What are the early voting locations?",
      description: <><p>Missouri does not offer early in-person voting or no-excuse absentee voting. However, during the two weeks prior to the election, you may vote a no-excuse absentee ballot by mail or in person at a location designated by your local election authority.
        When voting an absentee ballot in person, you must show an acceptable form of photo ID. In person absentee voters are not eligible for a provisional ballot, and absentee voters must provide reasons for voting absentee.</p>
        <p>To request an absentee ballot, mail <a href="https://www.sos.mo.gov/CMSImages/ElectionGoVoteMissouri/CurrentAbsenteeBallotRequestForm.pdf" target="_blank" rel="noopener noreferrer">this completed form</a> to your local election authority. Missouri
          law requires that requests for absentee ballots must be received by 5:00 p.m. on the second Wednesday prior to Election Day (October 26, 2022) if the
          ballot is mailed. The deadline for absentee voting in person in the office of the election authority is 5:00 p.m. on the day before the
          election (November 7, 2022). If you registered by mail and this is your first time voting, you must provide a copy of either: (1) a nonexpired Missouri driver's
          or nondriver's license; (2) a nonexpired military ID, including a veteran's ID card; (3) a nonexpired United States passport; or (4) another
          photo ID issued by the United States or the state of Missouri which is either not expired or expired after the date of the most recent
          general (November) election. </p>
        <p><a href="https://www.sos.mo.gov/elections/goVoteMissouri/howtovote#absentee" target="_blank" rel="noopener noreferrer">Learn more about how to vote absentee by mail</a> and request your mail-in absentee ballot.</p></>,
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
    },
    {
      title: "Who is running for election in Missouri?",
      description: <p>View the elections you will be voting in with this <a href="https://ballotpedia.org/Missouri_Sample_Ballot" target="_blank" rel="noopener noreferrer">sample ballot lookup tool.</a></p>
    },
    {
      title: "Are there any constitutional amendments on the ballot this year?",
      description: <>
        <p>Yes! The following ballot measures have been certified for the November 8, 2022 general election:</p>
        <p><a href="https://house.mo.gov/billtracking/bills211/hlrbillspdf/0587H.03T.pdf" target="_blank" rel="noopender noreferrer">Amendment 1</a> A "yes" or "no" vote will amend the Missouri Constitution to grant the General Assembly statutory authority to invest state funds and also expand the state treasurer's investment options. If passed, this measure will have no impact on taxes.</p>
        <p><a href="https://www.sos.mo.gov/CMSImages/Elections/Petitions/2022-059.pdf" target="_blank" rel="noopender noreferrer">Amendment 3</a> A "yes" or "no" vote amending the Missouri Constitution to remove state prohibitions on the purchase, possession, consumption, use, delivery, manufacture, and sale of marijuana for personal use for adults over the age of twenty-one. The amendment would also allow individuals with certain marijuana-related offenses to petition for release from prison or parole and probation and have their records expunged; along with imposing a six percent tax on the retail price of recreational marijuana. If passed, this measure will impose a 6 percent tax on the retail price of recreational marijuana.</p>
        <p><a href="https://www.senate.mo.gov/22info/pdf-bill/tat/SJR38.pdf" target="_blank" rel="noopender noreferrer">Amendment 4</a> A "yes" or "no" vote amending the Missouri Constitution to allow the general assembly by law to increase the minimum funding for a police force established by the state board of police commissioners to ensure such police force has additional resources to serve its communities. Currently the only police force established by the state board of police commissioners is found in Kansas City, Missouri. If passed, this measure will have no impact on taxes.</p>
        <p><a href="https://house.mo.gov/billtracking/bills221/hlrbillspdf/5096H.01T.pdf" target="_blank" rel="noopender noreferrer">Amendment 5</a> A "yes" or "no" vote amending the Missouri Constitution to create the Missouri Department of the National Guard as a new state agency, headed by an adjutant general appointed by and serving at the pleasure of the governor by and with the advice and consent of the senate. If passed, this measure will have no impact on taxes.</p>
        <p><a href="https://www.sos.mo.gov/CMSImages/Elections/Petitions/ArticleXIISection3a.pdf" target="_blank" rel="noopender noreferrer">Constitutional Convention Question</a> A "yes" or "no" vote requiring the governor to call an election of delegates to serve at a convention for the purpose of revising or amending the Missouri Constitution. Any revisions or amendments will then be put to a vote of the people for their consideration. If passed, this measure will have no impact on taxes.</p>
        <p>Read more about all of these ballot measures from the <a href="https://www.sos.mo.gov/default.aspx?PageID=10056" target="_blank" rel="noopener noreferrer">Missouri Secretary of State</a>.</p>
      </>
    }
  ],
  headingChecklist: "My 2022 Voting Plan Checklist",
  paragraphChecklist:
    "Complete the checklist to ensure you have everything you need to vote successfully.",
  shareURL: "https://bhb.signaltheory.com",
  shareTitle: "Your Missouri Voting Plan Checklist",
  shareHashtag0: "#voteyourheartout",
  shareHashtag1: "#babeshelpinbabes",
  shareDescription: "The power is in our hands. Voting is our duty, our right, and our most powerful tool — use this voting plan checklist to ensure you have everything you need to vote successfully."

}