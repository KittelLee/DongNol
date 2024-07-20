import { useState } from "react";
import CardIcon from "../assets/icons/card.svg";
import ListIcon from "../assets/icons/list.svg";
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
          <button onClick={handleButtonClick}>
            <img src={switchIcon} alt="아이콘" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Impromptu;
