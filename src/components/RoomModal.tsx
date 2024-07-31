import { useState } from "react";
import { firestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
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
    width: "40%",
    height: "460px",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    overflow: "auto",
    justifyContent: "center",
  },
};

function RoomModal({ isOpen, onRequestClose }: RoomModalProps) {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(firestore, "meetings"), {
        date,
        title,
        location,
        startDate,
        startTime,
        endDate,
        endTime,
      });
      onRequestClose();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customModalStyles}
      className="Modal"
    >
      <div className="roomModal-wrap">
        <h2>벙 개최하기</h2>
        <form className="roomModal-form" onSubmit={handleSubmit}>
          <p>벙 개최할날짜 입력</p>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <p>벙 제목 입력</p>
          <input
            type="text"
            placeholder="벙개 제목을 적어주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>장소 입력</p>
          <input
            type="text"
            placeholder="장소을 입력해주세요"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <p>시작시간 입력</p>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <p>끝나는시간 입력</p>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
          <div className="btn-wrap">
            <button type="submit">완료하기</button>
            <button type="button" onClick={onRequestClose}>
              창닫기
            </button>
          </div>
        </form>
        <button className="close-btn" onClick={onRequestClose}>
          X
        </button>
      </div>
    </Modal>
  );
}

export default RoomModal;
