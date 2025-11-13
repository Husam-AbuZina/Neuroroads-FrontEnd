import { useEffect, useState } from "react";

export default function Counter({ value, duration = 1800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const totalMs = duration;
    const incrementTime = 16; // ~60fps

    const step = Math.ceil(end / (totalMs / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <>+{count}</>;
}
