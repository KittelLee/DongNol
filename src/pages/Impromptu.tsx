import { useState } from "react";
import CardIcon from "../assets/icons/card.svg";
import ListIcon from "../assets/icons/list.svg";
import UploadIcon from "../assets/icons/upload.svg";
import SortIcon from "../assets/icons/sort.svg";
import "../styles/Impromptu.css";
import RoomModal from "../components/RoomModal";

function Impromptu() {
  const [switchIcon, setSwitchIcon] = useState(CardIcon);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setSwitchIcon((prevIcon) => (prevIcon === CardIcon ? ListIcon : CardIcon));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="impromptu-wrap">
        <div className="impromptu-header">
          <input type="text" placeholder="벙 이름으로 검색" />
          <button onClick={openModal}>
            <img src={UploadIcon} alt="업로드 아이콘" />
          </button>
          <button>
            <img src={SortIcon} alt="정렬 아이콘" />
          </button>
          <button onClick={handleButtonClick}>
            <img src={switchIcon} alt="스위치 아이콘" />
          </button>
        </div>
        <div className="impromptu-main">
          <div className="main-section">
            <div className="main-left">
              <p>7월 23일 (화)</p>
            </div>
            <div className="empty" />
            <div className="main-right">
              <h2>벙개 제목</h2>
              <div className="text-sort">
                <p>시작시간</p>
                <p>~</p>
                <p>끝나는 시간</p>
              </div>
              <div className="text-sort">
                <button>참석</button>
                <button>불참석</button>
              </div>
              <div className="text-sort">
                <p>참석 {0}</p>
                <p>/</p>
                <p>불참석 {0}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RoomModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </>
  );
}

export default Impromptu;
