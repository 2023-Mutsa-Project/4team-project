import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./BookReviewForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faBookBookmark } from "@fortawesome/free-solid-svg-icons";

function BookReviewForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [review, setReview] = useState("");
  const [b1, setB1] = useState(false);
  const [b2, setB2] = useState(false);
  const [b3, setB3] = useState(false);
  const [b4, setB4] = useState(false);
  const [b5, setB5] = useState(false);
  const [rating, setRating] = useState(0);

  const clickB1 = () => {
    if (b1 == true) {
      setB1(false);
      if (rating != 0) {
        setRating(rating - 1);
      }
    } else {
      setB1(true);
      setRating(rating + 1);
    }
  };
  const clickB2 = () => {
    if (b2 == true) {
      setB2(false);
      if (rating != 0) {
        setRating(rating - 1);
      }
    } else {
      setB2(true);
      setRating(rating + 1);
    }
  };
  const clickB3 = () => {
    if (b3 == true) {
      setB3(false);
      if (rating != 0) {
        setRating(rating - 1);
      }
    } else {
      setB3(true);
      setRating(rating + 1);
    }
  };
  const clickB4 = () => {
    if (b4 == true) {
      setB4(false);
      if (rating != 0) {
        setRating(rating - 1);
      }
    } else {
      setB4(true);
      setRating(rating + 1);
    }
  };
  const clickB5 = () => {
    if (b5 == true) {
      setB5(false);
      if (rating != 0) {
        setRating(rating - 1);
      }
    } else {
      setB5(true);
      setRating(rating + 1);
    }
  };

  /*const [isValid, setIsValid] = useState(false);


  const handleSubmit = async () => {
    if (isValid) {
      try {
        const response = await fetch(
          "백엔드 링크/books/add",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              author: author,
              publishYear: publishYear,
              genre: genre,
              coverImage: image,
              description: summary,
            }),
          }
        );

        if (response.ok) {
          const result = await response.json();
          alert("등록에 성공했습니다.");
          try {
            const response = await fetch(
              "백엔드 링크/books/id/review",
            {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: userId, //userid와 bookid 가져와야 함
              reviewText: review,
              rating: rating
            }),
          }
        );

        if (response.ok) {
          const result = await response.json();
        } else {
          alert("리뷰 등록에 실패했습니다.");
        }
          }
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
          <h3 className={styles.searchTitle}>도서 공유</h3>
          <div className={styles.horizontalLine}></div>
        </div>
      </div>
      <div className={styles.titleContainer}>
        <h3 className={styles.secTitle}>도서 등록</h3>
      </div>
      <form id="submit-form">
        <div className={styles.formContainer}>
          <div className={styles.titleContainer}>
            <h3 className={styles.formTitle}>도서 정보</h3>
          </div>
          <div className={styles.descContainer}>
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
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder="장르"
              required
            />

            <input
              className="inputField"
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              placeholder="출간일"
              required
            />

            <textarea
              className="inputField"
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="줄거리"
              required
            />
          </div>
          <div className={styles.titleContainer}>
            <h3 className={styles.formTitle}>리뷰</h3>
          </div>
          <div className={styles.reviewInputContainer}>
            <div className={styles.reviewButtonContainer}>
              <button type="button" onClick={clickB1}>
                <FontAwesomeIcon
                  icon={faCircle}
                  size="lg"
                  className={b1 ? styles.clicked : styles.unclicked}
                />
              </button>
              <button type="button" onClick={clickB2}>
                <FontAwesomeIcon
                  icon={faCircle}
                  size="lg"
                  className={b2 ? styles.clicked : styles.unclicked}
                />
              </button>
              <button type="button" onClick={clickB3}>
                <FontAwesomeIcon
                  icon={faCircle}
                  size="lg"
                  className={b3 ? styles.clicked : styles.unclicked}
                />
              </button>
              <button type="button" onClick={clickB4}>
                <FontAwesomeIcon
                  icon={faCircle}
                  size="lg"
                  className={b4 ? styles.clicked : styles.unclicked}
                />
              </button>
              <button type="button" onClick={clickB5}>
                <FontAwesomeIcon
                  icon={faCircle}
                  size="lg"
                  className={b5 ? styles.clicked : styles.unclicked}
                />
              </button>
              <span>{rating} / 5.0</span>
            </div>
            <textarea
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="리뷰를 작성해주세요"
              required
            />
          </div>
        </div>
        <div className={styles.addButtonContainer}>
          <button className={styles.addButton} type="submit" id="submit-button">
            등록하기
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

export default BookReviewForm;
