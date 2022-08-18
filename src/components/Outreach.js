import React from "react"
// import { Fade } from "react-awesome-reveal";
import { outreachData } from "../data-outreach"

const Outreach = () => {
  return (
    <div className="section pink" id="outreach" tabIndex={-1}>
      {/* <Fade> */}
      <img className="heart-sticker" src={outreachData.sticker} alt="vote heart sticker"></img>
      {/* </Fade> */}
      <div className="container">
        <div className="outreach-wrapper">
          <div className="outreach-header">
            <p>{outreachData.heading}</p>
            {/* <Fade> */}
            <img src={outreachData.image} alt="outreach"></img>
            {/* </Fade> */}
          </div>
          <div className="outreach-content">
            <div className="column">
              <h2>
                {outreachData.title1}
              </h2>
              <p>
                {outreachData.paragraph1}
              </p>
            </div>
            <div className="column">
              <h2>
                {outreachData.title2}
              </h2>
              <p>
                {outreachData.paragraph2}
              </p>
            </div>
          </div>
          {/* <Fade> */}
          <h1>{outreachData.heading2}</h1>
          {/* </Fade> */}
          <div className="outreach-calendar">
            {outreachData.calendar.map((item) => (
              <>
                <div className="column c1" key={item.id}>
                  <h2>{item.date}</h2>
                </div>
                <div className="column c2" key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="column c3" key={item.id}>
                  <h3>{item.location}</h3>
                  <p>{item.directions}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Outreach
