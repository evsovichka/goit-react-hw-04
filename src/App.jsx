import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar";

import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { fetchImage } from "./components/api";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [modalImage, setModalImage] = useState({
    regularUrl: "",
    description: "",
    likes: 0,
    user: {},
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (inputValue.trim() === "") {
      return;
    }

    async function getImages() {
      try {
        setError(false);
        setLoader(true);
        const newImages = await fetchImage(inputValue, page);

        if (newImages.images.length === 0) {
          return toast.error(`No results found for "${inputValue}"`);
        }
        setImages((prevImages) => [...prevImages, ...newImages.images]);
        setTotalPages(newImages.totalPages);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getImages();
  }, [page, inputValue]);

  const handleSearch = (newValue) => {
    setInputValue(newValue);

    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleClickImg = (dataModalImg) => {
    setModalImage({
      regularUrl: dataModalImg.regularUrl,
      description: dataModalImg.description,
      likes: dataModalImg.likes,
      user: dataModalImg.user,
    });
    handleOpenModal();
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} onModalImage={handleClickImg} />
      )}
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {!loader && images.length > 0 && totalPages > page && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {isOpen && (
        <ImageModal modalImage={modalImage} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;
