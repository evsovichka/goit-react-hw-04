import toast from "react-hot-toast";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const handleSearch = (event) => {
    event.preventDefault();
    const value = event.target.searchText.value;
    if (value === "") {
      toast.error("Please enter text to search for images");
      return;
    }
    onSubmit(value);
    event.target.reset();
  };

  return (
    <header>
      <form onSubmit={handleSearch}>
        <input
          name="searchText"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
