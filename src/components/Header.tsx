import { Link } from "react-router-dom";
import "../styles/Header.css";
import Logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-wrap">
        <div className="logo-box">
          <Link to="/" className="logo">
            <img src={Logo} alt="로고" />
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="#" className="nav-list">
                공지사항
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
              <Link to="#" className="nav-list">
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
      </div>
    </header>
  );
}

export default Header;
