import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./BookForumDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faBookBookmark } from "@fortawesome/free-solid-svg-icons";

function BookForumDetail() {
  //const [ userId, setUserId ] = useState("");
  //const [ discussionDetail, setDiscussionDetail ] = useState({});
  const navigate = useNavigate();
  const { discussionId } = useParams();
  const userId = "myUser";
  const [review, setReview] = useState("");
  const [quote, setQuote] = useState("");
  const [rating, setRating] = useState(0);
  const [chat, setChat] = useState("");

  const discussionDetail = {
    discussionRoomSettings: {
      title: "책의 심층 분석",
      creatorId: "User123",
      creationDate: "2023-12-01",
      settingInfo: {},
    },
    commentsInDiscussionRoom: [
      {
        commentId: 101,
        userId: "User456",
        commentText:
          "이 책에서 가장 마음에 드는 부분은 다양한 캐릭터들의 상호 작용이었습니다.",
        datePosted: "2023-12-22",
        likes: 15,
      },
      {
        commentId: 102,
        userId: "myUser",
        commentText:
          "저도 그 부분이 마음에 들었어요.",
        datePosted: "2023-12-22",
        likes: 7,
      },
    ],
  };

  // api 사용해서 book detail 데이터 가져오기
  /*const fetchdiscussionDetail = async () => {
    axios.get(`백엔드 링크/discussion/${discussionId}`)
      .then(response => {
        setDiscussionDetail(response.body);
        console.log(response);
        setIsLoading(false); // 로딩 완료
      })
      .catch(error => {
        console.error('Error fetching Programs:', error);
      });
  }

  useEffect(() => {
    fetchdiscussionDetail();
  }, [discussionDetail]);*/

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

  const onSubmit = () => {
    //postChat();
  }

  const postChat = async () => {
    try {
      const info = {
        userId: userId,
        reviewText: review,
        rating: rating,
      };

      const response = await axios.post(
        `백엔드 링크/discussion/${discussionId}`,
        info
      );

      if (response.data.success) {
        console.log("리뷰 등록 성공");
      } else {
        console.log("리뷰 등록 실패");
      }
    } catch (error) {
      console.error("리뷰 등록 실패:", error);
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
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.titleContainer}>
          <h3 className={styles.secTitle}>
            {discussionDetail.discussionRoomSettings.title}
          </h3>
        </div>
        <div className={styles.descContainer}>
          <div className={styles.descDiv}>
            <img src="/bookcover.png" />
            <div className={styles.descCover}>
              <h3>도서 제목</h3>
              <h4>{discussionDetail.discussionRoomSettings.creatorId}</h4>
              <h4>{discussionDetail.discussionRoomSettings.creationDate}</h4>
              <p>
                토론방 규칙
                <br />
                1. 목적에 맞지 않는 과도한 친목 금지
                <br />
                2. 개인정보 묻지 않기
              </p>
            </div>
          </div>
        </div>
        <div className={styles.longHorizontalLine}></div>
        <div>
          <div className={styles.chatContainer}>
          {discussionDetail.commentsInDiscussionRoom.map((el, index) => (
            <div className={userId == el.userId ? styles.chatBoxRight : styles.chatBoxLeft} key={el.commentId}>
                <span className={styles.nicknameText}>{el.userId}</span>
                <div className={styles.likeContainer}>
                <FontAwesomeIcon
                    icon={faThumbsUp}
                    size="xs"
                    style={{ color: "#ffca42" }}
                />{" "}
                {el.likes}
                </div>
                <span className={styles.dateText}>{el.datePosted}</span>
                {el.commentText}
            </div>
          ))}
          </div>
          <form className={styles.chatForm} onSubmit={onSubmit}>
            <input
              type="text"
              value={chat}
              onChange={(e) => setChat(e.target.value)}
              required
            />
            <button className={styles.addButton} type="button">
              설정
            </button>
            <button className={styles.addButton} type="submit">
              전송
            </button>
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

export default BookForumDetail;
