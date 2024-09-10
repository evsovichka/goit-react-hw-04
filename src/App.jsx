import { useState } from "react";
import { Toaster } from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar";

import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [inputValue, setInputValue] = useState("");

  // console.log(inputValue);
  return (
    <>
      <div>
        <Toaster />
      </div>
      <SearchBar onSubmit={setInputValue} />
      <ImageGallery />
      <Loader />
      <ErrorMessage />
      <LoadMoreBtn />
    </>
  );
}

export default App;
