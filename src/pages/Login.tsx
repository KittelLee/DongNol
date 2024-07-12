import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      toast.success("로그인 성공!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("로그인에 실패했습니다. 다시 시도해주세요.");
      console.error("Error logging in: ", error);
    }
  };
  return (
    <>
      <section className="login-wrap">
        <div className="login-card">
          <h1>로그인</h1>
          <form className="login-form" onSubmit={handleSubmit}>
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
            <button type="submit">로그인 하기</button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}

export default Login;
