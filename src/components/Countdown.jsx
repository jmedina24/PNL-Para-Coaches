import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import "../css/countdown.css";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const now = DateTime.now().setZone("America/Santiago");
    const target = DateTime.fromISO("2025-08-15T23:59:59", {
      zone: "America/Santiago",
    });

    const diff = target
      .diff(now, ["days", "hours", "minutes", "seconds"])
      .toObject();

    if (diff.seconds < 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    return {
      days: String(Math.floor(diff.days)).padStart(2, "0"),
      hours: String(Math.floor(diff.hours)).padStart(2, "0"),
      minutes: String(Math.floor(diff.minutes)).padStart(2, "0"),
      seconds: String(Math.floor(diff.seconds)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
  <div className="countdown-container">
    <p className="countdown-title">Las inscripciones cierran en:</p>
    <div className="countdown">
        <div className="countdown-segment">
            <span className="countdown-number">{timeLeft.days}</span>
            <span className="countdown-label">DÍAS</span>
        </div>
        <div className="countdown-segment">
            <span className="countdown-number">{timeLeft.hours}</span>
            <span className="countdown-label">HORAS</span>
        </div> 
        <div className="countdown-segment">
            <span className="countdown-number">{timeLeft.minutes}</span>
            <span className="countdown-label">MINUTOS</span>
        </div>
        <div className="countdown-segment">
            <span className="countdown-number"><span className="seconds">{timeLeft.seconds}</span></span>
            <span className="countdown-label"><span className="seconds">SEGUNDOS</span></span>
        </div>
    </div>
  </div>
)};

export default Countdown;
