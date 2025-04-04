import { FaUser, FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";
export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <div className={styles.contact}>
      <ul className={styles.info}>
        <li>
          <FaUser className={styles.icon} /> {name}
        </li>
        <li>
          <FaPhoneAlt className={styles.icon} />
          {number}
        </li>
      </ul>
      <button
        className={styles.deleteBtn}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}
