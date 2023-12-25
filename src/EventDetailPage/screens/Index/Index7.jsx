import React from "react";
import "./style7.css";
import { useNavigate } from "react-router-dom";

export const Index7 = () => {
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
      <div className="div-7">
        <footer className="footer-7">
          <div className="content">
            <div className="footer-content">
              <div className="book">
                <div className="logo">
                  <div className="text-wrapper">Pages</div>
                  <img
                    className="img"
                    alt="Logo"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65829ae64255e00ada3cd33e/img/logo-1@2x.png"
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

        {/* HEADER BANNER */}
        <div className="banner-eventdetail">
          <div className="overlap-g">
            <div className="background" />
            <div className="typetest-title">
              <div className="title-g">
                <img
                  className="line-2-7"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6584270e8da30682b36594a8/img/line-1.svg"
                />
                <div className="text-wrapper-14-7">이벤트 및 클럽</div>
              </div>
            </div>
            <div className="div-2-7">
              <div className="overlap-2-7">
                <div className="div-2-7">
                  <img
                    className="image-g"
                    alt="Image"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65841aac0615bda4b1bf558a/img/image.png"
                  />
                </div>

                {/* HEADER */}
                <div className="header-7">
                  <div className="logo-wrapper-7">
                    <div className="logo-2">
                      <div className="text-wrapper-15-7">
                        도서 공유 커뮤니티
                      </div>
                      <img
                        className="logo-3"
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
                            src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6584270e8da30682b36594a8/img/avatar-3814049-1.svg"
                          />
                          <div className="number">
                            <div className="div-wrapper-g">
                              <div className="text-wrapper-16-7">01</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="button-2">
                      <div className="text-wrapper-17-7">로그인</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="event-post-comments">
          <div className="event-post">
            <div className="overlap-group-3-7">
              <div className="profile">
                <img
                  className="ellipse"
                  alt="Ellipse"
                  src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6584270e8da30682b36594a8/img/ellipse-4@2x.png"
                />
                <div className="text-wrapper-18-7">Jackson Allen</div>
              </div>
              <div className="comment-content">
                <p className="lorem-ipsum-is">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text
                </p>
                <div className="more">
                  <div className="text-wrapper-19-7">신고하기</div>
                  <div className="text-wrapper-20-7">10분 전</div>
                </div>
                <div className="likes">
                  <img
                    className="vector-g"
                    alt="Vector"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6584270e8da30682b36594a8/img/vector.svg"
                  />
                  <div className="text-wrapper-21-7">1</div>
                </div>
              </div>
            </div>
            <div className="line-3-7" />
          </div>
          <div className="event-post-comment">
            <div className="overlap-group-3-7">
              <div className="profile">
                <img
                  className="ellipse"
                  alt="Ellipse"
                  src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6584270e8da30682b36594a8/img/ellipse-4@2x.png"
                />
                <div className="text-wrapper-18-7">Jackson Allen</div>
              </div>
              <div className="comment-content">
                <p className="lorem-ipsum-is">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text
                </p>
                <div className="more">
                  <div className="text-wrapper-19-7">신고하기</div>
                  <div className="text-wrapper-20-7">10분 전</div>
                </div>
                <div className="likes">
                  <img
                    className="vector-g"
                    alt="Vector"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6584270e8da30682b36594a8/img/vector.svg"
                  />
                  <div className="text-wrapper-21-7">1</div>
                </div>
              </div>
            </div>
            <div className="line-4-7" />
          </div>
        </div>
        <div className="event-post-2">
          <div className="overlap-4-7">
            <div className="text-wrapper-22-7">이벤트 제목1</div>
            <img
              className="line-5-7"
              alt="Line"
              src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6584270e8da30682b36594a8/img/line-26.svg"
            />
            <div className="post-writer">
              <img
                className="ellipse-2"
                alt="Ellipse"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6584270e8da30682b36594a8/img/ellipse-5@2x.png"
              />
              <div className="text-wrapper-23-7">관리자</div>
              <div className="element-2-7">1시간 전&nbsp;&nbsp; 조회수: 3</div>
            </div>
            <p className="lorem-ipsum-is-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s, when an
            </p>
            <div className="post-comments">
              <img
                className="vector-2"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6584270e8da30682b36594a8/img/vector-2.svg"
              />
              <div className="text-wrapper-24-7">2</div>
            </div>
            <div className="post-likes">
              <img
                className="vector-3"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6584270e8da30682b36594a8/img/vector-3.svg"
              />
              <div className="text-wrapper-25-7">21</div>
            </div>
            <img
              className="event-thumbnail"
              alt="Event thumbnail"
              src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6584270e8da30682b36594a8/img/event-thumbnail.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
