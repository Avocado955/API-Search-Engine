import { useRef } from "react";

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
      <div>
        <input
          type="text"
          name="generalTerm"
          id="generalTerm"
          placeholder="Enter Search Term Here"
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
