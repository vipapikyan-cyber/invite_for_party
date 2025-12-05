"use client";

import { useState, useEffect, useMemo, Fragment } from "react";
import styles from "./index.module.css";

const calculateTimeLeft = (targetDate) => {
  const difference = new Date(targetDate) - new Date();
  let timeLeft = [];

  if (difference > 0) {
    timeLeft = [
      {
        value: Math.floor(difference / (1000 * 60 * 60 * 24)),
        text: "օր",
      },
      {
        value: Math.floor((difference / (1000 * 60 * 60)) % 24),
        text: "ժամ",
      },
      {
        value: Math.floor((difference / 1000 / 60) % 60),
        text: "րոպե",
      },
      {
        value: Math.floor((difference / 1000) % 60),
        text: "վայրկյան",
      },
    ];
  }

  return timeLeft;
};

export function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={styles.wrapper} suppressHydrationWarning id="reletives">
      {!timeLeft.length ||
      (timeLeft[0].value <= 0 &&
        timeLeft[1].value <= 0 &&
        timeLeft[2].value <= 0 &&
        timeLeft[3].value <= 0) ? (
        <p className={styles.pass}>մեր հարսանիքի օրն արդեն անցել է</p>
      ) : (
        <>
          <h3 className={styles.title}>20 ՕԳՈՍՏՈՍ 2025</h3>
          <p className={styles.desc}>մեր հարսանիքին մնացել է</p>
          <div className={styles.container}>
            {timeLeft.map((interval, index) => (
              <Fragment key={interval.text}>
                <p className={styles.section}>
                  <span className={styles.number}>
                    {interval.value || "00"}
                  </span>
                  <span className={styles.text}>{interval.text}</span>
                </p>
                {index !== timeLeft.length - 1 && (
                  <div className={styles.separator} />
                )}
              </Fragment>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
