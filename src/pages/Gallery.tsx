import { Link } from "react-router-dom";
import "../styles/Gallery.css";
import trash from "../assets/icons/trash.svg";
import upload from "../assets/icons/upload.svg";
import greyBg from "../assets/images/grey-bg.png";

function Gallery() {
  return (
    <>
      <section className="gallery-wrap">
        <div className="gallery-main">
          <div className="gallery-header">
            <h1>동네에서 놀던가 사진방</h1>
          </div>
          <div className="gallery-icons">
            <Link to="#" className="del-icon">
              <img src={trash} alt="삭제 아이콘" />
            </Link>
            <Link to="#" className="upload-icon">
              <img src={upload} alt="업로드 아이콘" />
            </Link>
          </div>
        </div>
        <div className="gallery-content">
          <div className="gallery-info">
            <div className="gallery-1">
              <input type="checkbox" />
              <img src={greyBg} alt="#" />
            </div>
            <div>
              <p>Test</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
