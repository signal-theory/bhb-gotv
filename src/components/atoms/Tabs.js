import React from 'react'


const Tabs = (props) => {

  return (
    <>
      <div className="header-tabs" id="stateTabs">
        <div className="tabs">
          <button
            className={props.tabClass1}
            onClick={props.handleState1}
          >
            MISSOURI
          </button>
          <button
            className={props.tabClass2}
            onClick={props.handleState2}
          >
            KANSAS
          </button>
        </div>
      </div>

    </>
  )
}
export default Tabs