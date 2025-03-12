import { useEffect, useState } from "react";

type CountdownProps = {
  targetDate: string; // Data no formato "YYYY-MM-DDTHH:mm:ss"
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-fit mt-8">
      {/* <h2 className="mb-2 text-black/40 font-semibold">Tempo Restante</h2> */}
      <div className="flex flex-row items-center justify-center gap-8 bg-primary/10 text-primary px-8 py-2 rounded-lg">
        <div className="flex flex-col justify-center">
          <p className="font-bold text-2xl">{timeLeft.days}</p>
          <p className="text-black/60">Dias</p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-bold text-2xl">{timeLeft.hours}</p>
          <p className="text-black/60">Horas</p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-bold text-2xl">{timeLeft.minutes}</p>
          <p className="text-black/60">Minutos</p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-bold text-2xl">{timeLeft.seconds}</p>
          <p className="text-black/60">Segundos</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
