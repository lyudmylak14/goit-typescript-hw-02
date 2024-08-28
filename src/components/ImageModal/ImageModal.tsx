import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imgInfo: { src: string; alt: string };
}


export default function ImageModal({ isOpen, onRequestClose, imgInfo }: ImageModalProps) {
  const { src, alt } = imgInfo;
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={alt}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: 0,
          width: "auto",
          height: "auto",
          maxWidth: "90vw",
          maxHeight: "90vh",
          border: "none",
        },
      }}
    >
      <img
        onClick={onRequestClose}
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%" }}
      />
    </Modal>
  );
}
