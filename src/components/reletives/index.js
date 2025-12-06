"use client";

import { motion } from "framer-motion";
import { opacityScale } from "@/utils";
import styles from "./index.module.css";

export function Reletives() {
  return (
    <section className={styles.reletives}>
      <p className={`heading ${styles.desc}`}>Ամանորը մտերիմների հետ հավաքվելու 
      և նախորդ տարվա երջանիկ պահերը հիշելու ժամանակն է։</p>
      <p className={styles.description_text}>
        ALEGPOL PROJECTS-ը շնորհավորում է Ձեր գալիք Ամանորը և հրավիրում տոնական ջերմ երեկույթի, նախորդ տարվա երջանիկ պահերը հիշելու և գալիք տարվա մաղթանքներով ու նվերներով կիսվելու համար։
      </p>
    </section>
  );
}
