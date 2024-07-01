import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Logo from "../assets/images/logo.png";
import bars from "../assets/icons/bars.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header">
      <div className="header-wrap">
        <div className="logo-box">
          <Link to="/" className="logo">
            <img src={Logo} alt="로고" />
          </Link>
        </div>
        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="navbar">
            <li>
              <Link to="/notice" className="nav-list">
                모임회칙
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-list">
                벙개최하기
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-list">
                일정보기
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-list">
                정산하기
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="nav-list">
                갤러리
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-list">
                회원가입
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-list">
                로그인
              </Link>
            </li>
          </ul>
        </nav>
        <button className="toggle-btn" onClick={toggleMenu}>
          <img src={bars} alt="메뉴바" />
        </button>
      </div>
    </header>
  );
}

export default Header;
