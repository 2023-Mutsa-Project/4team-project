import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle
} from "@fortawesome/free-solid-svg-icons";
import { FadeLoader } from "react-spinners";

const BookListListField = styled.div`
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

  .bookList {
    width: 20rem;
    height: 6rem;
    background-color: #1B3764;
    border: 0px;
    box-shadow: 0px 2px 8px 0px rgb(174, 174, 174);
    margin: 10px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bookListListTitle {
    font-weight: bold;
    font-size: 13px;
    padding: 0px;
    margin: 0px;
    color: white;
  }
`;

const ModalField = styled.div`
width: 100%;

.modalBookContainer {
  width: 41rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
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

.bookListBanner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  color: white;
  background-color: #1B3764;
  width: 39rem;
  height: 3rem;
  padding: 1rem;
}

.bookListTitle {
  font-size: 20px;
  margin-bottom: 2rem;
}
`;

/*const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px;
`;*/

function BookListList() {
  //const [bookList, setBookList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  
  const bookList = [
    { coverImage: "/bookcover.png", averageRating: "4.5", reviewCount: "100" },
    { coverImage: "/bookcover.png", averageRating: "4.0", reviewCount: "200" },
    { coverImage: "/bookcover.png", averageRating: "3.5", reviewCount: "300" },
    { coverImage: "/bookcover.png", averageRating: "3.0", reviewCount: "400" },
    { coverImage: "/bookcover.png", averageRating: "4.5", reviewCount: "500" },
    { coverImage: "/bookcover.png", averageRating: "4.0", reviewCount: "600" },
  ];

  const bookListList = [
    { name: "연예인 OOO이 추천하는 도서 리스트" },
    { name: "영화화된 도서 리스트" },
    { name: "겨울에 읽기 좋은 도서 리스트" },
    { name: "감성 도서 리스트" }
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
      <BookListListField>
        <div className="listDiv">
          {bookListList.slice(0, 2).map((el, index) => (
            <div onClick={()=> setIsOpen(true)}>
                <div className="bookList" key={index}>
                    <span className="bookListListTitle">{el.name}</span>
                </div>
            </div>
          ))}
        </div>
        <div className="listDiv">
          {bookListList.slice(2, 4).map((el, index) => (
            <div onClick={()=> setIsOpen(true)}>
                <div className="bookList" key={index}>
                    <span className="bookListListTitle">{el.name}</span>
                </div>
            </div>
          ))}
        </div>
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <ModalField>
        <h3 className="bookListTitle">도서 리스트 상세</h3>
        <div className="bookListBanner">추천 도서 리스트 제목</div>
        <div className="modalBookContainer">
        {bookList.slice(0, 3).map((el, index) => (
          <div key={el.bookId}>
            <Link to={`/review/${el.bookId}`}>
              <div className="bookDiv">
                <img src={el.coverImage} />
                <div className="descDiv">
                  <span className="score">
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2xs"
                      style={{ color: "#ffca42" }}
                    />{" "}
                    평점 {el.averageRating} / 5.0
                  </span>
                  <span className="reviewNum">
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
        <div className="modalBookContainer">
        {bookList.slice(3, 6).map((el, index) => (
          <div key={el.bookId}>
            <Link to={`/review/${el.bookId}`}>
              <div className="bookDiv">
                <img src={el.coverImage} />
                <div className="descDiv">
                  <span className="score">
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2xs"
                      style={{ color: "#ffca42" }}
                    />{" "}
                    평점 {el.averageRating} / 5.0
                  </span>
                  <span className="reviewNum">
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
        </ModalField>
        </Modal>
      </BookListListField>
    </div>
  );
}

export default BookListList;