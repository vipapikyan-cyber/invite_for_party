"use client";

import { motion } from "framer-motion";
import { LettersPullUp } from "@/components/letters-pull-up";
import Link from "next/link";
import styles from "./index.module.css";
import { opacityScale } from "@/utils";

export function DayPlan() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Օրվա ծրագիրը</h2>
       {/* Ekexeci */}
       <div className={styles.wrapper}>
        {/* <img src="/church.svg" alt="Church" className={styles.image} /> */}
        <LettersPullUp duration={0.7} className={styles.place_name}>
          ՄԻՋՈՑԱՌՄԱՆ ՍԿԻԶԲ
        </LettersPullUp>
        <p className={styles.time}>16:00</p>
        <p className={styles.address}>Imperial Restaurant</p>
        <p className={styles.address}>ք․ Գյումրի, Խրիմյան Հայրիկ 38/6</p>
        <Link
          href="https://maps.app.goo.gl/wysbL3rQzzJBNAdk8"
          target="_blank"
          className={styles.link}
        >
          Ինչպես հասնել
        </Link>
      </div>
      <div className={styles.wrapper}>
        {/* <img src="/hearts.svg" alt="Hearts" className={styles.image} /> */}
        <LettersPullUp duration={1} className={styles.place_name}>
          Welcome drink and Photobooth
        </LettersPullUp>
        <p className={styles.time}>16:00-16:50</p>
      </div>
     
      {/* Pesayi tun */}
      <div className={styles.wrapper}>
        <LettersPullUp duration={0.7} className={styles.place_name}>
          ԽԱՂԱՐԿՈՒԹՅՈՒՆ
        </LettersPullUp>
        <p className={styles.time}>21:00</p>
          <div className={styles.place_name_wrapper}>
          <p className={styles.address}>2 անձի համար նախատեսված 2-օրյա հանգիստ՝
              Radisson Blu Yerevan հյուրանոցում</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <LettersPullUp duration={0.7} className={styles.place_name}>
          ՏՈՐԹԻ ԱՐԱՐՈՂԹՈՒՅՈՒՆ և DJ Party
        </LettersPullUp>
        <p className={styles.time}>21:40</p>
      </div>
    </section>
  );
}
