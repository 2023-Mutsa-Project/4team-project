import React from "react";
import { useNavigate } from "react-router-dom";
import "./style3.css";

export const Index3 = () => {
  const navigate = useNavigate();

  const handleHomePageClick = () => {
    navigate("/");
  };
  const handleActivityPageClick = () => {
    navigate("/activity");
  };

  const handleEventPageClick = () => {
    navigate("/event");
  };

  const handleQuizQuestionPageClick = () => {
    navigate("/quiz-questions");
  };

  return (
    <div className="index">
      <div className="div-3">
        <footer className="footer-3">
          <div className="content-c">
            <div className="footer-content">
              <div className="book">
                <div className="logo">
                  <div className="text-wrapper">Pages</div>
                  <img
                    className="img"
                    alt="Logo"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/logo@2x.png"
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
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/icon@2x.png"
                  />
                  <img
                    className="icon-3"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/icon-1@2x.png"
                  />
                  <img
                    className="icon-4"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/icon-2@2x.png"
                  />
                  <img
                    className="icon-5"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/icon-3@2x.png"
                  />
                  <img
                    className="icon-6"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/icon-4@2x.png"
                  />
                  <img
                    className="icon-7"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/icon-5@2x.png"
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
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/icon-6@2x.png"
                  />
                  <img
                    className="icon-9"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/icon-7@2x.png"
                  />
                  <img
                    className="icon-10"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/icon-8@2x.png"
                  />
                  <img
                    className="icon-11"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/icon-9@2x.png"
                  />
                  <img
                    className="icon-12"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/icon-10@2x.png"
                  />
                  <img
                    className="icon-13"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/icon-11@2x.png"
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
                className="line-c"
                alt="Line"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/line.svg"
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

        {/* RANKING */}
        <div className="ranking-3">
          <div className="ranking-3-elements">
            <div className="trusted-by-3">
              <div className="content-4-3">
                <div className="element-2-3">
                  <div className="text-wrapper-14-3">정답률 98.99%</div>
                  <div className="text-wrapper-15-3">Amazen Corp</div>
                </div>
                <div className="element-3-3">
                  <div className="text-wrapper-16-3">정답률 98.65%</div>
                  <div className="text-wrapper-17-3">Megan Books</div>
                </div>
                <div className="element-4-3">
                  <div className="text-wrapper-18-3">정답률 97.84%</div>
                  <div className="text-wrapper-19-3">Los Books</div>
                </div>
              </div>
            </div>
            <div className="title-c">
              <img
                className="line-2-3"
                alt="Line"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/line-12.svg"
              />
              <div className="text-wrapper-20-3">독서 퀴즈 랭킹</div>
            </div>
            <img
              className="pngwing-c"
              alt="Pngwing"
              src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/pngwing-1.png"
            />
            <img
              className="pngwing-2-c"
              alt="Pngwing"
              src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/pngwing-1.png"
            />
            <img
              className="pngwing-3-c"
              alt="Pngwing"
              src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/pngwing-1.png"
            />
            <img
              className="element-st-3"
              alt="Element"
              src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/1st@2x.png"
            />
            <img
              className="element-nd-3"
              alt="Element"
              src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/2nd@2x.png"
            />
            <img
              className="element-rd-3"
              alt="Element"
              src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/3rd@2x.png"
            />
            <div className="view-c">
              <div className="text-wrapper-21-3">랭킹 더보기</div>
            </div>
          </div>
        </div>

        {/* QUIZ_START */}
        <div className="about-3">
          <img
            className="image-quizbook"
            alt="Image"
            src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/image-2.png"
          />
          <div className="title-2-3">
            <div className="content-5-3">
              <div className="name-c">
                <div className="text-wrapper-22-3">이달의 독서 퀴즈</div>
                <img
                  className="line-3-3"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/line-1.svg"
                />
              </div>
              <p className="text-wrapper-23-3">
                이달의 도서는 조지 오웰의 ⌈동물 농장⌋ !<br />
                이달의 도서를 읽고 퀴즈왕에 도전해보세요
              </p>
            </div>
            <button className="button-c" onClick={handleQuizQuestionPageClick}>
              <div className="text-wrapper-24-3">시작하기</div>
            </button>
          </div>
          <div className="share">
            <img
              className="social-media-3"
              alt="Social media"
              src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/social-media.svg"
            />
            <div className="text-wrapper-25-3">퀴즈 공유하기</div>
          </div>
        </div>

        {/* HEADER BANNER */}
        <div className="banner-3">
          <div className="title-wrapper-3">
            <div className="title-3-3">
              <img
                className="line-4-3"
                alt="Line"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/657feb54d664db7fd57bace8/img/line-2.svg"
              />
              <div className="text-wrapper-26-3">이달의 독서 퀴즈</div>
            </div>
          </div>

          {/* HEADER */}
          <header className="header">
            <div className="overlap-5">
              <div className="logo-wrapper">
                <div className="logo-2">
                  <div className="text-wrapper-56">도서 공유 커뮤니티</div>
                  <img
                    className="logo-3"
                    alt="Logo"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/logo-1@2x.png"
                  />
                </div>
              </div>
              <div className="button-3-3">
                <div className="navbar">
                  <div
                    className="text-wrapper-57"
                    onClick={handleHomePageClick}
                  >
                    Home
                  </div>
                  <div className="text-wrapper-57">도서 공유</div>
                  <div className="view">
                    <div
                      className="text-wrapper-58"
                      onClick={handleActivityPageClick}
                    >
                      독서 활동
                    </div>
                    <img
                      className="chevron-down"
                      alt="Chevron down"
                      src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/chevron-down.svg"
                    />
                  </div>
                  <div
                    className="text-wrapper-57"
                    onClick={handleEventPageClick}
                  >
                    이벤트 및 클럽
                  </div>
                  <div className="text-wrapper-57">독서 토론</div>
                  <div className="cart">
                    <div className="overlap-6">
                      <img
                        className="avatar"
                        alt="Avatar"
                        src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/avatar-3814049-1.svg"
                      />
                      <div className="number">
                        <div className="overlap-group-10">
                          <div className="text-wrapper-59">01</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="button-4">
                  <div className="text-wrapper-41">로그인</div>
                </button>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};
