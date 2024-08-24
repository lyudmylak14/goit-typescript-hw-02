import css from "./ImageCard.module.css";

export default function ImageCard({ small, regular, altDescription, onClick }) {
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
