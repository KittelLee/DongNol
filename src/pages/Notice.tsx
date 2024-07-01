import "../styles/Notice.css";
import notice1 from "../assets/images/notice1.jpg";
import notice2 from "../assets/images/notice2.jpg";
import notice3 from "../assets/images/notice3.jpg";

function Notice() {
  return (
    <>
      <section className="notice-wrap">
        <div className="notice-box">
          <img src={notice1} alt="회칙1" />
        </div>
        <div className="notice-box">
          <img src={notice2} alt="회칙2" />
        </div>
        <div className="notice-box">
          <img src={notice3} alt="회칙3" />
        </div>
      </section>
    </>
  );
}

export default Notice;
