import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FadeLoader } from "react-spinners";

const BookListField = styled.div`
  width: 850px;
  margin: 20px auto;

  .listDiv {
    width: 850px;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    justify-content: center;
    align-items: center;
  }

  .bookDiv {
    font-size: 16px;
    width: 12rem;
    height: 17rem;
    background-color: #F5F8FC;
    border: 0px;
    box-shadow: 0px 2px 8px 0px rgb(174, 174, 174);
    margin: 10px 20px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .descDiv {
    padding: 10px 0px 0px 0px;
  }

  .score {
    color: #1B3764;
    text-align: center;
    font-size: 11px;
    padding: 0px;
    margin: 0px;
  }

  .reviewNum {
    color: #1B3764;
    text-align: center;
    font-size: 11px;
    padding: 0px;
    margin: 0px 0px 0px 10px;
  }

  img {
    width: 10rem;
  }
  
  button {
    background-color: transparent;
    border: none;
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px;
`;

function BookList() {
  //const [bookList, setBookList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const bookList = [
    { bookId: 1, coverImage: "/bookcover.png", averageRating: "4.5", reviewCount: "100" },
    { bookId: 2, coverImage: "/bookcover.png", averageRating: "4.0", reviewCount: "200" },
    { bookId: 3, coverImage: "/bookcover.png", averageRating: "3.5", reviewCount: "300" },
    { bookId: 4, coverImage: "/bookcover.png", averageRating: "3.0", reviewCount: "400" },
    { bookId: 5, coverImage: "/bookcover.png", averageRating: "4.5", reviewCount: "500" },
    { bookId: 6, coverImage: "/bookcover.png", averageRating: "4.0", reviewCount: "600" },
  ];

  // api 사용해서 book list 데이터 가져오기
  /*const fetchBookList = async () => {
    axios.get('백엔드 링크/books')
      .then(response => {
        setBookList(response.body.bestsellers.slice(0, 6));
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

  return (
    <div>
      <BookListField>
        <div className="listDiv">
          <button
            onClick={() =>
              setCurrentIndex(currentIndex === 0 ? 3 : currentIndex - 1)
            }
            disabled={currentIndex === 0}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="2xl"
              style={
                currentIndex === 0 ? { color: "#ffffff" } : { color: "#1B3764" }
              }
            />
          </button>
          {bookList.slice(currentIndex, currentIndex + 3).map((el, index) => (
            <div>
              <Link to={`/review/${el.bookId}`}>
                <div className="bookDiv" key={el.bookId}>
                  <img src={el.coverImage}/>
                  <div className="descDiv">
                    <span className="score"><FontAwesomeIcon icon={faCircle} size="2xs" style={{color: "#ffca42",}} /> 평점 {el.averageRating} / 5.0</span>
                    <span className="reviewNum"><FontAwesomeIcon icon={faCircle} size="2xs" style={{color: "#ffca42",}} /> 리뷰 {el.reviewCount}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          <button
            onClick={() =>
              setCurrentIndex(currentIndex === 3 ? 0 : currentIndex + 1)
            }
            disabled={currentIndex === 3}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              size="2xl"
              style={
                currentIndex === 3 ? { color: "#ffffff" } : { color: "#1B3764" }
              }
            />
          </button>
        </div>
      </BookListField>
    </div>
  );
}

export default BookList;
