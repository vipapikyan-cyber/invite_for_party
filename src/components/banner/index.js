"use client";

import { motion } from "framer-motion";
import { slideIn } from "@/utils";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePause, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { LettersPullUp } from "@/components/letters-pull-up";
import { useCallback, useRef, useState } from "react";

export function Banner() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (window && document) {
      const element = document.getElementById("reletives");

      if (audioRef.current && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        return;
      }

      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Autoplay failed:", err);
        });

      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [isPlaying]);

  return (
    <section className={styles.banner} id="banner">
      <audio ref={audioRef}>
        <source src="/song.mp3" type="audio/mp3" />
      </audio>
      <div />
      <div>
        <h1 className={`heading ${styles.title}`}>Happy</h1>
        <h1 className={`heading ${styles.title}`}>New Year</h1>
        <h1 className={`heading ${styles.title}`}>2026</h1>
        <figure className={styles.invite_wrapper}>
          <motion.div
            className={styles.container}
            {...slideIn({
              direction: "down",
              type: "spring",
              delay: 0,
              duration: 0.8,
              once: true,
            })}
          >
          </motion.div>
        </figure>
        <div className={styles.invite_wrapper}>
          <LettersPullUp duration={0.9} className={`text ${styles.invite}`}>
            ԿՈՐՊՈՐԱՏԻՎ ՄԻՋՈՑԱՌՈւՄ
          </LettersPullUp>
        </div>
        <div className={styles.image_container}>
          <img src="/aleg.png" alt="" className={styles.decorative_image} />
        </div>
      </div>
      <FontAwesomeIcon
        icon={isPlaying ? faCirclePause : faCirclePlay}
        className={styles.play}
        onClick={handleScroll}
      />
    </section>
  );
}
