import React from "react";
import "./style8.css";

import { useNavigate } from "react-router-dom";

export const Index8 = () => {
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

  return (
    <div className="index">
      <div className="div-8">
        <div className="flexcontainer-8">
          <p className="text-h">
            <span className="text-wrapper-h">
              몰입해서 책을 읽던 중,
              <br />
            </span>
          </p>
          <p className="text-h">
            <span className="text-wrapper-h">
              모르는 표현이 나왔다.
              <br />
            </span>
          </p>
          <p className="text-h">
            <span className="text-wrapper-h">나의 선택은?</span>
          </p>
        </div>
        <img
          className="typetest-image"
          alt="Typetest image"
          src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6587ac4d6e7d9b67d9593eb9/img/typetest-image.png"
        />
        <div className="test-choices">
          <div className="choice" onClick={handleTypetestResultPageClick}>
            <div className="overlap-group-h">
              <div className="flexcontainer-8-2">
                <p className="span-wrapper">
                  <span className="span-h">
                    이 정도는 몰라도 이해하는 데 지장 없어!
                    <br />
                  </span>
                </p>
                <p className="span-wrapper">
                  <span className="span-h">
                    몰입에 방해되니 무시하고 계속 읽는다
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="overlap-group-h"
            onClick={handleTypetestResultPageClick}
          >
            <p className="p-h">곧바로 무슨 뜻인지 검색해서 알아본다</p>
          </div>
        </div>

        {/* HEADER BANNER */}
        <div className="banner-typetest">
          <div className="overlap-2-8">
            <div className="background" />
            <div className="typetest-title">
              <div className="title-h">
                <img
                  className="line-h"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/658152ac987d3fd27face89a/img/line-1.svg"
                />
                <div className="text-wrapper-2-8">독서 유형 테스트</div>
              </div>
            </div>
            <div className="div-2-8">
              <div className="overlap-3-8">
                <div className="div-2-8">
                  <img
                    className="image-h"
                    alt="Image"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65841aac0615bda4b1bf558a/img/image.png"
                  />
                </div>

                {/* HEADER */}
                <div className="header-h">
                  <div className="icon-h">
                    <div className="logo-h">
                      <div className="text-wrapper-3-8">도서 공유 커뮤니티</div>
                      <img
                        className="img-h"
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
                        <div className="overlap-4-8">
                          <img
                            className="avatar"
                            alt="Avatar"
                            src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6587ac4d6e7d9b67d9593eb9/img/avatar-3814049-1.svg"
                          />
                          <div className="number">
                            <div className="div-wrapper-h">
                              <div className="text-wrapper-4-8">01</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="button-2">
                      <div className="text-wrapper-5-8">로그인</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer-8">
          <div className="content">
            <div className="footer-content">
              <div className="book">
                <div className="logo-2-8">
                  <div className="text-wrapper-6-8">Pages</div>
                  <img
                    className="logo-3-8"
                    alt="Logo"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/logo@2x.png"
                  />
                </div>
                <div className="icon-2-8">
                  <div className="element">
                    <div className="overlap-group-3-8">
                      <div className="text-wrapper-7-8"></div>
                    </div>
                  </div>
                  <div className="element">
                    <div className="overlap-group-3-8">
                      <div className="text-wrapper-8-8"></div>
                    </div>
                  </div>
                  <div className="element">
                    <div className="overlap-group-3-8">
                      <div className="text-wrapper-9-8"></div>
                    </div>
                  </div>
                  <div className="element-2-8">
                    <div className="overlap-group-3-8">
                      <div className="text-wrapper-10-8"></div>
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
                  <img
                    className="icon-8"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/icon@2x.png"
                  />
                  <div className="text-wrapper-11-8">Explore</div>
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
                  <img
                    className="icon-14"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/icon@2x.png"
                  />
                  <div className="text-wrapper-11-8">Utility Pages</div>
                </div>
                <div className="contact">
                  <div className="text-wrapper-12-8">Keep in Touch</div>
                  <div className="content-3">
                    <div className="address">
                      <div className="text-wrapper-13-8">Address :</div>
                      <p className="text-wrapper-14-8">
                        24A Kingston St, Los Vegas NC 28202, USA.
                      </p>
                    </div>
                    <div className="mail">
                      <div className="text-wrapper-15-8">Mail :</div>
                      <div className="text-wrapper-16-8">
                        support@doctors.com
                      </div>
                    </div>
                    <div className="phone">
                      <div className="text-wrapper-15-8">Phone :</div>
                      <p className="text-wrapper-17-8">
                        (+22) 123 - 4567 - 900
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright">
              <img
                className="line-2-8"
                alt="Line"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/line.svg"
              />
              <div className="copyright-2">
                <div className="text-wrapper-18-8">©</div>
                <div className="designed-by">
                  <p className="drafted-by">
                    <span className="text-wrapper-19-8">Drafted by </span>
                    <span className="text-wrapper-20-8">Victorflow</span>
                    <span className="text-wrapper-19-8"> - Powered by </span>
                    <span className="text-wrapper-20-8">Webflow</span>
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
