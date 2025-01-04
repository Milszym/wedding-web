import { useEffect, useState } from "react";
import "./title.css"

interface CountdownProps {
  targetDate: Date
}

export const Countdown = (props: CountdownProps) => {
  
  const calculateTimeLeft = () => {
    const difference = props.targetDate.getTime() - new Date().getTime();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null; // Time has expired
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000, []);

    return () => clearInterval(timer); // Clean up timer on component unmount
  }, [props.targetDate]);

  if (!timeLeft) {
    return <div>Dziękujemy za spędzenie z nami tego wyjątkowego dnia!</div>;
  }

  return <div className="flex items-center justify-center grid auto-cols-max grid-flow-col gap-5 text-center">
    <div className="flex flex-col p-2">
      <span className="countdown text-5xl">
        {timeLeft.days}<br/>
      </span>
      <br/>
      <span className="countdownLabel">dni</span>
    </div>
    <div className="flex flex-col p-2">
      <span className="countdown text-5xl">
        {timeLeft.hours}
      </span>
      <br/>
      <span className="countdownLabel">godz</span>
    </div>
    <div className="flex flex-col p-2">
      <span className="countdown text-5xl">
        {timeLeft.minutes}<br/>
      </span>
      <br/>
      <span className="countdownLabel">min</span>
    </div>
    <div className="flex flex-col p-2">
      <span className="countdown text-5xl">
        {timeLeft.seconds}<br/>
      </span>
      <br/>
      <span className="countdownLabel">sek</span>
    </div>
  </div>
}