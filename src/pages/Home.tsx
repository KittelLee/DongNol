import { Link } from "react-router-dom";
import "../styles/Home.css";
import kakaoLogo from "../assets/icons/kakaotalk.svg";
import town from "../assets/images/town.png";

function Home() {
  return (
    <>
      <section className="section-first">
        <div className="text-box">
          <strong>
            파주, 일산 동네에서
            <br />
            하나가 되는 공간
          </strong>
          <p>
            지금 바로 카카오톡 오픈채팅방에 동네에서 놀던가를 검색하고
            소통해보세요.
          </p>
        </div>
        <div className="kakao-btn-box">
          <Link to="https://open.kakao.com/o/g8vBib9e" className="kakao-btn">
            <img src={kakaoLogo} alt="카카오톡로고" />
            카카오톡으로 이동하기
          </Link>
        </div>
        <div className="town">
          <img src={town} alt="동네이미지" />
        </div>
      </section>
      <section className="section-second"></section>
    </>
  );
}

export default Home;
