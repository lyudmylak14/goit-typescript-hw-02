import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onAddPage }) {
  return (
    <button className={css.loadMore} onClick={onAddPage}>
      Load more
    </button>
  );
}
