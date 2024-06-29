import "../styles/Footer.css";
import Logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="bottom-logo">
          <img src={Logo} alt="하단로고" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
