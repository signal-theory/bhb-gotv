import React, { useEffect, useState } from "react";

const Clock = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState();

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time > 0) {
      setDays(Math.ceil(time / (1000 * 60 * 60 * 24)));
      setHours(Math.ceil((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.ceil((time / 1000 / 60) % 60));
      // setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <>
      <div className="time">
        {leading0(days)}
      </div>
      <div className="time colon">:</div>
      <div className="time">
        {leading0(hours)}
      </div>
      <div className="time colon">:</div>
      <div className="time">
        {leading0(minutes)}
      </div>
    </>
  );
};

export default Clock;
