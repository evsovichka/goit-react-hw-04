import style from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <button className={style.btn} onClick={onClick}>
      Load more
    </button>
  );
}
