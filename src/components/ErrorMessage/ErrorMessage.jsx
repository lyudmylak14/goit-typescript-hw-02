import css from "./ErrorMessage.module.css";

export default function ErrorMessage({ message }) {
  return <span className={css.errorMessage}>{message}</span>;
}
