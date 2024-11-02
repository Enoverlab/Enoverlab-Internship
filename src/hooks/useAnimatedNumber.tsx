"use client";
import { useEffect, useState } from "react";

export default function useAnimatedNumber(
  endValue: number,
  duration: number,
): number {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    let startTime: number;
    const updateNumber = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const newValue = Math.min(
        Math.floor((progress / duration) * endValue),
        endValue,
      );
      setNumber(newValue);
      if (progress < duration) {
        requestAnimationFrame(updateNumber);
      }
    };
    requestAnimationFrame(updateNumber);
  }, [endValue, duration]);

  return number;
}
