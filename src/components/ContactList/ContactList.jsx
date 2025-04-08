import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

//
export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <li className={styles.item} key={contact.id}>
          <Contact contact={contact}></Contact>
        </li>
      ))}
    </ul>
  );
}
