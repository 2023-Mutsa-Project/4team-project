import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle
} from "@fortawesome/free-solid-svg-icons";
import { FadeLoader } from "react-spinners";

const ReviewListField = styled.div`
  margin: 20px auto;

  .listDiv {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    justify-content: center;
    align-items: center;
  }

  .reviewList {
    width: 17rem;
    height: 6rem;
    background-color: white;
    border: 0px;
    box-shadow: 0px 2px 8px 0px rgb(174, 174, 174);
    margin: 10px 20px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .titleContainer {
    width: 100%;
    display: flex;
  }

  .bookTitle {
    width: 10rem;
    font-weight: bold;
    font-size: 13px;
    padding: 0px 1rem;
    margin: 0px;
    color: #1B3764;
  }

  .score {
    width: 5rem;
    font-weight: bold;
    font-size: 13px;
    padding: 0px;
    margin: 0px 0px 0px 5px;
    color: #1B3764;
  }

  .userName {
    width: 100%;
    font-size: 11px;
    padding: 5px 1rem;
    margin: 0px;
    color: #1B3764;
  }

  .review {
    width: 100%;
    font-size: 11px;
    padding: 5px 1rem;
    margin: 0px;
    color: #1B3764;
  }
`;

/*const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px;
`;*/

function ReviewList() {
  //const [bookList, setBookList] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);

  const reviewList = [
    { title: "도서 1", score: "4.5", user: "abc**", review: "리뷰" },
    { title: "도서 2", score: "4.0", user: "abc**", review: "리뷰" },
    { title: "도서 3", score: "3.5", user: "abc**", review: "리뷰" }
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
      <ReviewListField>
        <div className="listDiv">
          {reviewList.map((el, index) => (
            <div>
              <Link to={`/review/${index}`}>
                <div className="reviewList" key={index}>
                    <div className="titleContainer">
                    <div className="bookTitle"><span>{el.title}</span></div>
                    <FontAwesomeIcon icon={faCircle} size="2xs" style={{color: "#ffca42",}} />
                    <div className="score"><span>{el.score} / 5.0</span></div>
                    </div>
                    <div className="userName"><span>{el.user}</span></div>
                    <div className="review"><span>{el.review}</span></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </ReviewListField>
    </div>
  );
}

export default ReviewList;