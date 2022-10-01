import React from "react";
import { useEffect, useState } from "react";

function Counter() {
  const [count, setState] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setState((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div>{count}</div>;
}

export default Counter;
