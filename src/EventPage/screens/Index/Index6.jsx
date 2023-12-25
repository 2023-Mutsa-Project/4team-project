import React from "react";
import "./style6.css";

import { useNavigate } from "react-router-dom";

export const Index6 = () => {
  const navigate = useNavigate();

  const handleHomePageClick = () => {
    navigate("/");
  };

  const handleActivityPageClick = () => {
    navigate("/activity");
  };

  const handleEventDetailPageClick = () => {
    navigate("/eventdetail");
  };

  return (
    <div className="index">
      <div className="div-6">
        <div className="event-banners">
          <img
            className="social-media-1-6"
            alt="Social media"
            src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65829ae64255e00ada3cd33e/img/social-media---7.png"
            onClick={handleEventDetailPageClick}
          />
          <img
            className="img-f"
            alt="Social media"
            src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65829ae64255e00ada3cd33e/img/social-media---3.png"
            onClick={handleEventDetailPageClick}
          />
          <img
            className="social-media-2-6"
            alt="Social media"
            src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65829ae64255e00ada3cd33e/img/social-media---2.png"
            onClick={handleEventDetailPageClick}
          />
          <img
            className="social-media-3-6"
            alt="Social media"
            src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65829ae64255e00ada3cd33e/img/social-media---5.png"
            onClick={handleEventDetailPageClick}
          />
        </div>
        <div className="button-more">
          <div className="overlap-group-f">
            <div className="send" />
            <div className="text-wrapper-f">더보기</div>
          </div>
        </div>

        {/* HEADER BANNER */}
        <div className="banner-event">
          <div className="overlap-f">
            <div className="background" />
            <div className="eventlist-title">
              <div className="title-f">
                <img
                  className="line-f"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65829ae64255e00ada3cd33e/img/line.svg"
                />
                <div className="text-wrapper-2-6">이벤트 및 클럽</div>
              </div>
            </div>
            <div className="div-2-6">
              <div className="overlap-2-6">
                <div className="div-2-6">
                  <img
                    className="image-f"
                    alt="Image"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65829ae64255e00ada3cd33e/img/image.png"
                  />
                </div>

                {/* HEADER */}
                <header className="header-event">
                  <div className="overlap-5">
                    <div className="logo-wrapper-f">
                      <div className="logo-2-6">
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

        <footer className="footer-f">
          <div className="content">
            <div className="footer-content">
              <div className="book">
                <div className="logo-3-6">
                  <div className="text-wrapper-6-6">Pages</div>
                  <img
                    className="logo-4-6"
                    alt="Logo"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65829ae64255e00ada3cd33e/img/logo-1@2x.png"
                  />
                </div>
                <div className="icon-2-6">
                  <div className="element">
                    <div className="overlap-group-3-6">
                      <div className="text-wrapper-7-6"></div>
                    </div>
                  </div>
                  <div className="element">
                    <div className="overlap-group-3-6">
                      <div className="text-wrapper-8-6"></div>
                    </div>
                  </div>
                  <div className="element">
                    <div className="overlap-group-3-6">
                      <div className="text-wrapper-9-6"></div>
                    </div>
                  </div>
                  <div className="overlap-wrapper">
                    <div className="overlap-group-3-6">
                      <div className="text-wrapper-10-6"></div>
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
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f23f78a2c3c29f8cec3bb/img/icon@2x.png"
                  />
                  <div className="text-wrapper-11-6">Explore</div>
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
                  <div className="text-wrapper-11">Utility Pages</div>
                </div>
                <div className="contact">
                  <div className="text-wrapper-12">Keep in Touch</div>
                  <div className="content-3">
                    <div className="address">
                      <div className="text-wrapper-13">Address :</div>
                      <p className="p">
                        24A Kingston St, Los Vegas NC 28202, USA.
                      </p>
                    </div>
                    <div className="mail">
                      <div className="text-wrapper-14-6">Mail :</div>
                      <div className="text-wrapper-15-6">
                        support@doctors.com
                      </div>
                    </div>
                    <div className="phone">
                      <div className="text-wrapper-14-6">Phone :</div>
                      <p className="text-wrapper-16-6">
                        (+22) 123 - 4567 - 900
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright">
              <img
                className="line-2-6"
                alt="Line"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/line.svg"
              />
              <div className="copyright-2">
                <div className="text-wrapper-17-6">©</div>
                <div className="designed-by">
                  <p className="drafted-by">
                    <span className="span">Drafted by </span>
                    <span className="text-wrapper-18-6">Victorflow</span>
                    <span className="span"> - Powered by </span>
                    <span className="text-wrapper-18-6">Webflow</span>
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
