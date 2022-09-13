import React from 'react'


const Tabs = (props) => {

  return (
    <>
      <div className="header-tabs">
        <div className="tabs">
          <button
            className={props.tabClass1}
            onClick={props.handleState1}
          >
            <span className="tablet-hide">VOTING IN</span> MISSOURI
          </button>
          <button
            className={props.tabClass2}
            onClick={props.handleState2}
          >
            <span className="tablet-hide">VOTING IN</span> KANSAS
          </button>
        </div>
      </div>

    </>
  )
}
export default Tabs