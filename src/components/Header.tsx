import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, firestore } from "../firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import "../styles/Header.css";
import Logo from "../assets/images/logo.png";
import bars from "../assets/icons/bars.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const userDoc = await getDoc(doc(firestore, "users", user.uid));
        if (userDoc.exists()) {
          setNickname(userDoc.data().nickname);
        }
      } else {
        setUser(null);
        setNickname("");
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setNickname("");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
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
            {user ? (
              <>
                <li className="user-info">
                  <span className="nav-list no-hover">{nickname}</span>
                  <button onClick={handleLogout} className="logout-btn">
                    로그아웃
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/membership" className="nav-list">
                    회원가입
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="nav-list">
                    로그인
                  </Link>
                </li>
              </>
            )}
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
