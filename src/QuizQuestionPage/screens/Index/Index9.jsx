import React from "react";
import "./style9.css";

import { useNavigate } from "react-router-dom";

export const Index9 = () => {
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
  const handleTypetestResultPageClick = () => {
    navigate("/typetest-result");
  };
  const handleQuizResultPageClick = () => {
    navigate("/quiz-result");
  };

  return (
    <div className="index">
      <div className="div-9">
        <div className="flexcontainer-9">
          <p className="text-i">
            <span className="text-wrapper-i">
              소설의 마지막에서,
              <br />
            </span>
          </p>
          <p className="text-i">
            <span className="text-wrapper-i">
              스퀼러는 일주일 동안 (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )들에게
              <br />
            </span>
          </p>
          <p className="text-i">
            <span className="text-wrapper-i">
              새 노래를 가르쳤습니다.
              <br />
            </span>
          </p>
          <p className="text-i">
            <span className="text-wrapper-i">
              <br />
            </span>
          </p>
          <p className="text-i">
            <span className="text-wrapper-i">
              &lt;네 발은 좋고 두 발은 더 좋다!&gt;
              <br />
            </span>
          </p>
          <p className="text-i">
            <span className="text-wrapper-i">
              &lt;네 발은 좋고 두 발은 더 좋다!&gt;
              <br />
            </span>
          </p>
          <p className="text-i">
            <span className="text-wrapper-i">
              &lt;네 발은 좋고 두 발은 더 좋다!&gt;
              <br />
            </span>
          </p>
          <p className="text-i">
            <span className="text-wrapper-i">
              <br />
            </span>
          </p>
          <p className="text-i">
            <span className="text-wrapper-i">
              빈칸에 들어갈 동물은 누구일까요?
              <br />
            </span>
          </p>
          <p className="text-i">
            <span className="text-wrapper-i">
              <br />
            </span>
          </p>
          <p className="text-i">
            <span className="text-wrapper-i">
              <br />
            </span>
          </p>
          <p className="text-i">
            <span className="text-wrapper-i">{""}</span>
          </p>
        </div>
        <div className="question-number">Q1.</div>
        <div className="quizchoice"
        onClick={handleQuizResultPageClick}>
          <div className="overlap-group-i">
            <div className="text-wrapper-2-9">양</div>
          </div>
        </div>
        <div className="overlap-wrapper-i"
        onClick={handleQuizResultPageClick}>
          <div className="overlap-i">
            <div className="text-wrapper-3-9">돼지</div>
          </div>
        </div>
        <div className="overlap-group-wrapper-9"
        onClick={handleQuizResultPageClick}>
          <div className="div-wrapper-9">
            <div className="text-wrapper-4-9">까마귀</div>
          </div>
        </div>
        <div className="quizchoice-2"
        onClick={handleQuizResultPageClick}>
          <div className="overlap-2-9">
            <div className="text-wrapper-5-9">개</div>
          </div>
        </div>
        <div className="quizchoice-3"
        onClick={handleQuizResultPageClick}>
          <div className="overlap-3-9">
            <div className="text-wrapper-4-9">당나귀</div>
          </div>
        </div>
        <img
          className="quiz-image"
          alt="Quiz image"
          src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6587dde7d2649088e45caf40/img/quiz-image.png"
        />

        {/* HEADER BANNER */}
        <div className="banner-question">
          <div className="overlap-4-9">
            <div className="background" />
            <div className="typetest-title">
              <div className="title-9">
                <img
                  className="line-i"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/658152ac987d3fd27face89a/img/line-1.svg"
                />
                <div className="text-wrapper-6-9">이달의 독서 퀴즈</div>
              </div>
            </div>
            <div className="div-2-9">
              <div className="overlap-5-9">
                <div className="div-2-9">
                  <img
                    className="image-9"
                    alt="Image"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65841aac0615bda4b1bf558a/img/image.png"
                  />
                </div>

                {/* HEADER */}
                <div className="header-i">
                  <div className="icon-i">
                    <div className="logo-i">
                      <div className="text-wrapper-7-9">도서 공유 커뮤니티</div>
                      <img
                        className="img-i"
                        alt="Logo"
                        src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/logo-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="button">
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
                          className="chevron-down-1"
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
                            src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6587dde7d2649088e45caf40/img/avatar-3814049-1.svg"
                          />
                          <div className="number">
                            <div className="overlap-group-3-9">
                              <div className="text-wrapper-8-9">01</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="button-2">
                      <div className="text-wrapper-9-9">로그인</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer-i">
          <div className="content">
            <div className="footer-content">
              <div className="book">
                <div className="logo-2-9">
                  <div className="text-wrapper-10-9">Pages</div>
                  <img
                    className="logo-3-9"
                    alt="Logo"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/logo@2x.png"
                  />
                </div>
                <div className="icon-2-9">
                  <div className="element">
                    <div className="overlap-group-4-9">
                      <div className="text-wrapper-11-9"></div>
                    </div>
                  </div>
                  <div className="element">
                    <div className="overlap-group-4-9">
                      <div className="text-wrapper-12-9"></div>
                    </div>
                  </div>
                  <div className="element">
                    <div className="overlap-group-4-9">
                      <div className="text-wrapper-13-9"></div>
                    </div>
                  </div>
                  <div className="element-2-9">
                    <div className="overlap-group-4-9">
                      <div className="text-wrapper-14-9"></div>
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
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/icon@2x.png"
                  />
                  <img
                    className="icon-8"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/icon@2x.png"
                  />
                  <div className="text-wrapper-15-9">Explore</div>
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
                  <img
                    className="icon-14"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/icon@2x.png"
                  />
                  <div className="text-wrapper-15-9">Utility Pages</div>
                </div>
                <div className="contact">
                  <div className="text-wrapper-16-9">Keep in Touch</div>
                  <div className="content-3">
                    <div className="address">
                      <div className="text-wrapper-17-9">Address :</div>
                      <p className="p">
                        24A Kingston St, Los Vegas NC 28202, USA.
                      </p>
                    </div>
                    <div className="mail">
                      <div className="text-wrapper-18-9">Mail :</div>
                      <div className="text-wrapper-19-9">support@doctors.com</div>
                    </div>
                    <div className="phone">
                      <div className="text-wrapper-18-9">Phone :</div>
                      <p className="text-wrapper-20-9">(+22) 123 - 4567 - 900</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright">
              <img
                className="line-2-9"
                alt="Line"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/line.svg"
              />
              <div className="copyright-2">
                <div className="text-wrapper-21-9">©</div>
                <div className="designed-by">
                  <p className="drafted-by">
                    <span className="span">Drafted by </span>
                    <span className="text-wrapper-22-9">Victorflow</span>
                    <span className="span"> - Powered by </span>
                    <span className="text-wrapper-22-9">Webflow</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
