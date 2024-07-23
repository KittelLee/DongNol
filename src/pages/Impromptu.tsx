import { useState } from "react";
import CardIcon from "../assets/icons/card.svg";
import ListIcon from "../assets/icons/list.svg";
import UploadIcon from "../assets/icons/upload.svg";
import SortIcon from "../assets/icons/sort.svg";
import "../styles/Impromptu.css";

function Impromptu() {
  const [switchIcon, setSwitchIcon] = useState(CardIcon);

  const handleButtonClick = () => {
    setSwitchIcon((prevIcon) => (prevIcon === CardIcon ? ListIcon : CardIcon));
  };

  return (
    <>
      <section className="impromptu-wrap">
        <div className="impromptu-header">
          <input type="text" placeholder="벙 이름으로 검색" />
          <button>
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
                <button>보류</button>
              </div>
              <div className="text-sort">
                <p>참석 {1}</p>
                <p>/</p>
                <p>보류 {3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Impromptu;
