import React, { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import { missouriData } from "../../data/data-missouri"
import moIcon from "../../images/missouri-icon.svg"
import MoChecklist from "./MoChecklist"

const Missouri = (props) => {
  //const today = new Date(Date.now());
  const [toggled, setToggled] = useState(false)
  const toggleAccordion = (index) => {
    if (toggled === index) {
      return setToggled(null);
    }
    setToggled(index);
  }
  // COMPARE DATES
  const date0 = Date.parse("October 12, 2022") - Date.parse(new Date());
  const daysUntilDate0 = Math.floor(date0 / (1000 * 60 * 60 * 24));
  const date1 = Date.parse("October 26, 2022") - Date.parse(new Date());
  const daysUntilDate1 = Math.floor(date1 / (1000 * 60 * 60 * 24));
  const date2 = Date.parse("November 7, 2022") - Date.parse(new Date());
  const daysUntilDate2 = Math.floor(date2 / (1000 * 60 * 60 * 24));
  const date3 = Date.parse("November 8, 2022") - Date.parse(new Date());
  const daysUntilDate3 = Math.floor(date3 / (1000 * 60 * 60 * 24));

  return (
    <div className="panels">
      <div className="section registration-links">
        <Fade>
          <h1>{missouriData.heading}</h1>
        </Fade>
        <div className="links-wrapper mo">
          {missouriData.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.image} alt={link.title} />
            </a>
          ))}
        </div>
      </div>
      <div className="section important-dates pink">
        <Fade>
          <h1>{missouriData.headingDates}<img src={moIcon} alt="missouri state icon" /></h1>
        </Fade>
        <div className="dates-wrapper">
          <div className="dates-content">
            <h3 className={`column h3 ${daysUntilDate0 < -1 ? "past" : "upcoming"}`}>
              {missouriData.dates[0].date}
            </h3>
            <h4 className={`column h4 ${daysUntilDate0 < -1 ? "past" : "upcoming"}`}>
              {missouriData.dates[0].title}
            </h4>
            <h3 className={`column h3 ${daysUntilDate1 < -1 ? "past" : "upcoming"}`}>
              {missouriData.dates[1].date}
            </h3>
            <h4 className={`column h4 ${daysUntilDate1 < -1 ? "past" : "upcoming"}`}>
              {missouriData.dates[1].title}
            </h4>
            <h3 className={`column h3 ${daysUntilDate2 < -1 ? "past" : "upcoming"}`}>
              {missouriData.dates[2].date}
            </h3>
            <h4 className={`column h4 ${daysUntilDate2 < -1 ? "past" : "upcoming"}`}>
              {missouriData.dates[2].title}
            </h4>
            <h3 className={`column h3 ${daysUntilDate3 < -1 ? "past" : "upcoming"}`}>
              {missouriData.dates[3].date}
            </h3>
            <h4 className={`column h4 ${daysUntilDate3 < -1 ? "past" : "upcoming"}`}>
              {missouriData.dates[3].title}
            </h4>
          </div>
          <div id="faqs"></div>
        </div>
      </div>
      <div className="section faqs primary-yellow">
        <Fade>
          <h1>{missouriData.headingFAQs}</h1>
        </Fade>
        <div class="accordion-wrapper">
          {missouriData.faqs.map((item, index) => (
            <div className="accordion-item">
              <button className={`accordion-title ${toggled === index ? 'active' : ''}`} key={item.index} onClick={() => toggleAccordion(index)}>
                <h3>{item.title}</h3>
              </button>
              <div className={`accordion-panel ${toggled === index ? 'open' : 'closed'}`} key={item.index}>
                {item.description}
              </div>
            </div>
          ))}
          <div id="checklist"></div>
        </div>
      </div>
      <MoChecklist />
    </div>
  )
}

export default Missouri