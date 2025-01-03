import { useEffect, useState } from "react";

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
    return <div>The countdown has ended!</div>;
  }

  return <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
    <div className="text-neutral-content flex flex-col p-2">
      <span className="countdown text-5xl">
        {timeLeft.days}<br/>days
      </span>
    </div>
    <div className="text-neutral-content flex flex-col p-2">
      <span className="countdown text-5xl">
        {timeLeft.hours}<br/>hours
      </span>
    </div>
    <div className="text-neutral-content flex flex-col p-2">
      <span className="countdown text-5xl">
        {timeLeft.minutes}<br/>mins
      </span>
    </div>
    <div className="text-neutral-content flex flex-col p-2">
      <span className="countdown text-5xl">
        {timeLeft.seconds}<br/>secs
      </span>
    </div>
  </div>
}