import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./BookSearch.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faSearch,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";

function BookSearch() {
  //const [bookList, setBookList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { option1, option2, option3, searchWord } = location.state || {};
  const [keyword, setKeyword] = useState("");
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [selectedValue3, setSelectedValue3] = useState("");

  const searchOptions1 = [
    { value: "all", label: "검색어 (전체)" },
    { value: "title", label: "제목" },
    { value: "writer", label: "저자" },
    { value: "publisher", label: "출판사" },
  ];

  const searchOptions2 = [
    { value: "all", label: "장르 (전체)" },
    { value: "novel", label: "소설" },
    { value: "poetry", label: "시/에세이" },
    { value: "humanity", label: "인문" },
    { value: "economy", label: "경제/경영" },
    { value: "self-improvement", label: "자기계발" },
    { value: "politic", label: "정치/사회" },
    { value: "history", label: "역사/문화" },
    { value: "art", label: "예술/대중문화" },
    { value: "religion", label: "종교" },
    { value: "technology", label: "기술/공학" },
    { value: "science", label: "과학" },
    { value: "others", label: "기타" },
  ];

  const searchOptions3 = [
    { value: "all", label: "종류 (전체)" },
    { value: "domestic", label: "국내도서" },
    { value: "foreign", label: "외국도서" },
    { value: "ebook", label: "eBook" },
  ];

  const handleSelectChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };

  const handleSelectChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };

  const handleSelectChange3 = (event) => {
    setSelectedValue3(event.target.value);
  };

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  const onClick = () => {
    navigate("/search", {
      state: {
        option1: selectedValue1,
        option2: selectedValue2,
        option3: selectedValue3,
        searchWord: keyword,
      },
    });
  };

  // api 사용해서 book list 데이터 가져오기
  /*const fetchBookList = async () => {
    axios.get(`백엔드 링크/books/${searchWord}`)
      .then(response => {
        setBookList(response.body.searchResults);
        console.log(response);
        setIsLoading(false); // 로딩 완료
      })
      .catch(error => {
        console.error('Error fetching Programs:', error);
      });
  }

  useEffect(() => {
    fetchBookList();
  }, [bookList]);*/

  const bookList = [
    { coverImage: "/bookcover.png", averageRating: "4.5", reviewCount: "100" },
    { coverImage: "/bookcover.png", averageRating: "4.0", reviewCount: "200" },
    { coverImage: "/bookcover.png", averageRating: "3.5", reviewCount: "300" },
    { coverImage: "/bookcover.png", averageRating: "3.0", reviewCount: "400" },
    { coverImage: "/bookcover.png", averageRating: "4.5", reviewCount: "500" },
    { coverImage: "/bookcover.png", averageRating: "4.0", reviewCount: "600" },
  ];

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
          <div className={styles.searchCover}>
            <input onChange={onChange} className={styles.searchInput} />
            <button className={styles.searchButton} onClick={onClick}>
              <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
            </button>
          </div>
          <div>
            <select
              className={styles.selectBox}
              id="searchOption1"
              value={selectedValue1}
              onChange={handleSelectChange1}
            >
              {searchOptions1.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <select
              className={styles.selectBox}
              id="searchOption2"
              value={selectedValue2}
              onChange={handleSelectChange2}
            >
              {searchOptions2.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <select
              className={styles.selectBox}
              id="searchOption3"
              value={selectedValue3}
              onChange={handleSelectChange3}
            >
              {searchOptions3.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        {bookList.map((el, index) => (
          <div>
            <Link to={`/review/${el.bookId}`}>
              <div className={styles.bookDiv} key={el.bookId}>
                <img src={el.coverImage} />
                <div className={styles.descDiv}>
                  <span className={styles.score}>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2xs"
                      style={{ color: "#ffca42" }}
                    />{" "}
                    평점 {el.averageRating} / 5.0
                  </span>
                  <span className={styles.reviewNum}>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2xs"
                      style={{ color: "#ffca42" }}
                    />{" "}
                    리뷰 {el.reviewCount}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
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

export default BookSearch;
