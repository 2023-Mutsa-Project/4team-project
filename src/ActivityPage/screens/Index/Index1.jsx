import React from "react";
import { useNavigate } from "react-router-dom";
import "./style1.css";

export const Index1 = () => {
  const navigate = useNavigate();

  const handleHomePageClick = () => {
    navigate("/");
  };
  const handleEventPageClick = () => {
    navigate("/event");
  };
  const handleTypetestPageClick = () => {
    navigate("/typetest");
  };
  const handleQuizPageClick = () => {
    navigate("/quiz");
  };

  return (
    <div className="index">
      <div className="div">
        {/* FOOTER */}
        <footer className="footer-1">
          <div className="content">
            <div className="footer-content">
              <div className="book">
                <div className="logo">
                  <div className="text-wrapper">Pages</div>
                  <img
                    className="img"
                    alt="Logo"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/logo@2x.png"
                  />
                </div>
                <div className="icon">
                  <div className="element">
                    <div className="overlap-group">
                      <div className="text-wrapper-2"></div>
                    </div>
                  </div>
                  <div className="element">
                    <div className="overlap-group">
                      <div className="text-wrapper-3"></div>
                    </div>
                  </div>
                  <div className="element">
                    <div className="overlap-group">
                      <div className="text-wrapper-4"></div>
                    </div>
                  </div>
                  <div className="overlap-wrapper">
                    <div className="overlap-group">
                      <div className="text-wrapper-5"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-2">
                <div className="explore">
                  <p className="home-about-us">
                    Home <br />
                    About Us <br />
                    Services <br />
                    Appointments <br />
                    Blog
                    <br />
                    Contact Us
                  </p>
                  <img
                    className="icon-2"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/icon@2x.png"
                  />
                  <img
                    className="icon-3"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/icon@2x.png"
                  />
                  <img
                    className="icon-4"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/icon@2x.png"
                  />
                  <img
                    className="icon-5"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/icon@2x.png"
                  />
                  <img
                    className="icon-6"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/icon@2x.png"
                  />
                  <img
                    className="icon-7"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/icon@2x.png"
                  />
                  <div className="text-wrapper-6">Explore</div>
                </div>
                <div className="utility">
                  <p className="start-here-style">
                    Start here <br />
                    Style guide <br />
                    404 not found <br />
                    Password protected <br />
                    Licenses <br />
                    Changelog
                  </p>
                  <img
                    className="icon-8"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/icon@2x.png"
                  />
                  <img
                    className="icon-9"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/icon@2x.png"
                  />
                  <img
                    className="icon-10"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/icon@2x.png"
                  />
                  <img
                    className="icon-11"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/icon@2x.png"
                  />
                  <img
                    className="icon-12"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/icon@2x.png"
                  />
                  <img
                    className="icon-13"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/icon@2x.png"
                  />
                  <div className="text-wrapper-6">Utility Pages</div>
                </div>
                <div className="contact">
                  <div className="text-wrapper-7">Keep in Touch</div>
                  <div className="content-3">
                    <div className="address">
                      <div className="text-wrapper-8">Address :</div>
                      <p className="p">
                        24A Kingston St, Los Vegas NC 28202, USA.
                      </p>
                    </div>
                    <div className="mail">
                      <div className="text-wrapper-9">Mail :</div>
                      <div className="text-wrapper-10">support@doctors.com</div>
                    </div>
                    <div className="phone">
                      <div className="text-wrapper-9">Phone :</div>
                      <p className="text-wrapper-11">(+22) 123 - 4567 - 900</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright">
              <img
                className="line"
                alt="Line"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/line.svg"
              />
              <div className="copyright-2">
                <div className="text-wrapper-12">©</div>
                <div className="designed-by">
                  <p className="drafted-by">
                    <span className="span">Drafted by </span>
                    <span className="text-wrapper-13">Victorflow</span>
                    <span className="span"> - Powered by </span>
                    <span className="text-wrapper-13">Webflow</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* HEADER */}
        <header className="header">
          <div className="overlap-header">
            <div className="logo-wrapper">
              <div className="logo-2">
                <div className="text-wrapper-14-1">도서 공유 커뮤니티</div>
                <img
                  className="logo-3"
                  alt="Logo"
                  src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/logo-1@2x.png"
                />
              </div>
            </div>
            <div className="button-header">
              <div className="navbar">
                <div
                  className="text-wrapper-15-1"
                  onClick={handleHomePageClick}
                >
                  Home
                </div>
                <div className="text-wrapper-15-1">도서 공유</div>
                <div className="view">
                  <div className="text-wrapper-16-1">독서 활동</div>
                  <img
                    className="chevron-down"
                    alt="Chevron down"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/chevron-down.svg"
                  />
                </div>
                <div
                  className="text-wrapper-15-1"
                  onClick={handleEventPageClick}
                >
                  이벤트 및 클럽
                </div>
                <div className="text-wrapper-15-1">독서 토론</div>
                <div className="cart">
                  <div className="overlap-2-1">
                    <img
                      className="avatar"
                      alt="Avatar"
                      src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6571a94e163d7a7791ee96c7/img/avatar-3814049-1.svg"
                    />
                    <div className="number">
                      <div className="div-wrapper-1">
                        <div className="text-wrapper-17-1">01</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="button-2-1">
                <div className="text-wrapper-18-1">로그인</div>
              </button>
            </div>
          </div>
        </header>
        <div className="view-2">
          <div className="about">
            <img
              className="image-quiz"
              alt="Image"
              src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/image-2.png"
            />
            <div className="title-1">
              <div className="name-wrapper">
                <div className="name-quizbook" />
              </div>
              <div className="button-3-1" onClick={handleQuizPageClick}>
                <div className="text-wrapper-19-1">시작하기</div>
                <div className="text-wrapper-20-1">이달의 독서 퀴즈</div>
              </div>
            </div>
          </div>
          <div className="ranking">
            <div className="trusted-by">
              <div className="content-4-1">
                <div className="element-2-1">
                  <div className="text-wrapper-21-1">정답률 98.99%</div>
                  <div className="text-wrapper-22-1">Amazen Corp</div>
                </div>
                <div className="element-3-1">
                  <div className="text-wrapper-23-1">정답률 98.65%</div>
                  <div className="text-wrapper-24-1">Megan Books</div>
                </div>
                <div className="element-4-1">
                  <div className="text-wrapper-25-1">정답률 97.84%</div>
                  <div className="text-wrapper-24-1">Los Books</div>
                </div>
              </div>
            </div>
            <div className="title-2">
              <img
                className="line-2"
                alt="Line"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/line-12.svg"
              />
              <div className="text-wrapper-26-1">독서 퀴즈 랭킹</div>
            </div>
            <img
              className="pngwing"
              alt="Pngwing"
              src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/pngwing-1.png"
            />
            <img
              className="pngwing-2"
              alt="Pngwing"
              src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/pngwing-1.png"
            />
            <img
              className="pngwing-3"
              alt="Pngwing"
              src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/pngwing-1.png"
            />
            <img
              className="element-st"
              alt="Element"
              src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/1st@2x.png"
            />
            <img
              className="element-nd"
              alt="Element"
              src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/2nd@2x.png"
            />
            <img
              className="element-rd"
              alt="Element"
              src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/3rd@2x.png"
            />
            <div className="view-3">
              <div className="text-wrapper-27-1">랭킹 더보기</div>
            </div>
          </div>
          <div className="text-wrapper-28-1">독서 퀴즈</div>
        </div>
        <div className="text-wrapper-29-1">독서 유형 테스트</div>
        <div className="view-4">
          <div className="text-wrapper-28-1">자유게시판</div>
          <div className="overlap-group-wrapper-1">
            <div className="overlap-group-2-1">
              <div className="rectangle-1" />
              <div className="text-wrapper-30-1">더보기</div>
            </div>
          </div>
          <div className="view-5">
            <div className="overlap-3-1">
              <img
                className="line-3"
                alt="Line"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/line-2.svg"
              />
              <img
                className="line-4"
                alt="Line"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/line-3.svg"
              />
              <img
                className="line-5"
                alt="Line"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/line-4.svg"
              />
              <img
                className="line-6"
                alt="Line"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/line-5.svg"
              />
              <div className="text-wrapper-31-1">NO</div>
              <div className="text-wrapper-32-1">글쓴이</div>
              <div className="text-wrapper-33-1">작성시간</div>
              <div className="text-wrapper-34-1">좋아요</div>
              <div className="text-wrapper-35-1">제목</div>
              <div className="group">
                <div className="text-wrapper-36-1">팁1</div>
                <div className="text-wrapper-37-1">1</div>
                <div className="text-wrapper-38-1">abc</div>
                <div className="overlap-group-3-1">
                  <div className="text-wrapper-39-1">10분전</div>
                  <div className="text-wrapper-40-1">0</div>
                </div>
              </div>
              <div className="group-2">
                <div className="text-wrapper-36-1">팁2</div>
                <div className="text-wrapper-37-1">2</div>
                <div className="text-wrapper-38-1">bcd</div>
                <div className="overlap-group-3-1">
                  <div className="text-wrapper-39-1">15분전</div>
                  <div className="text-wrapper-40-1">2</div>
                </div>
              </div>
              <div className="group-3">
                <div className="text-wrapper-36-1">팁3</div>
                <div className="text-wrapper-37-1">3</div>
                <div className="text-wrapper-38-1">cde</div>
                <div className="overlap-group-3-1">
                  <div className="text-wrapper-39-1">20분전</div>
                  <div className="text-wrapper-40-1">1</div>
                </div>
              </div>
              <div className="group-4">
                <div className="overlap-group-4-1">
                  <div className="text-wrapper-41-1">new</div>
                </div>
              </div>
              <div className="group-5">
                <div className="overlap-4-1">
                  <div className="text-wrapper-41-1">new</div>
                </div>
                <div className="group-6">
                  <div className="overlap-group-4-1">
                    <div className="text-wrapper-41-1">new</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="view-6">
          <div className="author">
            <div className="image-2-1" />
          </div>
          <div className="title-3">
            <div className="content-5-1">
              <div className="name-2-1">
                <div className="text-wrapper-42-1">나의 독서 스타일 테스트</div>
              </div>
            </div>
            <button className="button-4-1">
              <div
                className="text-wrapper-43-1"
                onClick={handleTypetestPageClick}
              >
                시작하기
              </div>
            </button>
          </div>
        </div>
        <img
          className="line-7"
          alt="Line"
          src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/line-13.svg"
        />
        <img
          className="line-8"
          alt="Line"
          src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/line-13.svg"
        />
      </div>
    </div>
  );
};

// export default Index1;
