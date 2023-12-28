import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faBookBookmark } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const navigate = useNavigate();
  //const [profile, setProfile] = useState({});
  const [password, setPassword] = useState("");

  const profile = {
    name: "홍길동",
    username: "gil_dong123",
    email: "gildong123@example.com",
    profileImage: "url_to_profile_image.jpg",
    dateJoined: "2023-01-01",
    activity: {
      reviewsWritten: 15,
      discussionsParticipated: 5,
    },
  };

  /*const fetchProfile = async () => {
    axios.get("백엔드 링크/profile")
      .then(response => {
        setProfile(response.body);
        console.log(response);
        setIsLoading(false); // 로딩 완료
      })
      .catch(error => {
        console.error('Error fetching Programs:', error);
      });
  }

  useEffect(() => {
    fetchProfile();
  }, [profile]);*/

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
        <div className={styles.titleContainer}>
          <h3 className={styles.secTitle}>프로필</h3>
        </div>
        <div className={styles.descContainer}>
          <h4 className={styles.descTitle}>
            <FontAwesomeIcon
              className={styles.circleIcon}
              icon={faCircle}
              size="2xs"
              style={{ color: "#ffca42" }}
            />
            이름 <span className={styles.descText}>{profile.name}</span>
          </h4>
          <h4 className={styles.descTitle}>
            <FontAwesomeIcon
              className={styles.circleIcon}
              icon={faCircle}
              size="2xs"
              style={{ color: "#ffca42" }}
            />
            닉네임 <span className={styles.descText}>{profile.userName}</span>
          </h4>
          <h4 className={styles.descTitle}>
            <FontAwesomeIcon
              className={styles.circleIcon}
              icon={faCircle}
              size="2xs"
              style={{ color: "#ffca42" }}
            />
            이메일 <span className={styles.descText}>{profile.email}</span>
          </h4>
          <h4 className={styles.descTitle}>
            <FontAwesomeIcon
              className={styles.circleIcon}
              icon={faCircle}
              size="2xs"
              style={{ color: "#ffca42" }}
            />
            가입일 <span className={styles.descText}>{profile.dateJoined}</span>
          </h4>
          <h4 className={styles.descTitle}>
            <FontAwesomeIcon
              className={styles.circleIcon}
              icon={faCircle}
              size="2xs"
              style={{ color: "#ffca42" }}
            />
            작성한 리뷰 수{" "}
            <span className={styles.descText}>
              {profile.activity.reviewsWritten}
            </span>
          </h4>
          <h4 className={styles.descTitle}>
            <FontAwesomeIcon
              className={styles.circleIcon}
              icon={faCircle}
              size="2xs"
              style={{ color: "#ffca42" }}
            />
            참여한 토론 수{" "}
            <span className={styles.descText}>
              {profile.activity.discussionsParticipated}
            </span>
          </h4>
          <h4 className={styles.descTitle}>
            <FontAwesomeIcon
              className={styles.circleIcon}
              icon={faCircle}
              size="2xs"
              style={{ color: "#ffca42" }}
            />
            포인트 <span className={styles.descText}>2500점</span>
          </h4>
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

export default Profile;
