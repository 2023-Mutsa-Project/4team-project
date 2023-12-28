import React from "react";
import "./style10.css";

import { useNavigate } from "react-router-dom";

export const Index10 = () => {
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

  return (
    <div className="index">
      <div className="div-10">
        <div className="buttons-ranking">
          <div className="go-to-all-ranking">
            <div className="text-wrapper-j">전체 랭킹 보러 가기</div>
          </div>
          <div className="share-my-result">
            <div className="text-wrapper-j">퀴즈 결과 공유하기</div>
          </div>
        </div>
        <div className="quiz-grade-content">
          <div className="quiz-grade">당신의 독서 퀴즈 점수는?</div>
          <div className="quiz-point">80</div>
          <img
            className="line-j"
            alt="Line"
            src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65890d6ddb4b0f2ce8ecbb81/img/line-13.svg"
          />
        </div>
        <div className="my-quiz-ranking">
          <div className="overlap-group-j">
            <div className="my-ranking">나의 독서 퀴즈 랭킹</div>
            <div className="rectangle-j" />
            <div className="user-ranking">
              <img
                className="pngwing-j"
                alt="Pngwing"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/pngwing-1.png"
              />
              <div className="text-wrapper-2-10">누적 정답률 74.28%</div>
              <div className="text-wrapper-3-10">김철수(Cheolsu1212)</div>
              <div className="text-wrapper-4-10">597th</div>
            </div>
          </div>
        </div>

        {/* HEADER BANNER */}
        <div className="banner-j">
          <div className="overlap-j">
            <div className="background" />
            <div className="typetest-title">
              <div className="title-j">
                <img
                  className="img-j"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/658152ac987d3fd27face89a/img/line-1.svg"
                />
                <div className="text-wrapper-5-10">이달의 독서 퀴즈</div>
              </div>
            </div>
            <div className="div-2-10">
              <div className="overlap-2-10">
                <div className="div-2-10">
                  <img
                    className="image-j"
                    alt="Image"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65890d6ddb4b0f2ce8ecbb81/img/image.png"
                  />
                </div>

                {/* HEADER */}
                <div className="header-j">
                  <div className="icon-j">
                    <div className="logo-j">
                      <div className="text-wrapper-6-10">도서 공유 커뮤니티</div>
                      <img
                        className="logo-2-10"
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
                        <div className="overlap-3">
                          <img
                            className="avatar"
                            alt="Avatar"
                            src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65890d6ddb4b0f2ce8ecbb81/img/avatar-3814049-1.svg"
                          />
                          <div className="number">
                            <div className="div-wrapper-10">
                              <div className="text-wrapper-7-10">01</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="button-2">
                      <div className="text-wrapper-8-10">로그인</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer-j">
          <div className="content-j">
            <div className="footer-content">
              <div className="book">
                <div className="logo-3-10">
                  <div className="text-wrapper-9-10">Pages</div>
                  <img
                    className="logo-4-10"
                    alt="Logo"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/logo@2x.png"
                  />
                </div>
                <div className="icon-2-10">
                  <div className="element">
                    <div className="overlap-group-3-10">
                      <div className="text-wrapper-10-10"></div>
                    </div>
                  </div>
                  <div className="element">
                    <div className="overlap-group-3-10">
                      <div className="text-wrapper-11-10"></div>
                    </div>
                  </div>
                  <div className="element">
                    <div className="overlap-group-3-10">
                      <div className="text-wrapper-12-10"></div>
                    </div>
                  </div>
                  <div className="overlap-wrapper">
                    <div className="overlap-group-3-10">
                      <div className="text-wrapper-13-10"></div>
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
                  <div className="text-wrapper-14-10">Explore</div>
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
                  <div className="text-wrapper-14-10">Utility Pages</div>
                </div>
                <div className="contact">
                  <div className="text-wrapper-15-10">Keep in Touch</div>
                  <div className="content-3">
                    <div className="address">
                      <div className="text-wrapper-16-10">Address :</div>
                      <p className="p">
                        24A Kingston St, Los Vegas NC 28202, USA.
                      </p>
                    </div>
                    <div className="mail">
                      <div className="text-wrapper-17-10">Mail :</div>
                      <div className="text-wrapper-18-10">support@doctors.com</div>
                    </div>
                    <div className="phone">
                      <div className="text-wrapper-17-10">Phone :</div>
                      <p className="text-wrapper-19-10">(+22) 123 - 4567 - 900</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright">
              <img
                className="line-2-10"
                alt="Line"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/line.svg"
              />
              <div className="copyright-2">
                <div className="text-wrapper-20-10">©</div>
                <div className="designed-by">
                  <p className="drafted-by">
                    <span className="span">Drafted by </span>
                    <span className="text-wrapper-21-10">Victorflow</span>
                    <span className="span"> - Powered by </span>
                    <span className="text-wrapper-21-10">Webflow</span>
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
