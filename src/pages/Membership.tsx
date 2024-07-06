import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Membership.css";

function Membership() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("올바른 이메일 주소를 입력하세요.");
      return;
    }

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
      toast.error("비밀번호는 8자리 이상이며, 영문과 숫자를 포함해야 합니다.");
      return;
    }

    if (nickname.length > 10) {
      toast.error("닉네임은 10자 이하여야 합니다.");
      return;
    }

    toast.success("회원가입 성공!");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };
  return (
    <>
      <section className="membership-wrap">
        <div className="membership-card">
          <h1>회원가입</h1>
          <form className="membership-form" onSubmit={handleSubmit}>
            <div className="form-box">
              <label>이메일</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-box">
              <label>비밀번호</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-box">
              <label>닉네임</label>
              <input
                type="nickname"
                placeholder="Nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <button type="submit">회원가입 하기</button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}

export default Membership;
