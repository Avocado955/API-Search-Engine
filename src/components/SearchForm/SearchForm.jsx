import { useRef } from "react";
import styles from "./SearchForm.module.scss";

const SearchForm = ({ onSubmit }) => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const formValues = Object.fromEntries(formData.entries());
    onSubmit(formValues);
    formRef.current.reset();
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className={styles.searchBar}>
        <input
          type="text"
          name="generalTerm"
          id="generalTerm"
          placeholder="Enter Search Term Here"
          className={styles.searchBar_input}
        />
        <button type="submit" className={styles.searchBar_btn}>Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
