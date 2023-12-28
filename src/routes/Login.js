import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const navigate = useNavigate();
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");

  const postLogin = async () => {
    try {
      const info = {
        email: ID,
        password: password,
      };

      const response = await axios.post("백엔드 링크/login", info);
  
      if (response.data.success) {
        console.log("로그인 성공");
        navigate("/");
      } else {
        console.log("로그인 실패");
      }
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //postLogin();
  }

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.menuBarContainer}>
          <FontAwesomeIcon
            icon={faBookBookmark}
            size="lg"
            style={{ color: "#ffca42" }}
          />
          <Link to={"/"}>
            <h2 className={styles.title}>도서 공유 커뮤니티</h2>
          </Link>
          <ul className={styles.menuBar}>
            <li>
            <a href="/profile">프로필</a>
            </li>
            <li>
              <a href="/review">도서 공유</a>
            </li>
            <li>
              <a href="/discussion">독서 토론</a>
            </li>
            <li>
              <a href="/activity">독서 활동</a>
            </li>
            <li>
              <a href="/event">이벤트 및 클럽</a>
            </li>
            <li>
              <button
                className={styles.loginButton}
                onClick={() => navigate("/login")}
              >
                로그인
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.formContainer}>
        <div className={styles.searchField}>
          <h3 className={styles.searchTitle}>로그인</h3>
          <div className={styles.horizontalLine}></div>
          <div></div>
        </div>
        <form id="submit-form" onSubmit={onSubmit}>
          <div className={styles.descContainer}>
            <input
              className="inputField"
              type="text"
              value={ID}
              onChange={(e) => setID(e.target.value)}
              placeholder="email"
              required
            />
            <input
              className="inputField"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              required
            />
          </div>
        <div className={styles.addButtonContainer}>
          <button className={styles.addButton} type="submit" id="submit-button">
            로그인
          </button>
          <span className={styles.findText}>아이디 찾기 / 비밀번호 찾기</span>
          <span className={styles.findText}><Link to="/register">회원가입</Link></span>
        </div>
      </form>
        </div>
      </div>
      <footer className={styles.footer}>
        <div>
          <ul>
            <h4>Keep in Touch</h4>
            <p>Address: </p>
            <p>Mail: </p>
            <p>Phone: </p>
          </ul>
        </div>
        <div className={styles.copyright}>
          <p>Copyright © 2023 LIKELION. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Login;
