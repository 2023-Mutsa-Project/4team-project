import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import styles from "./BookReview.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

function BookReviewForm() {
  const history = useHistory();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [score, setScore] = useState(0);
  const [review, setReview] = useState("");
  /*const [isValid, setIsValid] = useState(false);

  const handleSubmit = async () => {
    if (isValid) {
      try {
        const response = await fetch(
          `백엔드 링크`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              author,
              publisher,
              publishDate,
              summary,
              image,
              score,
              review,
            }),
          }
        );

        if (response.ok) {
          const result = await response.json();
          alert("등록에 성공했습니다.");
        } else {
          alert("등록에 실패했습니다.");
        }
      } catch (error) {
        console.error("Error applying:", error);
        alert("등록에 실패했습니다.");
      }
    } else {
      alert("도서 정보를 모두 작성해주세요.");
    }
  };*/

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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">도서 공유</a>
            </li>
            <li>
              <a href="#">독서 토론</a>
            </li>
            <li>
              <a href="#">독서 활동</a>
            </li>
            <li>
              <a href="#">이벤트 및 클럽</a>
            </li>
            <li>
              <button
                className={styles.loginButton}
                onClick={() => history.push("/login")}
              >
                로그인
              </button>
            </li>
          </ul>
        </div>
      </div>
      <form id="submit-form">
        <h3>도서 정보</h3>
        <input
          className="inputField"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
          required
        />

        <input
          className="inputField"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="저자"
          required
        />

        <input
          className="inputField"
          type="text"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
          required
        />

        <input
          className="inputField"
          type="date"
          value={publishDate}
          onChange={(e) => setPublishDate(e.target.value)}
          placeholder="출간일"
          required
        />

        <input
          className="inputField"
          type="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="줄거리"
          required
        />

        <h3>리뷰</h3>
        <input
          className="inputField"
          type="text"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="줄거리"
          required
        />

        <button type="button" id="submit-button">
          등록하기
        </button>
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

export default BookReviewForm;