import Modal from "react-modal";
import "../styles/RoomModal.css";

interface RoomModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
};

function RoomModal({ isOpen, onRequestClose }: RoomModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customModalStyles}
      className="Modal"
    >
      <h2>Room Modal</h2>
      <button onClick={onRequestClose}>Close Modal</button>
    </Modal>
  );
}

export default RoomModal;
