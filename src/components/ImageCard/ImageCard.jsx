import style from "./ImageCard.module.css";

export default function ImageCard({ image, onModalImage }) {
  return (
    <div>
      <button
        className={style.cardBtn}
        onClick={() =>
          onModalImage({
            regularUrl: image.urls.regular,
            description: image.description,
            likes: image.likes,
            user: image.user,
          })
        }
      >
        <img
          className={style.cardImage}
          src={image.urls.small}
          alt={image.alt_description}
          width="90"
        />
      </button>
    </div>
  );
}
