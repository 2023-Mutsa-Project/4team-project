import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./BookForumForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faBookBookmark } from "@fortawesome/free-solid-svg-icons";

function BookForumForm() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [book, setBook] = useState("");
  const [subject, setSubject] = useState("");
  const [rule, setRule] = useState("");
  const [theme, setTheme] = useState("");
  const [theme1, setTheme1] = useState(false);
  const [theme2, setTheme2] = useState(false);
  const [theme3, setTheme3] = useState(false);
  const [theme4, setTheme4] = useState(false);
  const [back, setBack] = useState("");
  const [back1, setBack1] = useState(false);
  const [back2, setBack2] = useState(false);
  const [date, setDate] = useState("");
  const [checked, setChecked] = useState("");

  /*const fetchUserId = async () => {
    axios.get("백엔드링크/profile")
      .then(response => {
        setUserId(response.body.username);
        console.log(response);
      })
      .catch(error => {
        console.error('Error fetching Programs:', error);
      });
  }
  useEffect(() => {
    fetchUSerId();
  }, [userId]);*/

  const selectBack = (selectedBack) => {
    if (selectedBack == "기본 배경") {
        setBack2(false);
        setBack1(true);
    }
    else {
        setBack1(false);
        setBack2(true);
    }
    setBack(selectedBack);
  }

  const selectTheme = (selectedTheme) => {
    if (theme == "의견 나눔") {
        setTheme1(false);
    }
    else if (theme == "찬반 토론") {
        setTheme2(false);
    }
    else if (theme == "타임 어택") {
        setTheme3(false);
    }
    else {
        setTheme4(false);
    }

    if (selectedTheme == "의견 나눔") {
        setTheme1(true);
    }
    else if (selectedTheme == "찬반 토론") {
        setTheme2(true);
    }
    else if (selectedTheme == "타임 어택") {
        setTheme3(true);
    }
    else {
        setTheme4(true);
    }
    setTheme(selectedTheme);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (checked == false) {
        alert("토론방 기본 규칙에 동의해주세요");
    }
    else {
        //postDiscussion();
    }
  }

  const postDiscussion = async () => {
    try {
      const info = {
        userId: id,
        bookId: book, //bookId 없음
        title: title,
        settingInfo: {
            theme: theme,
            back: back,
        },
      };

      const response = await axios.post("백엔드 링크/discussion/add", info);

      if (response.data.success) {
        console.log("토론방 등록 성공");
        navigate("/discussion");
      } else {
        console.log("토론방 등록 실패");
      }
    } catch (error) {
      console.error("토론방 등록 실패:", error);
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
        <div className={styles.searchField}>
          <h3 className={styles.searchTitle}>독서 토론</h3>
          <div className={styles.horizontalLine}></div>
          <div className={styles.ruleContainer}>
            <p>
            토론방 기본 규칙:<br/>
            1. 각 토론방 내의 사용자 규칙을 준수해주세요.<br/>
            2. 외에도 욕설, 도배, 각종 비하 및 차별 등 문제의 소지가 있는 발언은 금지합니다.<br/>
            <br/>
            이를 위반할 경우, 채팅 검열 및 무통보 강등 및 활동 중지, 강제 탈퇴 등 이용 제재를 당할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.titleContainer}>
        <h3 className={styles.secTitle}>토론방 생성</h3>
      </div>
      <form id="submit-form" onSubmit={onSubmit}>
        <div className={styles.formContainer}>
          <div className={styles.titleContainer}>
            <h3 className={styles.formTitle}>토론 정보</h3>
          </div>
          <div className={styles.descContainer}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목"
              required
            />
            <input
              type="text"
              value={book}
              onChange={(e) => setBook(e.target.value)}
              placeholder="도서"
              required
            />
            <input
              id = {styles.subjectInput}
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="주제"
              required
            />
            <textarea
              type="text"
              value={rule}
              onChange={(e) => setRule(e.target.value)}
              placeholder="사용자 규칙"
              required
            />
            <div className={styles.selectContainer}>
              <span className={styles.selectTitle}>토론 유형</span>
              <label>
                <input
                  type="checkbox"
                  checked={theme1}
                  onChange={() => selectTheme("의견 나눔")}
                />
                의견 나눔
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={theme2}
                  onChange={() => selectTheme("찬반 토론")}
                />
                찬반 토론
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={theme3}
                  onChange={() => selectTheme("타임 어택")}
                />
                타임 어택
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={theme4}
                  onChange={() => selectTheme("롤플레잉")}
                />
                롤플레잉
              </label>
            </div>
            <div className={styles.selectContainer}>
              <span className={styles.selectTitle}>토론방 배경설정</span>
              <label>
                <input
                  type="checkbox"
                  checked={back1}
                  onChange={() => selectBack("기본 배경")}
                />
                기본 배경
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={back2}
                  onChange={() => selectBack("사용자 정의")}
                />
                사용자 정의
              </label>
            </div>
            <div className={styles.selectContainer}>
              <span className={styles.selectTitle}>토론방 유효기간</span>
              <input
                  id={styles.dateInput}
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
               />
            </div>
          </div>
        </div>
        <div className={styles.addButtonContainer}>
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(!checked)}
            />
            토론방 기본 규칙을 확인하였고, 이에 준수하는 토론방을 생성했습니다.
            부적절한 방 생성으로 인한 책임은 본인이 부담하겠습니다.
          </label>
          <button className={styles.addButton} type="submit">
            토론방 생성하기
          </button>
        </div>
      </form>
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

export default BookForumForm;
