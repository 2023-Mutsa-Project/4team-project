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
    { image: "/bookcover.png", score: "4.5", reviewNum: "100" },
    { image: "/bookcover.png", score: "4.0", reviewNum: "200" },
    { image: "/bookcover.png", score: "3.5", reviewNum: "300" },
    { image: "/bookcover.png", score: "3.0", reviewNum: "400" },
    { image: "/bookcover.png", score: "4.5", reviewNum: "500" },
    { image: "/bookcover.png", score: "4.0", reviewNum: "600" },
  ];

  // api 사용해서 book list 데이터 가져오기
  /*const fetchBookList = async () => {
    axios.get('백엔드 링크')
      .then(response => {
        setBookList(response.data);
        console.log(response)
        setIsLoading(false); // 로딩 완료
      })
      .catch(error => {
        console.error('Error fetching Programs:', error);
      });
  }

  useEffect(() => {
    fetchBookList();
  }, []);*/

  // random으로 book list 가져와야 할 경우
  /*const getRandomBookList = useMemo(() => {
    if (isLoading) {
      return [{ name: '', programDate: '', location: { specificlocation: '' } }];
    }

    const randomBookList = [];
    for (let i = 0; i < 6; i++) {
      const randomValue = bookList[Math.floor(Math.random() * bookList.length)];
      randomPrograms.push(randomValue);
    }
    return randomBookList;
  }, [isLoading, bookList]);

  if (isLoading) {
    return (
      <Loading>
        <FadeLoader />
      </Loading>
    );
  }*/

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
              <Link to={`/apply/${index}`}>
                <div className="bookDiv" key={index}>
                  <img src={el.image}/>
                  <div className="descDiv">
                    <span className="score"><FontAwesomeIcon icon={faCircle} size="2xs" style={{color: "#ffca42",}} /> 평점 {el.score} / 5.0</span>
                    <span className="reviewNum"><FontAwesomeIcon icon={faCircle} size="2xs" style={{color: "#ffca42",}} /> 리뷰 {el.reviewNum}</span>
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
