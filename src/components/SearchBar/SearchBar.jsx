import toast from "react-hot-toast";
import style from "./SearchBar.module.css";
import { MdOutlineImageSearch } from "react-icons/md";

import { fetchImage } from "../api";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const value = event.target.searchText.value;

    if (value.trim() === "") {
      toast.error("Please enter text to search for images");
      return;
    }
    onSubmit(value);

    event.target.reset();
  };

  return (
    <header className={style.header}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          className={style.input}
          name="searchText"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={style.btn} type="submit">
          <MdOutlineImageSearch size={35} />
        </button>
      </form>
    </header>
  );
}
