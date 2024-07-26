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
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "400px",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    overflow: "auto",
    justifyContent: "center",
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
      <div className="roomModal-wrap">
        <h2>벙 개최하기</h2>
        <form className="roomModal-form">
          <p>벙 개최할날짜 입력</p>
          <input type="date" />
          <input type="text" placeholder="벙개 제목을 적어주세요" />
          <p>시작시간 입력</p>
          <input type="date" />
          <input type="time" />
          <p>끝나는시간 입력</p>
          <input type="date" />
          <input type="time" />
        </form>
        <div className="btn-wrap">
          <button>완료하기</button>
          <button onClick={onRequestClose}>창닫기</button>
        </div>
        <button className="close-btn">X</button>
      </div>
    </Modal>
  );
}

export default RoomModal;
