// src/components/Counter/Counter.jsx
import { useEffect, useState } from "react";

export default function Counter({ value, duration = 1800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = Number(value) || 0;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1); // 0 → 1
      const current = Math.round(end * progress);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [value, duration]);

  return <>+{count}</>;
}
