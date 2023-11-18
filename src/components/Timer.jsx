import React, { useState, useRef, useEffect } from "react";

function Timer({ onTimerFinish }) {
  const [minutes, setMinutes] = useState(6); // Set the initial minutes
  const [seconds, setSeconds] = useState(45); // Set the initial seconds
  const [timerStarted, setTimerStarted] = useState(false);
  var reset = true;

  useEffect(() => {
    if (!timerStarted) {
      // If the timer hasn't started yet, delay the start by 60 seconds
      const delayTimer = setTimeout(() => {
        setTimerStarted(true);
        reset = true;
      }, 56000);

      // Cleanup the delay timer on component unmount
      return () => clearTimeout(delayTimer);
    }

    const timer = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        // When the timer reaches 0, clear the interval and finish the timer
        clearInterval(timer);
        if (reset) {
          onTimerFinish();
          reset = false;
        }
      } else {
        // Update minutes and seconds
        const prevMinutes = minutes;
        const prevSeconds = seconds;
        if (seconds === 0) {
          setSeconds(59);
          setMinutes((prevMinutes) => (prevMinutes > 0 ? prevMinutes - 1 : 0));
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [onTimerFinish, timerStarted, minutes, seconds]);

  return (
    <div>
      <p>
        Timer: {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </p>
      {/* You can customize the timer display based on your UI requirements */}
    </div>
  );
}
export default Timer;
