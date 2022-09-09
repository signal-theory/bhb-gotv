import React from "react";

const Sticky = (props) => {
  return (
    <>
      <button
        className={`sticky ${props.slideOutClass}`}
        onClick={props.handleStickyBtn}
        onKeyDown={props.handleStickyBtn}>
        <span className={props.stickyArrowClass}>MAKE A PLAN TO VOTE</span>
      </button>
      <div className={props.stickyClass}>
        <div className="popup-inner">
          <h1 className="white-text">{props.popupHeadline}</h1>
          <div className="popup-buttons">
            <button
              className={`secondary-btn ${props.stateBtnClass}`}
              onClick={props.handleSticky2}>
              KANSAS
            </button>
            <button className={`secondary-btn ${props.stateBtnClass}`}
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