import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import Loader from "./Loader/Loader";
import { getImages } from "../api";

export default function App() {
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [targetImage, setTargetImage] = useState({ src: "", alt: "" });
  const [errorMessage, setErrorMessage] = useState("Ooops! Please reload!");

  const openModal = ({ src, alt }) => {
    setTargetImage({ src, alt });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setTargetImage({ src: "", alt: "" });
  };

  const setSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }

    const newImages = async () => {
      try {
        setIsLoad(true);
        setError(false);
        const images = await getImages(searchQuery, page);

        if (images.length < 11) {
          setErrorMessage("Sorry, we don't have another images");
          setPage(0);
          setError(true);
          return;
        }
        setErrorMessage("Ooops! Please reload!");

        setImages((prevImages) => {
          return [...prevImages, ...images];
        });
      } catch (e) {
        setError(true);
      } finally {
        setIsLoad(false);
      }
    };

    newImages();
  }, [page, searchQuery]);

  const addPage = () => {
    setPage(page + 1);
  };
  return (
    <>
      <SearchBar onSearch={setSearch} />
      {error ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <ImageGallery images={images} onTarget={openModal} />
      )}
      {isLoad && <Loader />}
      {page >= 1 && !isLoad && <LoadMoreBtn onAddPage={addPage} />}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imgInfo={targetImage}
      />
    </>
  );
}
