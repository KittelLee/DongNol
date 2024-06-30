import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import "../styles/Home.css";
import kakaoLogo from "../assets/icons/kakaotalk.svg";
import instagramLogo from "../assets/icons/instagram.svg";
import town from "../assets/images/town.png";
import pc from "../assets/images/pc.png";
import notebook from "../assets/images/notebook.png";
import ProfileCircle from "../common/ProfileCircle";
import nub from "../assets/profiles/nub.png";
import haha from "../assets/profiles/haha.png";
import bori from "../assets/profiles/bori.png";
import pubao from "../assets/profiles/pubao.png";
import arumi from "../assets/profiles/arumi.png";
import seri from "../assets/profiles/seri.png";
import hibo from "../assets/profiles/hibo.png";
import dana from "../assets/profiles/dana.png";
import dohye from "../assets/profiles/dohye.png";
import sins from "../assets/profiles/sins.png";
import yunha from "../assets/profiles/yunha.png";
import jinyeon from "../assets/profiles/jinyeon.png";
import dopal from "../assets/profiles/dopal.png";
import filltak from "../assets/profiles/filltak.png";
import gye from "../assets/profiles/gye.png";
import oreon from "../assets/profiles/oreon.png";
import kevin from "../assets/profiles/kevin.png";
import po from "../assets/profiles/po.png";
import naru from "../assets/profiles/naru.png";

function Home() {
  const firstDivRef = useRef<HTMLDivElement | null>(null);
  const secondDivRef = useRef<HTMLDivElement | null>(null);
  const thirdDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.classList.remove("hidden");
        } else {
          entry.target.classList.add("hidden");
          entry.target.classList.remove("visible");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (firstDivRef.current) observer.observe(firstDivRef.current);
    if (secondDivRef.current) observer.observe(secondDivRef.current);
    if (thirdDivRef.current) observer.observe(thirdDivRef.current);

    // 컴포넌트가 언마운트될 때 옵저버를 해제합니다.
    return () => {
      if (firstDivRef.current) observer.unobserve(firstDivRef.current);
      if (secondDivRef.current) observer.unobserve(secondDivRef.current);
      if (thirdDivRef.current) observer.unobserve(thirdDivRef.current);
    };
  }, []);
  return (
    <>
      <section className="section-first">
        <div className="text-box">
          <strong>
            파주, 일산 동네에서
            <br />
            하나가 되는 공간
          </strong>
          <p>
            지금 바로 카카오톡 오픈채팅방에 동네에서 놀던가를 검색하고
            소통해보세요.
          </p>
        </div>
        <div className="kakao-btn-box">
          <Link to="https://open.kakao.com/o/g8vBib9e" className="kakao-btn">
            <img src={kakaoLogo} alt="카카오톡로고" />
            카카오톡으로 이동하기
          </Link>
        </div>
        <div className="town">
          <img src={town} alt="동네이미지" />
        </div>
      </section>
      <section className="section-second">
        <div className="title-text">
          <h2>동네에서 놀던가 대장님들</h2>
          <p>오랜시간 함께하여 각 연도를 대표하는 대장이 되보세요!</p>
        </div>
        <Marquee speed={100}>
          <div className="slideshow">
            <ProfileCircle src={nub} alt="빈회색" name="86 대장 뇹언니" />
            <ProfileCircle src={haha} alt="빈회색" name="87 대장 하하" />
            <ProfileCircle src={bori} alt="빈회색" name="88 대장 보리차" />
            <ProfileCircle src={pubao} alt="빈회색" name="89 대장 푸바오" />
            <ProfileCircle src={arumi} alt="빈회색" name="90 대장 아루미" />
            <ProfileCircle src={seri} alt="빈회색" name="91 대장 빚세리" />
            <ProfileCircle src={hibo} alt="빈회색" name="92 대장 하이보루" />
            <ProfileCircle src={dana} alt="빈회색" name="93 대장 다나" />
            <ProfileCircle src={dohye} alt="빈회색" name="94 대장 도혜" />
            <ProfileCircle src={sins} alt="빈회색" name="95 대장 신스" />
            <ProfileCircle src={yunha} alt="빈회색" name="96 대장 윤하" />
            <ProfileCircle src={jinyeon} alt="빈회색" name="97 대장 진연" />
            <ProfileCircle src={dopal} alt="빈회색" name="98 대장 전두팔" />
            <ProfileCircle src={filltak} alt="빈회색" name="99 대장 필탁" />
            <ProfileCircle src={gye} alt="빈회색" name="00 대장 상계춘" />
            <ProfileCircle src={oreon} alt="빈회색" name="01 대장 오른" />
            <ProfileCircle src={kevin} alt="빈회색" name="02 대장 케빈" />
            <ProfileCircle src={po} alt="빈회색" name="04 대장 포" />
            <ProfileCircle src={naru} alt="빈회색" name="05 대장 나르" />
          </div>
        </Marquee>
      </section>
      <section className="section-third">
        <div className="first-div" ref={firstDivRef}>
          <div className="img-box">
            <img src={pc} alt="노트북사진" />
          </div>
          <div className="intro-box">
            <span>WebSite [PC]</span>
            <h3>PC에서 웹사이트를 접속해보세요</h3>
            <p>
              지금 PC에서 동네에서 놀던가를 체험해보세요.
              <br />
              다양한 컨텐츠를 지금바로 사이트에서 확인 해보세요.
            </p>
          </div>
        </div>
        <div className="second-div" ref={secondDivRef}>
          <div className="intro-box">
            <span>WebSite [NoteBook]</span>
            <h3>노트북에서 웹사이트를 접속해보세요</h3>
            <p>
              지금 노트북에서 동네에서 놀던가를 체험해보세요.
              <br />
              다양한 컨텐츠를 지금바로 사이트에서 확인 해보세요.
            </p>
          </div>
          <div className="img-box">
            <img src={notebook} alt="노트북사진" />
          </div>
        </div>
        <div className="third-div" ref={thirdDivRef}>
          <div className="img-box">
            <img src={notebook} alt="노트북사진" />
          </div>
          <div className="intro-box">
            <span>WebSite [Mobile]</span>
            <h3>모바일에서 웹사이트를 접속해보세요</h3>
            <p>
              지금 모바일에서 동네에서 놀던가를 체험해보세요.
              <br />
              다양한 컨텐츠를 지금바로 사이트에서 확인 해보세요.
            </p>
          </div>
        </div>
      </section>
      <section className="section-fourth">
        <div className="fourth-text-box">
          <h1>동네에서 놀던가에 대해 더 많은 정보가 필요하신가요?</h1>
          <p>지금 바로 참여하여 정보를 확인해보세요.</p>
        </div>
        <Link
          to="https://www.instagram.com/dong._.nol_2030/"
          className="instagram-btn"
        >
          <img src={instagramLogo} alt="인스타그램로고" />
          인스타그램으로 이동하기
        </Link>
      </section>
    </>
  );
}

export default Home;
