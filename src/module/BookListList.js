import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
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
            <div>
              <Link to={`/apply/${index}`}>
                <div className="bookList" key={index}>
                    <span className="bookListListTitle">{el.name}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="listDiv">
          {bookListList.slice(2, 4).map((el, index) => (
            <div>
              <Link to={`/apply/${index}`}>
                <div className="bookList" key={index}>
                    <span className="bookListListTitle">{el.name}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </BookListListField>
    </div>
  );
}

export default BookListList;