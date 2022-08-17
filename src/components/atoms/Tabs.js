import React, { useState } from 'react'
import Missouri from './Missouri'
import Kansas from './Kansas';


const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";

  return (
    <>
      <div className="tabs primary-yellow">
        <button
          className={`primary-btn ${checkActive(1, "active")}`}
          onClick={() => handleClick(1)}
        >
          MISSOURI
        </button>
        <button
          className={`primary-btn ${checkActive(2, "active")}`}
          onClick={() => handleClick(2)}
        >
          KANSAS
        </button>
      </div>
      <div className="panels">
        <div className={`panel ${checkActive(1, "active")}`}>
          <Missouri />
        </div>
        <div className={`panel ${checkActive(2, "active")}`}>
          <Kansas />
        </div>
      </div>
    </>
  )
}
export default Tabs