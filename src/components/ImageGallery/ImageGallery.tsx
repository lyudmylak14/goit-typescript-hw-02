import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";


interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  images: Image[];
  onTarget: (image: { src: string; alt: string }) => void;
}

export default function ImageGallery({ images, onTarget }: ImageGalleryProps) {
  const targetImage = (e: React.MouseEvent<HTMLImageElement>) => {
    const targetElement = e.currentTarget;
    onTarget({
      src: targetElement.dataset.modal || "",
      alt: targetElement.alt,
    });
  };

  return (
    <ul className={css.list}>
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