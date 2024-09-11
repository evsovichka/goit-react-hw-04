import style from "./ImageCard.module.css";

export default function ImageCard({ image, onModalImage }) {
  return (
    <div>
      <button
        onClick={() =>
          onModalImage({
            regularUrl: image.urls.regular,
            description: image.description,
            likes: image.likes,
            user: image.user,
          })
        }
      >
        <img src={image.urls.small} alt={image.alt_description} width="90" />
      </button>
    </div>
  );
}
