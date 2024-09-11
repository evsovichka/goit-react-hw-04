import { useMemo } from "react";
import ReactModal from "react-modal";

export default function ImageModal({
  modalImage: {
    regularUrl,
    description,
    likes,
    user: { name, social },
  },
  onClose,
}) {
  return (
    <ReactModal
      isOpen={true}
      ariaHideApp={false}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={{ overlay: { backgroundColor: "rgba(60, 60, 60, 0.9)" } }}
    >
      <div>
        <img src={regularUrl} alt={description} width="100" />
        {name && <b>Author: {name}</b>}
        {social.instagram_username && (
          <p>
            <b>Author's instagram:</b> @{social.instagram_username}
          </p>
        )}
        {description && (
          <p>
            <b>About photo:</b> {description}
          </p>
        )}
        <p>
          <b>Likes:</b> {likes}
        </p>
      </div>
    </ReactModal>
  );
}
