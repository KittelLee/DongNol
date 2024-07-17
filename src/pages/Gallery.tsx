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
    try {
      const querySnapshot = await getDocs(collection(firestore, "gallery"));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        isChecked: false,
        ...doc.data(),
      })) as GalleryItem[];
      console.log("데이터 불러오기 성공:", items);
      setGalleryItems(items);
    } catch (error) {
      console.error("데이터 불러오기 오류:", error);
    }
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

    const deletePromises = itemsToDelete.map(async (item) => {
      try {
        // Firestore에서 문서 삭제
        await deleteDoc(doc(firestore, "gallery", item.id));
        console.log(`Firestore 문서 삭제 완료: ${item.id}`);
      } catch (error) {
        console.error(`Firestore 문서 삭제 오류: ${item.id}`, error);
      }

      try {
        // Storage에서 파일 삭제
        const fileRef = ref(storage, item.fileURL);
        await deleteObject(fileRef);
        console.log(`Storage 파일 삭제 완료: ${item.fileURL}`);
      } catch (error) {
        console.error(`Storage 파일 삭제 오류: ${item.fileURL}`, error);
      }
    });

    // 모든 삭제 작업이 완료될 때까지 대기
    await Promise.all(deletePromises);

    // 삭제 작업이 완료된 후 fetchGalleryItems 호출
    console.log("모든 삭제 작업 완료 후 상태 업데이트 및 데이터 재불러오기");
    await fetchGalleryItems();
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
