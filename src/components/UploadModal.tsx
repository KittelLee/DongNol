import { useState } from "react";
import { storage, firestore } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import Modal from "react-modal";
import imgAdd from "../assets/images/imgAdd.png";
import "../styles/UploadModal.css";
import { toast } from "react-toastify";

interface UploadModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "50%",
    height: "500px",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
    overflow: "auto",
  },
};

function UploadModal({ isOpen, onRequestClose }: UploadModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("파일을 선택하세요.");
      return;
    }

    const fileRef = ref(storage, file.name);

    try {
      await uploadBytes(fileRef, file);
      const fileURL = await getDownloadURL(fileRef);
      await addDoc(collection(firestore, "gallery"), {
        fileURL,
        text,
      });

      toast.success("파일과 텍스트가 성공적으로 저장되었습니다.");
      onRequestClose();
    } catch (error) {
      toast.error("파일 업로드 중 오류가 발생했습니다:");
      alert("파일 업로드 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleClose = () => {
    setFile(null);
    setText("");
    setFilePreview(null);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Upload Modal"
      style={customModalStyles}
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="uploadModal-wrap">
        <h2>사진 추가하기</h2>
        <div className="upload-img">
          {filePreview ? (
            <img src={filePreview} alt="사진 미리보기" />
          ) : (
            <img src={imgAdd} alt="사진추가 아이콘" />
          )}
        </div>
        <div className="input-wrap">
          <input type="file" onChange={handleFileChange} />
          <input
            type="text"
            placeholder="사진과 함께 넣고싶은 텍스트를 적어주세요"
            value={text}
            onChange={handleTextChange}
          />
        </div>
        <div className="btn-wrap">
          <button onClick={handleUpload}>완료하기</button>
          <button onClick={handleClose}>창닫기</button>
        </div>
      </div>
      <button onClick={handleClose} className="close-btn">
        X
      </button>
    </Modal>
  );
}

export default UploadModal;
