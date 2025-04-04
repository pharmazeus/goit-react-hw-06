import styles from "./SearchBox.module.css";

export default function SearchBox({ onFilter, value }) {
  return (
    <div className={styles.searchBox}>
      <p className={styles.searchLabel}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
        className={styles.searchInput}
      />
    </div>
  );
}
