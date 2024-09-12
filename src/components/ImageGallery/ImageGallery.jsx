import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

export default function ImageGallery({ images, onModalImage }) {
  return (
    <ul className={style.cardList}>
      {images.map((image) => {
        return (
          <li key={image.id} className={style.item}>
            <ImageCard image={image} onModalImage={onModalImage} />
          </li>
        );
      })}
    </ul>
  );
}
