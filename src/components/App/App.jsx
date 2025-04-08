import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

export default function App() {
  return (
    <div className="container">
      <div>
        <h1 style={{ fontSize: 38 }}>Phonebook</h1>
        <SearchBox />
      </div>

      <div>
        <ContactForm />
      </div>
      <ContactList />
    </div>
  );
}
