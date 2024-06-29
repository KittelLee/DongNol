import "../styles/Footer.css";
import Logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="bottom-logo">
          <img src={Logo} alt="하단로고" />
        </div>
        <div>
          <p>주식회사 동네에서 놀던가</p>
          <br />
          <p>대표: 다나, 정섭</p>
          <p>주소: 경기도 파주시</p>
          <p>사이트 개발자: 필탁(이진욱)</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
