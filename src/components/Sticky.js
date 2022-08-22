import React from "react";

const Sticky = (props) => {
  return (
    <>
      <button
        className="sticky"
        onClick={props.handleSticky}
        onKeyDown={props.handleSticky}
      ><span>MAKE A PLAN TO</span></button>
      <div className={props.stickyClass}>
        <button
          className="close"
          onClick={props.handleClose}>
          <span>&times;</span>
        </button>
        <div className="popup-inner">
          <h1 className="white-text">Choose Your State</h1>
          <div className="popup-buttons">
            <button
              className="secondary-btn"
              onClick={props.handleSticky2}>
              KANSAS
            </button>
            <button className="secondary-btn"
              onClick={props.handleSticky1}>
              MISSOURI
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Sticky