import { useFormStatus } from "react-dom";
import styles from "./index.module.css";

export function Button() {
  const { pending } = useFormStatus();

  return (
    <button className={styles.submit} type="submit" disabled={pending}>
      Ուղարկել
    </button>
  );
}
