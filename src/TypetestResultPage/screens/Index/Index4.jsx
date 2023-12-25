import React from "react";
import "./style4.css";

import { useNavigate } from "react-router-dom";

export const Index4 = () => {
  const navigate = useNavigate();

  const handleHomePageClick = () => {
    navigate("/");
  };
  const handleActivityPageClick = () => {
    navigate("/activity");
  };
  const handleTypetestResultPage2Click = () => {
    navigate("/typetest-result-2");
  };

  return (
    <div className="index">
      <div className="div-4">
        <footer className="footer-4">
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
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/icon@2x.png"
                  />
                  <img
                    className="icon-3"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/icon@2x.png"
                  />
                  <img
                    className="icon-4"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/icon@2x.png"
                  />
                  <img
                    className="icon-5"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/icon@2x.png"
                  />
                  <img
                    className="icon-6"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/icon@2x.png"
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
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/icon@2x.png"
                  />
                  <img
                    className="icon-9"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/icon@2x.png"
                  />
                  <img
                    className="icon-10"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/icon@2x.png"
                  />
                  <img
                    className="icon-11"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/icon@2x.png"
                  />
                  <img
                    className="icon-12"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/icon@2x.png"
                  />
                  <img
                    className="icon-13"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/icon@2x.png"
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
        <div className="testresult-share">
          <img
            className="social-media-4"
            alt="Social media"
            src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/658152ac987d3fd27face89a/img/social-media.svg"
          />
          <div className="text-wrapper-14-4">테스트 결과 공유하기</div>
        </div>
        <div className="testresult-title">당신의 독서 유형은</div>
        <img
          className="testresult-img"
          alt="Testresult img"
          src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/658152ac987d3fd27face89a/img/testresult-img.png"
        />
        <div className="testresult-buttons">
          <div
            className="go-to-reccomendation"
            onClick={handleTypetestResultPage2Click}
          >
            <p className="text-wrapper-15-4">나에게 맞는 추천 도서 보러 가기</p>
          </div>
          <div className="go-to-all-type">
            <div className="text-wrapper-15-4">전체 유형 보러 가기</div>
          </div>
        </div>
        <div className="testresult-report">
          <div className="overlap-d">
            <div className="flexcontainer">
              <p className="text">
                <span className="text-wrapper-16-4">
                  한 권의 책에 빠지면 읽고 또 읽는 당신!
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-16-4">
                  당신의 책장에는 이미 너덜너덜해진 책들이 가득하군요?
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-16-4">
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-16-4">
                  같은 책이더라도 읽을 때마다 새로운 점을 발견하고
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-16-4">
                  희열을 느끼는 당신은 독서계의 노력왕!
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-16-4">
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-16-4">
                  넓은 분야를 다방면으로 다루는 책보다는
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-16-4">
                  한 분야의 깊은 지식을 탐구하는 것을 좋아하는 당신,
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-16-4">
                  누군가와 관심사가 통하면 밤새도록 이야기할 수도 있어요
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-16-4">
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-16-4">
                  당신의 독서 유형에 딱 맞는 책을 추천해드릴게요
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-16-4">{""}</span>
              </p>
            </div>
            <div className="rectangle-d" />
            <div className="div-wrapper-4">
              <p className="text-wrapper-15-4">나의 독서 유형 분석 보고서</p>
            </div>
            <div className="gagebars">
              <div className="imagination-level">
                <div className="text-wrapper-17-4">상상력</div>
                <div className="gagebar">
                  <img
                    className="rectangle-2-4"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/658152ac987d3fd27face89a/img/rectangle-5.svg"
                  />
                  <div className="rectangle-3-4" />
                  <div className="rectangle-4" />
                  <div className="rectangle-5" />
                  <img
                    className="rectangle-6"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/658152ac987d3fd27face89a/img/rectangle-9.svg"
                  />
                </div>
              </div>
              <div className="immersion-level">
                <div className="text-wrapper-17-4">몰입력</div>
                <div className="gagebar">
                  <img
                    className="rectangle-2-4"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/658152ac987d3fd27face89a/img/rectangle-10.svg"
                  />
                  <div className="rectangle-3-4" />
                  <div className="rectangle-4" />
                  <div className="rectangle-7" />
                  <img
                    className="rectangle-6"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/658152ac987d3fd27face89a/img/rectangle-14.svg"
                  />
                </div>
              </div>
              <div className="patience-level">
                <div className="text-wrapper-17-4">인내심</div>
                <div className="gagebar">
                  <img
                    className="rectangle-2-4"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/658152ac987d3fd27face89a/img/rectangle-15.svg"
                  />
                  <div className="rectangle-3-4" />
                  <div className="rectangle-4" />
                  <div className="rectangle-7" />
                  <img
                    className="rectangle-6"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/658152ac987d3fd27face89a/img/rectangle-19.svg"
                  />
                </div>
              </div>
              <div className="curiosity-level">
                <div className="text-wrapper-17-4">호기심</div>
                <div className="gagebar">
                  <img
                    className="rectangle-2-4"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/658152ac987d3fd27face89a/img/rectangle-20.svg"
                  />
                  <div className="rectangle-3-4" />
                  <div className="rectangle-8" />
                  <div className="rectangle-5" />
                  <img
                    className="rectangle-6"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/658152ac987d3fd27face89a/img/rectangle-24.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HEADER BANNER */}
        <div className="banner-4">
          <div className="overlap-2-4">
            <div className="background" />
            <div className="typetest-title">
              <div className="title-t">
                <img
                  className="line-2-t"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/658152ac987d3fd27face89a/img/line-1.svg"
                />
                <div className="text-wrapper-18-4">독서 유형 테스트</div>
              </div>
            </div>
            <div className="div-2-4">
              <div className="overlap-3-4">
                <div className="div-2-4">
                  <img
                    className="image-d"
                    alt="Image"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/658152ac987d3fd27face89a/img/image.png"
                  />
                </div>

                {/* HEADER */}
                <header className="header">
                  <div className="overlap-5">
                    <div className="logo-wrapper-r">
                      <div className="logo-2">
                        <div className="text-wrapper-56">
                          도서 공유 커뮤니티
                        </div>
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
                            className="chevron-down-1"
                            alt="Chevron down"
                            src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/chevron-down.svg"
                          />
                        </div>
                        <div className="text-wrapper-57">이벤트 및 클럽</div>
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
        </div>
      </div>
    </div>
  );
};
