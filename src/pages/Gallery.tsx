import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UploadModal from "../components/UploadModal";
import { firestore } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../styles/Gallery.css";
import trash from "../assets/icons/trash.svg";
import upload from "../assets/icons/upload.svg";

interface GalleryItem {
  id: string;
  fileURL: string;
  text: string;
}

function Gallery() {
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const fetchGalleryItems = async () => {
      const querySnapshot = await getDocs(collection(firestore, "gallery"));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as GalleryItem[];
      setGalleryItems(items);
    };

    fetchGalleryItems();
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            <Link to="#" className="upload-icon" onClick={openModal}>
              <img src={upload} alt="업로드 아이콘" />
            </Link>
          </div>
        </div>
        <div className="gallery-content">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-info">
              <div className="gallery-1">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <img
                  src={item.fileURL}
                  alt="업로드된 사진"
                  className={`image ${isChecked ? "blur" : ""}`}
                />
              </div>
              <div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <UploadModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </>
  );
}

export default Gallery;
