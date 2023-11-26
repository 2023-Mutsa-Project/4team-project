import { useEffect, useState } from "react";
import BookList from "../module/BookList";
import BookListList from "../module/BookListList";
import ReviewList from "../module/ReviewList";
import { Link, useHistory } from "react-router-dom";
import styles from "./BookSearch.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBookBookmark } from "@fortawesome/free-solid-svg-icons";

function BookSearch() {
  const history = useHistory();
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
    { value: "all", label: "테마 (전체)" },
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
        <div className={styles.searchField}>
          <h3 className={styles.searchTitle}>도서 공유</h3>
          <div className={styles.horizontalLine}></div>
          <div className={styles.searchCover}>
            <input onChange={onChange} className={styles.searchInput} />
            <Link to={`search/${keyword}`}>
              <button className={styles.searchButton}>
                <FontAwesomeIcon
                  icon={faSearch}
                  className={styles.searchIcon}
                />
              </button>
            </Link>
          </div>
          <div>
            <select className={styles.selectBox}
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
            <select className={styles.selectBox}
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
            <select className={styles.selectBox}
              id="searchOption3"
              value={selectedValue3}
              onChange={handleSelectChange2}
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
        <div>
          <div className={styles.titleContainer}>
            <h3 className={styles.secTitle}>베스트셀러 도서</h3>
          </div>
          <BookList />
        </div>
        <div>
          <div className={styles.titleContainer}>
            <h3 className={styles.secTitle}>추천 도서 리스트</h3>
          </div>
          <BookListList />
        </div>
        <div>
          <div className={styles.titleContainer}>
            <h3 className={styles.secTitle}>실시간 리뷰</h3>
          </div>
          <div className={styles.reviewField}>
            <ReviewList />
          </div>
        </div>
        <div className={styles.addButtonContainer}>
          <button
            className={styles.addButton}
            onClick={() => history.push("/review/:id")}
          >
            도서 추가하기
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

export default BookSearch;
