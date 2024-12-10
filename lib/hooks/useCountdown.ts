import { useState, useEffect, useCallback } from "react";

export function useCountdown(endTime: string) {
  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const end = new Date(endTime).getTime();
    const difference = end - now;

    if (difference < 0) return 0;
    return difference;
  }, [endTime]);

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const distance = calculateTimeLeft();

      if (distance <= 0) {
        setTimeLeft("00:00:00:00");
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  return timeLeft;
}
