import { keywords } from "@/constants/keywords";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface SlipCardsProps {
  onFinish: (keyword: string) => void;
}
function SlipCards({ onFinish }: SlipCardsProps) {
  const [current, setCurrent] = useState(0);
  const controls = useAnimation();
  const canceledRef = useRef(false);

  const cycleLength = 3;

  //   const [maxIterations] = useState(() => Math.floor(Math.random() * 5) + 10);
  const totalIterationsRef = useRef(0);

  useEffect(() => {
    canceledRef.current = false;

    const run = async () => {
      if (canceledRef.current) return;

      totalIterationsRef.current += 1;
      const cycleIndex = (totalIterationsRef.current - 1) % cycleLength;

      let nextIndex = 0;

      if (cycleIndex === 0 || cycleIndex === 2) {
        nextIndex = 0; // id 1
      } else {
        nextIndex = Math.floor(Math.random() * (keywords.length - 1)) + 1;
      }

      setCurrent(nextIndex);

      await controls.start({
        y: [-50, 0],
        opacity: [0, 1],
        transition: { duration: 0.15, ease: "easeOut" },
      });

      if (!canceledRef.current) {
        setTimeout(run, 50);
      }
    };

    run();

    return () => {
      canceledRef.current = true;
    };
  }, [controls]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 120,
      }}
    >
      <motion.div
        animate={controls}
        style={{
          fontSize: 20,
          fontWeight: 500,
          minWidth: 0,
          textAlign: "center",
          backgroundColor: keywords[current].color,
          borderRadius: 4,
          padding: "4px 8px",
          color: "white",
        }}
      >
        {keywords[current].name}
      </motion.div>
    </div>
  );
}

export default SlipCards;
