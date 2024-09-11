import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

export default function ImageGallery({ images, onModalImage }) {
  return (
    <ul>
      {images.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard image={image} onModalImage={onModalImage} />
          </li>
        );
      })}
    </ul>
  );
}
