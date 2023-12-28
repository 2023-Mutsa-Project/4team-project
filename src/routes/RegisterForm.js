import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./RegisterForm.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

function RegisterForm() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [nickname, setNickname] = useState("");
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [interest, setInterest] = useState("");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState("");

  const postSignup = async () => {
    try {
      const info = {
        name: userName,
        email: ID,
        userName: nickname,
        password: password,
        interests: interest,
        phont: phone,
      };

      const response = await axios.post("백엔드 링크/signup", info);

      if (response.data.success) {
        console.log("회원가입 성공");
        navigate("/");
      } else {
        console.log("회원가입 실패");
      }
    } catch (error) {
      console.error("회원가입 실패:", error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (checked == false) {
        alert("규정 약관에 동의해주세요")
    }
    else if (password != passwordCheck) {
        alert("비밀번호를 확인해주세요")
    }
    else {
        //postSignup();
    }
  };

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
            <h3 className={styles.searchTitle}>계정 생성하기</h3>
            <div className={styles.horizontalLine}></div>
            <div></div>
          </div>
          <form id="submit-form" onSubmit={onSubmit}>
            <div className={styles.descContainer}>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="이름"
                required
              />
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="닉네임"
                required
              />
              <input
                type="text"
                value={ID}
                onChange={(e) => setID(e.target.value)}
                placeholder="이메일"
                required
              />
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                required
              />
              <input
                type="text"
                value={passwordCheck}
                onChange={(e) => setPasswordCheck(e.target.value)}
                placeholder="비밀번호 확인"
                required
              />
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="전화번호"
                required
              />
              <input
                type="text"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                placeholder="관심 장르"
                required
              />
              <label>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(!checked)}
                />
                규정 약관을 읽었고 이에 동의합니다<a>Private Policy</a>
              </label>
            </div>
            <div className={styles.addButtonContainer}>
              <button
                className={styles.addButton}
                type="submit"
                id="submit-button"
              >
                계정 만들기
              </button>
              <span className={styles.findText}>
                계정이 이미 있으신가요? <Link to="/login">로그인</Link>
              </span>
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

export default RegisterForm;
