import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import "../styles/Home.css";
import kakaoLogo from "../assets/icons/kakaotalk.svg";
import town from "../assets/images/town.png";
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
          <h2>동네에서 놀자 대장님들</h2>
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
    </>
  );
}

export default Home;
