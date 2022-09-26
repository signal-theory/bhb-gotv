import React from 'react'
import BTN1 from "../images/btn-check-registration.svg"
import BTN2 from "../images/btn-register-to-vote.svg"
import BTN3 from "../images/btn-register-paper-english.svg"
import BTN4 from "../images/btn-register-paper-espanol.svg"
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
      formatDate: '818',
      title: "Last day to register to vote",
    },
    {
      date: 'OCT. 19',
      formatDate: '1019',
      title: "First day advance vote ballots are mailed and early in-person voting begins",
    },
    {
      date: 'NOV. 1',
      formatDate: '1101',
      title: "Last day to request advanced voting ballot",
    },
    {
      date: 'NOV. 8',
      formatDate: '1108',
      title: "Election day",
    },
  ],
  headingFAQs: "Kansas FAQs",
  faqs: [
    {
      title: "Is it too late to register to vote?",
      description: <>
        <p className="highlight">Election day in Kansas is November 8, 2022. <strong>You can register to vote right now</strong> <a href="https://www.kdor.ks.gov/Apps/VoterReg" target="_blank" rel="noopener noreferrer">here</a>.</p>
        <p><strong>Register by mail:</strong> Voter registration must be postmarked by 10/18/2022.</p>
        <p><strong>Register in person:</strong> Voter registration must be received by 10/18/2022.</p>
        <p><strong>Request an Advanced Voting Ballot By Mail:</strong> <a href="https://www.sos.ks.gov/forms//elections/AV1.pdf" target="_blank" rel="noopener noreferrer">English</a>/<a href="https://www.sos.ks.gov/forms//elections/Spanish/AV1%20(Spanish).pdf" target="_blank" rel="noopener noreferrer">Español</a>, application must be received by: 11/01/22</p>
        <p><strong>Return your completed Advanced Voting Ballot by mail or in person:</strong> Ballot must be received by 11/08/2022.</p></>,
    },
    {
      title: "How can I make sure I'm registered to vote?",
      description: <p>You can check your voter registration <a href="https://myvoteinfo.voteks.org/voterview/" target="_blank" rel="noopener noreferrer">here</a></p>,
    },
    {
      title: "What are the early voting locations?",
      description: <><p><a href="https://www.usvotefoundation.org/vote/eoddomestic.htm" target="_blank" rel="noopener noreferrer">Find your early voting location</a>, it may be different than your election day polling location.</p>
        <p>More information about advanced voting regulations are available from the <a href="https://sos.ks.gov/elections/elections-faq.html#Advance-Voting">Kansas Secretary of State</a>.</p>
      </>,
    },
    {
      title: "What are the election day voting locations?",
      description: <><p>Confirm your address, party association, mail-in ballot statuses, and polling place locations <a href="https://myvoteinfo.voteks.org/VoterView"> with this lookup tool</a>.</p>
      </>,
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
    },
    {
      title: "Who is running for election in Kansas?",
      description: <p>View the elections you will be voting in with this <a href="https://ballotpedia.org/Kansas_Sample_Ballot" target="_blank" rel="noopener noreferrer">sample ballot lookup tool.</a></p>
    },
    {
      title: "Are there any constitutional amendments on the ballot this year?",
      description: <>
        <p>Yes! This year constitutional amendments for administrative rules and regulations and sheriff elections will be on the ballot during the general election on November 8, 2022. The constitutional amendment will be on ALL ballots regardless of one's party or affiliation.</p>
        <p><a href="https://sos.ks.gov/elections/22elec/2022-General-Election-Constitutional-Amendment-HCR-5014.pdf" target="_blank" rel="noopender noreferrer">Question 1</a> is a vote for or against allowing legislative oversight of administrative rules and regulations set by the executive branch of government. This would allow legislation to revoke or suspend of any law upon a vote of a majority of the elected members of the house.</p>
        <p><a href="https://sos.ks.gov/elections/22elec/2022-General-Election-Constitutional-Amendment-HCR-5022.pdf" target="_blank" rel="noopender noreferrer">Question 2</a> would preserve the right of citizens of each county that elected a county sheriff as of January 11, 2022, to continue electing the county sheriff. The amendment would also provide that a county sheriff only may be involuntarily removed from office pursuant to either a recall election or a writ of quo warranto initiated by the attorney general.</p>
        <p>Read more about both of these ballot measures from the <a href="https://www.sos.mo.gov/default.aspx?PageID=10056" target="_blank" rel="noopener noreferrer">Kansas Secretary of State</a>.</p>
      </>
    }
  ],
  headingChecklist: "My 2022 Voting Plan Checklist",
  paragraphChecklist:
    "Complete the checklist to ensure you have everything you need to vote successfully.",
  shareURL: "https://bhb.signaltheory.com/static/Checklist_Kansas-7a3227754c7dc1f96f51be4a1c8937ad.pdf",
  shareTitle: "Make A Plan To Vote In Kansas",
  shareHashtag0: "#voteyourheartout",
  shareHashtag1: "#babeshelpinbabes",
  shareDescription: "The power is in our hands. Voting is our duty, our right, and our most powerful tool — we're here to make democratic participation more accessible and successful than ever before."
}