import { useState } from "react";
import BookList from "../module/BookList";
import ReviewList from "../module/ReviewList";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faBookBookmark } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const eventList = {
    latestEvents: [
      {
        eventId: 301,
        title: "Event Title 1",
        startDate: "2024-01-15",
        endDate: "2024-01-20",
        description: "Description of event 1.",
      },
      {
        eventId: 302,
        title: "Event Title 2",
        startDate: "2024-01-15",
        endDate: "2024-01-20",
        description: "Description of event 2.",
      },
      {
        eventId: 303,
        title: "Event Title 3",
        startDate: "2024-01-15",
        endDate: "2024-01-20",
        description: "Description of event 3.",
      },
      // ... more events
    ],
  };
  const forumList = {
    disscussionRoom: [
      {
        discussionId: 789,
        bookId: 35,
        creationUserId: 23,
        title: "특정 책에 대한 심층 토론",
        participantCount: 25,
        creationDate: "2023-12-01",
        latestPost: {
          postId: 456,
          postContent: "캐릭터 X에 대한 흥미로운 관점을 공유합니다.",
        },
        //more discussion room..
      },
      {
        discussionId: 789,
        bookId: 35,
        creationUserId: 23,
        title: "특정 책에 대한 심층 토론",
        participantCount: 25,
        creationDate: "2023-12-01",
        latestPost: {
          postId: 456,
          postContent: "캐릭터 X에 대한 흥미로운 관점을 공유합니다.",
        },
        //more discussion room..
      },
      {
        discussionId: 789,
        bookId: 35,
        creationUserId: 23,
        title: "특정 책에 대한 심층 토론",
        participantCount: 25,
        creationDate: "2023-12-01",
        latestPost: {
          postId: 456,
          postContent: "캐릭터 X에 대한 흥미로운 관점을 공유합니다.",
        },
        //more discussion room..
      },
    ],
  };
  const navigate = useNavigate();

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
        <div className={styles.banner}>
          <img
            className={styles.bannerImg}
            alt="Image"
            src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/image-2.png"
          />
          <h3 className={styles.bannerText}>
            나의 독서타입은?
            <br />
            독서 MBTI 테스트→
          </h3>
        </div>
        <div>
          <div className={styles.titleContainer}>
            <h3 className={styles.secTitle}>인기 있는 도서</h3>
          </div>
          <BookList />
        </div>
        <div>
          <div className={styles.titleContainer}>
            <h3 className={styles.secTitle}>인기 리뷰</h3>
          </div>
          <div className={styles.reviewContainer}>
            “Crowdsource term sheet freemium beta stealth responsive web design
            niche market rock star channels.”
          </div>
        </div>
        <div>
          <div className={styles.titleContainer}>
            <h3 className={styles.secTitle}>독서 토론방</h3>
          </div>
          <div className={styles.discussionField}>
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
                onClick={() => navigate("/discussion/post")}
              >
                토론방 생성하기
              </button>
            </div>
          </div>
          <div>
            <div className={styles.titleContainer}>
              <h3 className={styles.secTitle}>이벤트 리스트</h3>
            </div>
            <div className={styles.forumContainer}>
              {eventList.latestEvents.map((el, index) => (
                <div>
                  <Link to={"/event"}>
                    <div className={styles.eventDiv} key={el.eventId}>
                      <div className={styles.eventTitle}>{el.title}</div>
                      <div>
                        <div className={styles.forumDesc}>
                          <FontAwesomeIcon
                            icon={faCircle}
                            size="2xs"
                            style={{ color: "#ffca42" }}
                          />{" "}
                          {el.startDate} ~ {el.endDate}
                        </div>
                        <div className={styles.eventDesc}>
                          {el.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
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

export default Home;
