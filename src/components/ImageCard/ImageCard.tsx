import css from "./ImageCard.module.css";

interface ImageCardProps {
  small: string;
  regular: string;
  altDescription: string;
  onClick: (event: React.MouseEvent<HTMLImageElement>) => void;
}

export default function ImageCard({ small, regular, altDescription, onClick }: ImageCardProps) {
  return (
    <div className={css.imageBorder}>
      <img
        className={css.image}
        src={small}
        data-modal={regular}
        alt={altDescription}
        onClick={onClick}
      />
    </div>
  );
}
