import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onAddPage: () => void;
}

export default function LoadMoreBtn({ onAddPage }: LoadMoreBtnProps) {
  return (
    <button className={css.loadMore} onClick={onAddPage}>
      Load more
    </button>
  );
}
