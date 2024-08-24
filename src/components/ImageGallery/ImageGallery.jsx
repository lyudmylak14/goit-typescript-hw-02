import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onTarget }) {
  const targetImage = (e) => {
    const targetElement = e.target;
    if (targetElement.tagName !== "IMG") {
      return;
    }
    onTarget({
      src: targetElement.dataset.modal,
      alt: targetElement.alt,
    });
  };

  return (
    <ul className={css.list} >
      {images.map(({ urls, alt_description, id }) => {
        const { small, regular } = urls;
        return (
          <li key={id}>
            <ImageCard
              small={small}
              regular={regular}
              altDescription={alt_description}
              onClick={targetImage}
            />
          </li>
        );
      })}
    </ul>
  );
}
