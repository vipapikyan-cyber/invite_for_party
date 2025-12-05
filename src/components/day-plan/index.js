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
      {/* Harsi tun */}
      <div className={styles.wrapper}>
        <img src="/hearts.svg" alt="Hearts" className={styles.image} />
        <LettersPullUp duration={1} className={styles.place_name}>
          ՀԱՐՍԻ ՏՈՒՆ
        </LettersPullUp>
        {/* <p className={styles.place_name}></p> */}
        <p className={styles.time}>12:30</p>
        <motion.div
          className={styles.banner}
          {...opacityScale({ duration: 0.7, once: false })}
        >
          <img
            src="/wife_house_image.jpg"
            alt="Wife home"
            className={styles.place_img}
          />
        </motion.div>

        <p className={styles.address}>Գյումրի, Արևելյան 3/1</p>
        <Link
          href="https://maps.app.goo.gl/B7yLu1Azors98XSD9"
          target="_blank"
          className={styles.link}
        >
          Ինչպես հասնել
        </Link>
      </div>
      {/* Ekexeci */}
      <div className={styles.wrapper}>
        <img src="/church.svg" alt="Church" className={styles.image} />
        <LettersPullUp duration={0.7} className={styles.place_name}>
          ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ
        </LettersPullUp>
        <p className={styles.time}>14:00</p>
        <p className={styles.name}>
          Սուրբ&nbsp;&nbsp;Յոթ&nbsp;&nbsp;Վերք&nbsp;&nbsp;Եկեղեցի
        </p>
        <motion.div
          className={styles.banner}
          {...opacityScale({ duration: 0.5, once: false })}
        >
          <img src="/7verk.jpg" alt="Church" className={styles.place_img} />
        </motion.div>
        <p className={styles.address}>Գյումրի, Վարդանանց հրապարակ</p>
        <Link
          href="https://maps.app.goo.gl/mwy6Cvh6JYTyFZFX7"
          target="_blank"
          className={styles.link}
        >
          Ինչպես հասնել
        </Link>
      </div>
      {/* Pesayi tun */}
      <div className={styles.wrapper}>
        <img src="/hearts.svg" alt="Hearts" className={styles.image} />
        <LettersPullUp duration={0.7} className={styles.place_name}>
          ՓԵՍԱՅԻ ՏՈՒՆ
        </LettersPullUp>
        <p className={styles.time}>15:00</p>
        <motion.div
          className={styles.banner}
          {...opacityScale({ duration: 0.5, once: false })}
        >
          <img src="/groom.jpg" alt="Groom" className={styles.place_img} />
        </motion.div>
        <p className={styles.address}>Գյումրի, Արևելյան 2/7</p>
        <Link
          href="https://maps.app.goo.gl/4YtyMyuj7dCio8bz9"
          target="_blank"
          className={styles.link}
        >
          Ինչպես հասնել
        </Link>
      </div>
      {/* Restoran */}
      <div className={styles.wrapper}>
        <img src="/rest.svg" alt="Rest" className={styles.image} />
        <LettersPullUp duration={1} className={styles.place_name}>
          ՀԱՐՍԱՆՅԱՑ &nbsp;&nbsp;ՀԱՆԴԻՍՈՒԹՅՈՒՆ
        </LettersPullUp>
        <p className={styles.time}>16:30</p>
        <p className={styles.name}>Տիգրան Մեծ Համալիր</p>
        <motion.div
          className={styles.banner}
          {...opacityScale({ duration: 0.7, once: false })}
        >
          <img
            src="/restaurant3.PNG"
            alt="Wife home"
            className={styles.place_img}
          />
        </motion.div>

        <p className={styles.address}>Գյումրի, Տերյան 143</p>
        <Link
          href="https://maps.app.goo.gl/rNKLL8Jq3sErw4LRA"
          className={styles.link}
          target="_blank"
        >
          Ինչպես հասնել
        </Link>
      </div>
    </section>
  );
}
