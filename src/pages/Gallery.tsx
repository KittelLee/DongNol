import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UploadModal from "../components/UploadModal";
import { firestore, storage } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import "../styles/Gallery.css";
import trash from "../assets/icons/trash.svg";
import upload from "../assets/icons/upload.svg";

interface GalleryItem {
  id: string;
  fileURL: string;
  text: string;
  isChecked: boolean;
}

function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

  const fetchGalleryItems = async () => {
    const querySnapshot = await getDocs(collection(firestore, "gallery"));
    const items = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      isChecked: false,
      ...doc.data(),
    })) as GalleryItem[];
    setGalleryItems(items);
  };

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const handleCheckboxChange = (id: string) => {
    setGalleryItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUploadComplete = (newItem: { fileURL: string; text: string }) => {
    setGalleryItems((prevItems) => [
      ...prevItems,
      { id: Date.now().toString(), isChecked: false, ...newItem },
    ]);
  };

  const handleDelete = async () => {
    const itemsToDelete = galleryItems.filter((item) => item.isChecked);
    const remainingItems = galleryItems.filter((item) => !item.isChecked);

    setGalleryItems(remainingItems);

    for (const item of itemsToDelete) {
      try {
        await deleteDoc(doc(firestore, "gallery", item.id));
        const fileRef = ref(storage, item.fileURL);
        await deleteObject(fileRef);
      } catch (error) {
        console.error("Error removing document: ", error);
      }
    }
  };

  return (
    <>
      <section className="gallery-wrap">
        <div className="gallery-main">
          <div className="gallery-header">
            <h1>동네에서 놀던가 사진방</h1>
          </div>
          <div className="gallery-icons">
            <Link to="#" className="del-icon" onClick={handleDelete}>
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
                  checked={item.isChecked}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                <img
                  src={item.fileURL}
                  alt="업로드된 사진"
                  className={`image ${item.isChecked ? "blur" : ""}`}
                />
              </div>
              <div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <UploadModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onUploadComplete={handleUploadComplete}
      />
    </>
  );
}

export default Gallery;
