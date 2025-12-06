"use client";

import { sendEmail } from "@/actions";
import styles from "./index.module.css";
import { useRef } from "react";
import { LettersPullUp } from "../letters-pull-up";
import { Button } from "./button";

export function Form() {
  const formRef = useRef(null);

  const handleSubmit = async (formData) => {
    // const invitedBy = formData.get("invitedBy") || "";
    const nameSurname = formData.get("nameSurname") || "";
    const willCome = formData.get("willCome") || "";

    if (!nameSurname) {
      alert("Խնդրում ենք լրացնել բոլոր դաշտերը։");
      return;
    }

    const { message, success } = await sendEmail({
      nameSurname,
      willCome,
    });

    if (success) {
      formRef.current?.reset();
    }

    alert(message);
  };

  return (
    <form ref={formRef} action={handleSubmit} className={styles.form}>
      <h3 className={styles.title}>
        Խնդրում ենք հաստատել Ձեր ներկայությունը միջոցառմանը
        <br />
        մինչև 10․12․2025
      </h3>
      {/* <div className={styles.radio_wrapper}>
        <input
          type="radio"
          id="wife"
          name="invitedBy"
          value="Հարսի կողմ"
          className={styles.radio}
        />
        <label htmlFor="wife" className={styles.radio_label}>
          Հարսի կողմ
        </label>
      </div> */}
      {/* <div className={styles.radio_wrapper}>
        <input
          type="radio"
          id="fiance"
          name="invitedBy"
          value="Փեսայի կողմ"
          className={styles.radio}
        />
        <label htmlFor="fiance" className={styles.radio_label}>
          Փեսայի կողմ
        </label>
      </div> */}
      <input
        name="nameSurname"
        type="text"
        className={styles.input}
        placeholder="Անուն Ազգանուն"
      />
      <div className={styles.radio_wrapper}>
        <input
          type="radio"
          id="willCome"
          name="willCome"
          value="Ես կգամ"
          className={styles.radio}
          defaultChecked
        />
        <label htmlFor="willCome" className={styles.radio_label}>
          Ես կգամ
        </label>
      </div>
      <div className={styles.radio_wrapper}>
        <input
          type="radio"
          id="cant-come"
          name="willCome"
          value="Ցավոք չեմ կարող ներկա գտնվել ։("
          className={styles.radio}
        />
        <label htmlFor="cant-come" className={styles.radio_label}>
          Ցավոք չեմ կարող ներկա գտնվել ։(
        </label>
      </div>

      <Button />
      <LettersPullUp duration={1} className={styles.happy_end}>
        Սիրով սպասում ենք Ձեզ
      </LettersPullUp>
      <div className={styles.partners_container}>
        <img src="/partner1.png" alt="Partner 1" className={styles.partner_logo} />
        <img src="/partner4.png" alt="Partner 4" className={styles.partner_logo} />
        <img src="/partner2.png" alt="Partner 2" className={styles.partner_logo} />
        <img src="/partner3.png" alt="Partner 3" className={styles.partner_logo} />
        <img src="/partner5.png" alt="Partner 5" className={styles.partner_logo} style={{ 
          // backgroundColor: 'rgba(255, 255, 255, 0.4)'
        }}/>
      </div>
    </form>
  );
}
