import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./BookReviewDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faBookBookmark,
  faThumbsUp,
  faThumbsDown,
  faTrashCan,
  faPen,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

function BookReviewDetail() {
  //const [ userId, setUserId ] = useState("");
  //const [ bookDetail, setBookDetail ] = useState({});
  const navigate = useNavigate();
  const { bookId } = useParams();
  const userId = "Reviewer1";
  const [review, setReview] = useState("");
  const [quote, setQuote] = useState("");
  const [b1, setB1] = useState(false);
  const [b2, setB2] = useState(false);
  const [b3, setB3] = useState(false);
  const [b4, setB4] = useState(false);
  const [b5, setB5] = useState(false);
  const [rating, setRating] = useState(0);

  const bookDetail = {
    bookBasicInfo: {
      bookId: 1,
      title: "User's Book Title",
      author: "Author of the Book",
      publishedYear: 2023,
      genre: "Fiction",
      coverImage: "/bookcover.png",
      description: "목차 또는 줄거리",
      moreInfo: "서평 수상내역 등",
      averageRating: "3.0",
    },
    bookReviews: [
      {
        reviewId: 101,
        bookId: 5,
        reviewText: "An insightful review of the book.",
        rating: 4.5,
        reviewer: "Reviewer1",
        likes: 23,
        dislikes: 1,
      },
      {
        reviewId: 102,
        bookId: 5,
        reviewText: "An insightful review of the book.",
        rating: 4.5,
        reviewer: "Reviewer2",
        likes: 23,
        dislikes: 1,
      },
      // ... more reviews
    ],
    bookQuotes: [
      {
        userId: "Reviewer1",
        phraseId: 1,
        bookId: 5,
        text: "A memorable quote from the book.",
        likes: 245,
      },
      // ... more quotes
    ],
    recommendedList: [
      {
        bookId: 201,
        title: "Recommended Book 1",
        author: "Author of Recommended Book 1",
      },
      {
        bookId: 202,
        title: "Recommended Book 2",
        author: "Author of Recommended Book 2",
      },
      {
        bookId: 203,
        title: "Recommended Book 3",
        author: "Author of Recommended Book 3",
      },
      {
        bookId: 204,
        title: "Recommended Book 4",
        author: "Author of Recommended Book 4",
      },
      // ... more recommended books
    ],
    relatedDiscussionRooms: [
      {
        discussionId: 301,
        bookId: 5,
        title: "Discussion Topic 1 Related to the Book",
        participants: 40,
        latestPost: "2023-12-22T15:30:00",
      },
      {
        discussionId: 302,
        bookId: 5,
        title: "Discussion Topic 2 Related to the Book",
        participants: 40,
        latestPost: "2023-12-22T15:30:00",
      },
      {
        discussionId: 303,
        bookId: 5,
        title: "Discussion Topic 3 Related to the Book",
        participants: 40,
        latestPost: "2023-12-22T15:30:00",
      },
      // ... more discussion rooms
    ],
  };

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
  // api 사용해서 book detail 데이터 가져오기
  /*const fetchBookDetail = async () => {
    axios.get(`백엔드 링크/books/${bookId}`)
      .then(response => {
        setBookDetail(response.body);
        console.log(response);
        setIsLoading(false); // 로딩 완료
      })
      .catch(error => {
        console.error('Error fetching Programs:', error);
      });
  }

  useEffect(() => {
    fetchBookDetail();
  }, [bookDetail]);*/

  /*const fetchUserId = async () => {
    axios.get("백엔드링크/profile")
      .then(response => {
        setUserId(response.body.username);
        console.log(response);
        setIsLoading(false); // 로딩 완료
      })
      .catch(error => {
        console.error('Error fetching Programs:', error);
      });
  }
  useEffect(() => {
    fetchUSerId();
  }, [userId]);*/

  const postReview = async () => {
    try {
      const info = {
        userId: userId,
        reviewText: review,
        rating: rating,
      };

      const response = await axios.post(`백엔드 링크/${bookDetail.bookBasicInfo.bookId}/review`, info);

      if (response.data.success) {
        console.log("리뷰 등록 성공");
      } else {
        console.log("리뷰 등록 실패");
      }
    } catch (error) {
      console.error("리뷰 등록 실패:", error);
    }
  };

  const postQuote = async () => {
    try {
      const info = {
        userId: userId,
        quoteText: quote,
      };

      const response = await axios.post(`백엔드 링크/${bookDetail.bookBasicInfo.bookId}/phrase`, info);

      if (response.data.success) {
        console.log("구절 등록 성공");
      } else {
        console.log("구절 등록 실패");
      }
    } catch (error) {
      console.error("구절 등록 실패:", error);
    }
  };

  /*const postReviewLike = async (id) => {
    try {
      const response = await axios.post(`백엔드 링크/${bookDetail.bookBasicInfo.bookId}/${id}/good`);

      if (response.data.success) {
        console.log("좋아요 등록 성공");
      } else {
        console.log("좋아요 등록 실패");
      }
    } catch (error) {
      console.error("좋아요 등록 실패:", error);
    }
  };

  const postReviewDislike = async (id) => {
    try {
      const response = await axios.post(`백엔드 링크/${bookDetail.bookBasicInfo.bookId}/${id}/bad`);

      if (response.data.success) {
        console.log("싫어요 등록 성공");
      } else {
        console.log("싫어요 등록 실패");
      }
    } catch (error) {
      console.error("싫어요 등록 실패:", error);
    }
  };

  const postQuoteLike = async (id) => {
    try {
      const response = await axios.post(`백엔드 링크/${bookDetail.bookBasicInfo.bookId}/${id}/good`);

      if (response.data.success) {
        console.log("좋아요 등록 성공");
      } else {
        console.log("좋아요 등록 실패");
      }
    } catch (error) {
      console.error("좋아요 등록 실패:", error);
    }
  };

  const deleteReview = async (id) => {
    try {
      const response = await axios.delete(`백엔드 링크/${bookDetail.bookBasicInfo.bookId}/${id}`);

      if (response.data.success) {
        console.log("리뷰 삭제 성공");
      } else {
        console.log("리뷰 삭제 실패");
      }
    } catch (error) {
      console.error("리뷰 삭제 실패:", error);
    }
  };

  const deleteQuote = async (id) => {
    try {
      const response = await axios.delete(`백엔드 링크/${bookDetail.bookBasicInfo.bookId}/${id}`);

      if (response.data.success) {
        console.log("구절 삭제 성공");
      } else {
        console.log("구절 삭제 실패");
      }
    } catch (error) {
      console.error("구절 삭제 실패:", error);
    }
  };

  const modifyReview = async (id) => {
    try {
      const info = {
        userId: userId,
        editedReviewText: review,
      };

      const response = await axios.patch(`백엔드 링크/${bookDetail.bookBasicInfo.bookId}/${id}`, info);

      if (response.data.success) {
        console.log("리뷰 수정 성공");
      } else {
        console.log("리뷰 수정 실패");
      }
    } catch (error) {
      console.error("리뷰 수정 실패:", error);
    }
  };

  const modifyQuote = async (id) => {
    try {
      const info = {
        userId: userId,
        editedQuoteText: quote,
      };

      const response = await axios.patch(`백엔드 링크/${bookDetail.bookBasicInfo.bookId}/${id}`, info);

      if (response.data.success) {
        console.log("구절 수정 성공");
      } else {
        console.log("구절 수정 실패");
      }
    } catch (error) {
      console.error("구절 수정 실패:", error);
    }
  };

  const reportReview = async (id) => {
    try {
      const response = await axios.post(`백엔드 링크/${bookDetail.bookBasicInfo.bookId}/${id}/report`);

      if (response.data.success) {
        console.log("리뷰 신고 성공");
      } else {
        console.log("리뷰 신고 실패");
      }
    } catch (error) {
      console.error("리뷰 신고 실패:", error);
    }
  }*/

  //api에 average rating, quotes에 유저 id 추가 필요
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
      <div className={styles.bodyContainer}>
        <div className={styles.titleContainer}>
          <h3 className={styles.secTitle}>도서 상세</h3>
        </div>
        <div className={styles.descContainer}>
          <div className={styles.descDiv}>
            <img src={bookDetail.bookBasicInfo.coverImage} />
            <div className={styles.descCover}>
              <h3>{bookDetail.bookBasicInfo.title}</h3>
              <h4>
                <FontAwesomeIcon
                  icon={faCircle}
                  size="2xs"
                  style={{ color: "#ffca42" }}
                />{" "}
                {bookDetail.bookBasicInfo.averageRating} / 5.0
              </h4>
              <h4>{bookDetail.bookBasicInfo.author}</h4>
              <h4>{bookDetail.bookBasicInfo.publishedYear}</h4>
              <h4>{bookDetail.bookBasicInfo.genre}</h4>
              <p>{bookDetail.bookBasicInfo.description}</p>
            </div>
          </div>
        </div>
        <div className={styles.titleContainer}>
          <h3 className={styles.secTitle}>
            리뷰 {bookDetail.bookReviews.length}
          </h3>
        </div>
        <div className={styles.reviewInputContainer}>
          <div className={styles.reviewButtonContainer}>
            <button onClick={clickB1}>
              <FontAwesomeIcon
                icon={faCircle}
                size="lg"
                className={b1 ? styles.clicked : styles.unclicked}
              />
            </button>
            <button onClick={clickB2}>
              <FontAwesomeIcon
                icon={faCircle}
                size="lg"
                className={b2 ? styles.clicked : styles.unclicked}
              />
            </button>
            <button onClick={clickB3}>
              <FontAwesomeIcon
                icon={faCircle}
                size="lg"
                className={b3 ? styles.clicked : styles.unclicked}
              />
            </button>
            <button onClick={clickB4}>
              <FontAwesomeIcon
                icon={faCircle}
                size="lg"
                className={b4 ? styles.clicked : styles.unclicked}
              />
            </button>
            <button onClick={clickB5}>
              <FontAwesomeIcon
                icon={faCircle}
                size="lg"
                className={b5 ? styles.clicked : styles.unclicked}
              />
            </button>
            <span>{rating} / 5.0</span>
          </div>
          <textarea type="text" value={review} onChange={(e) => setReview(e.target.value)} placeholder="리뷰를 입력해주세요" required />
        </div>
        <div className={styles.addButtonContainer}>
          <button className={styles.addButton} onClick={postReview}>
            등록하기
          </button>
        </div>
        <div className={styles.descContainer}>
          {bookDetail.bookReviews.map((el, index) => (
            <div className={styles.elContainer} key={el.reviewId}>
              <span className={styles.idText}>
                {el.reviewer}
                <span className={styles.likeText}>
                  <FontAwesomeIcon
                    icon={faCircle}
                    size="2xs"
                    style={{ color: "#ffca42" }}
                  />{" "}
                  {el.rating} / 5.0
                </span>
                <span className={styles.likeText}>
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    size="xs"
                    style={{ color: "#ffca42" }}
                  />{" "}
                  {el.likes}
                </span>
                <span className={styles.likeText}>
                  <FontAwesomeIcon
                    icon={faThumbsDown}
                    size="xs"
                    style={{ color: "#ffca42" }}
                  />{" "}
                  {el.dislikes}
                </span>
                <div className={styles.likeTextContainer}>
                  {userId == `${el.reviewer}` ? (
                    <div className={styles.likeTextContainer}>
                      <span className={styles.likeText}>
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          size="xs"
                          style={{ color: "#ffca42" }}
                        />
                      </span>
                      <span className={styles.likeText}>
                        <FontAwesomeIcon
                          icon={faPen}
                          size="xs"
                          style={{ color: "#ffca42" }}
                        />
                      </span>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <span className={styles.likeText}>
                    <FontAwesomeIcon
                      icon={faTriangleExclamation}
                      size="xs"
                      style={{ color: "#ffca42" }}
                    />
                  </span>
                </div>
              </span>
              <p className={styles.detailText}>{el.reviewText}</p>
            </div>
          ))}
        </div>
        <div className={styles.titleContainer}>
          <h3 className={styles.secTitle}>인상 깊은 구절</h3>
        </div>
        <div className={styles.reviewInputContainer}>
          <textarea
            type="text"
            value={quote} onChange={(e) => setQuote(e.target.value)}
            placeholder="인상 깊은 구절을 작성해주세요"
            required
          />
        </div>
        <div className={styles.addButtonContainer}>
          <button className={styles.addButton} onClick={postQuote}>
            등록하기
          </button>
        </div>
        <div className={styles.descContainer}>
          {bookDetail.bookQuotes.map((el, index) => (
            <div className={styles.elContainer} key={el.phraseId}>
              <span className={styles.idText}>
                {el.userId}
                <span className={styles.likeText}>
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    size="xs"
                    style={{ color: "#ffca42" }}
                  />{" "}
                  {el.likes}
                </span>
              </span>
              {userId == `${el.userId}` ? (
                <div className={styles.likeTextContainer}>
                  <span className={styles.likeText}>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      size="xs"
                      style={{ color: "#ffca42" }}
                    />
                  </span>
                  <span className={styles.likeText}>
                    <FontAwesomeIcon
                      icon={faPen}
                      size="xs"
                      style={{ color: "#ffca42" }}
                    />
                  </span>
                </div>
              ) : (
                <div></div>
              )}
              <p className={styles.detailText}>{el.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.titleContainer}>
          <h3 className={styles.secTitle}>추천 도서</h3>
        </div>
        <div className={styles.listDiv}>
          <div className={styles.bookDivContainer}>
            {bookDetail.recommendedList.map((el, index) => (
              <div>
                <Link to={`/review/${el.bookId}`}>
                  <div className={styles.bookDiv} key={el.bookId}>
                    <div className={styles.bookTitle}>{el.title}</div>
                    <div className={styles.bookAuthor}>{el.author}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.titleContainer}>
          <h3 className={styles.secTitle}>관련 있는 토론장</h3>
        </div>
        <div className={styles.forumContainer}>
          {bookDetail.relatedDiscussionRooms.map((el, index) => (
            <div>
              <Link to={`/discussion/${el.discussionId}`}>
                <div className={styles.forumDiv} key={el.discussionId}>
                  <div className={styles.forumTitle}>{el.title}</div>
                  <div>
                  <span className={styles.forumDesc}>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2xs"
                      style={{ color: "#ffca42" }}
                    />{" "}
                    참여자 {el.participants}명
                  </span>
                  <span className={styles.forumDesc}>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2xs"
                      style={{ color: "#ffca42" }}
                    />{" "}
                    {el.latestPost}
                  </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
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

export default BookReviewDetail;
