import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./BookForum.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCircle, faBookBookmark } from "@fortawesome/free-solid-svg-icons";

function BookForum() {
  //const [ forumList, setForumList ] = useState({});
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  const forumList = {
    "disscussionRoom": [
        {
            "discussionId": 789,
            "bookId": 35,
            "creationUserId": 23,
            "title": "특정 책에 대한 심층 토론",
            "participantCount": 25,
            "creationDate": "2023-12-01",
            "latestPost": {
            "postId": 456,
            "postContent": "캐릭터 X에 대한 흥미로운 관점을 공유합니다.",
            },
            //more discussion room..
        }, 
        {
            "discussionId": 789,
            "bookId": 35,
            "creationUserId": 23,
            "title": "특정 책에 대한 심층 토론",
            "participantCount": 25,
            "creationDate": "2023-12-01",
            "latestPost": {
            "postId": 456,
            "postContent": "캐릭터 X에 대한 흥미로운 관점을 공유합니다.",
            },
            //more discussion room..
        },
        {
            "discussionId": 789,
            "bookId": 35,
            "creationUserId": 23,
            "title": "특정 책에 대한 심층 토론",
            "participantCount": 25,
            "creationDate": "2023-12-01",
            "latestPost": {
            "postId": 456,
            "postContent": "캐릭터 X에 대한 흥미로운 관점을 공유합니다.",
            },
            //more discussion room..
        }
    ]
  }

  // api 사용해서 discussion 데이터 가져오기
  /*const fetchDiscussionRoom = async () => {
    axios.get("백엔드링크/discussion")
      .then(response => {
        setForumList(response.body);
        console.log(response);
        setIsLoading(false); // 로딩 완료
      })
      .catch(error => {
        console.error('Error fetching Programs:', error);
      });
  }

  useEffect(() => {
    fetchDiscussionRoom();
  }, [forumList]);*/

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
      <div className={styles.bodyContainer}>
        <div className={styles.newButtonContainer}>
          <div className={styles.rightContainer}>
          <div className={styles.searchCover}>
            <input onChange={onChange} className={styles.searchInput} />
            <button className={styles.searchButton}>
              <FontAwesomeIcon icon={faSearch} size="2xs" className={styles.searchIcon} />
            </button>
          </div>
          <button
            className={styles.newButton}
            onClick={() => navigate("/discussion/post")}
          >
            토론방 생성하기
          </button>
          </div>
        </div>
        <div className={styles.titleContainer}>
          <h3 className={styles.secTitle}>내가 참여한 토론방</h3>
        </div>
        <div className={styles.forumContainer}>
          {forumList.disscussionRoom.map((el, index) => (
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
                      댓글 {el.participantCount}개
                    </span>
                    <span className={styles.forumDesc}>
                      <FontAwesomeIcon
                        icon={faCircle}
                        size="2xs"
                        style={{ color: "#ffca42" }}
                      />{" "}
                      {el.creationDate}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.titleContainer}>
          <h3 className={styles.secTitle}>최근 생성된 토론방</h3>
        </div>
        <div className={styles.forumContainer}>
          {forumList.disscussionRoom.map((el, index) => (
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
                      댓글 {el.participantCount}개
                    </span>
                    <span className={styles.forumDesc}>
                      <FontAwesomeIcon
                        icon={faCircle}
                        size="2xs"
                        style={{ color: "#ffca42" }}
                      />{" "}
                      {el.creationDate}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.titleContainer}>
          <h3 className={styles.secTitle}>가장 인기 있는 토론방</h3>
        </div>
        <div className={styles.forumContainer}>
          {forumList.disscussionRoom.map((el, index) => (
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
                      댓글 {el.participantCount}개
                    </span>
                    <span className={styles.forumDesc}>
                      <FontAwesomeIcon
                        icon={faCircle}
                        size="2xs"
                        style={{ color: "#ffca42" }}
                      />{" "}
                      {el.creationDate}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.titleContainer}>
          <h3 className={styles.secTitle}>내가 찜한 도서의 토론방</h3>
        </div>
        <div className={styles.forumContainer}>
          {forumList.disscussionRoom.map((el, index) => (
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
                      댓글 {el.participantCount}개
                    </span>
                    <span className={styles.forumDesc}>
                      <FontAwesomeIcon
                        icon={faCircle}
                        size="2xs"
                        style={{ color: "#ffca42" }}
                      />{" "}
                      {el.creationDate}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.addButtonContainer}>
          <button
            className={styles.addButton}
          >
            전체 토론방 더보기
          </button>
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

export default BookForum;
