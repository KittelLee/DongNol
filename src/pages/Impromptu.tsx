import { useState, useEffect } from "react";
import CardIcon from "../assets/icons/card.svg";
import ListIcon from "../assets/icons/list.svg";
import UploadIcon from "../assets/icons/upload.svg";
import SortIcon from "../assets/icons/sort.svg";
import "../styles/Impromptu.css";
import RoomModal from "../components/RoomModal";
import { firestore } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

interface Meeting {
  id: string;
  date: string;
  title: string;
  location: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

function Impromptu() {
  const [switchIcon, setSwitchIcon] = useState(CardIcon);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [meetings, setMeetings] = useState<Meeting[]>([]);

  const handleButtonClick = () => {
    setSwitchIcon((prevIcon) => (prevIcon === CardIcon ? ListIcon : CardIcon));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchMeetings = async () => {
      const querySnapshot = await getDocs(collection(firestore, "meetings"));
      const meetingsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Meeting[];
      setMeetings(meetingsData);
    };

    fetchMeetings();
  }, []);

  const getWeekday = (dateStr: string) => {
    const date = new Date(dateStr);
    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
    return weekdays[date.getDay()];
  };

  return (
    <>
      <section className="impromptu-wrap">
        <div className="impromptu-header">
          <input type="text" placeholder="벙 이름으로 검색" />
          <button onClick={openModal}>
            <img src={UploadIcon} alt="업로드 아이콘" />
          </button>
          <button>
            <img src={SortIcon} alt="정렬 아이콘" />
          </button>
          <button onClick={handleButtonClick}>
            <img src={switchIcon} alt="스위치 아이콘" />
          </button>
        </div>
        <div className="impromptu-main">
          {meetings.map((meeting) => {
            const [, month, day] = meeting.date.split("-");
            const weekday = getWeekday(meeting.date);
            return (
              <div className="main-section" key={meeting.id}>
                <div className="main-left">
                  <p>{`${month}월 ${day}일 (${weekday})`}</p>
                </div>
                <div className="empty" />
                <div className="main-right">
                  <h2>{meeting.title}</h2>
                  <div className="text-sort">
                    <div className="p-sort">
                      <div className="date-time">
                        <p>
                          {new Date(meeting.startDate).toLocaleDateString()}
                        </p>
                        <p>{meeting.startTime}</p>
                        <p>~</p>
                      </div>
                      <div className="date-time">
                        <p>{new Date(meeting.endDate).toLocaleDateString()}</p>
                        <p>{meeting.endTime}</p>
                      </div>
                      <p>{meeting.location}</p>
                    </div>
                  </div>
                  <div className="text-sort">
                    <button>참석</button>
                    <button>불참석</button>
                  </div>
                  <div className="text-sort">
                    <p className="attending">참석 {0}</p>
                    <p className="middle">/</p>
                    <p className="not-attending">불참석 {0}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <RoomModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </>
  );
}

export default Impromptu;
