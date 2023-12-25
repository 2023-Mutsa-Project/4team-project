import React from "react";
import "./style5.css";

import { useNavigate } from "react-router-dom";

export const Index5 = () => {
  const navigate = useNavigate();

  const handleHomePageClick = () => {
    navigate("/");
  };
  const handleActivityPageClick = () => {
    navigate("/activity");
  };

  return (
    <div className="index">
      <div className="div-5">
        <footer className="footer-5">
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

        <p className="recommendation-title">당신의 독서 유형에 어울리는 책은</p>

        {/* HEADER BANNER */}
        <div className="banner-5">
          <div className="overlap-e">
            <div className="background-e" />
            <div className="typetest-title-5">
              <div className="title-t">
                <img
                  className="line-2-t"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65818796fc8baadabbeba200/img/line-1.svg"
                />
                <div className="text-wrapper-14-5">독서 유형 테스트</div>
              </div>
            </div>
            <div className="div-2-5">
              <div className="overlap-2-5">
                <div className="div-2-5">
                  <img
                    className="image-e"
                    alt="Image"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65818796fc8baadabbeba200/img/image.png"
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
        <div className="type-reviews">
          <div className="overlap-4-5">
            <div className="rectangle-e" />
            <div className="type-reviews-title">
              <p className="text-wrapper-18-5">
                나와 같은 유형이 이 책에 남긴 리뷰
              </p>
            </div>
            <div className="type-reviews-2">
              <div className="typereview">
                <div className="overlap-group-3-5">
                  <div className="quotes-e">
                    <p className="text-wrapper-19-5">
                      “Crowdsource term sheet freemium beta stealth responsive
                      web design niche market rock star channels.”
                    </p>
                  </div>
                  <img
                    className="icon-14-5"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65818796fc8baadabbeba200/img/icon-12@2x.png"
                  />
                </div>
              </div>
              <div className="typereview-2">
                <div className="overlap-group-3-5">
                  <div className="quotes-e">
                    <p className="text-wrapper-19-5">
                      “Crowdsource term sheet freemium beta stealth responsive
                      web design niche market rock star channels.”
                    </p>
                  </div>
                  <img
                    className="icon-14-5"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65818796fc8baadabbeba200/img/icon-13@2x.png"
                  />
                </div>
              </div>
              <div className="typereview-3">
                <div className="overlap-group-3-5">
                  <div className="quotes-e">
                    <p className="text-wrapper-19-5">
                      “Crowdsource term sheet freemium beta stealth responsive
                      web design niche market rock star channels.”
                    </p>
                  </div>
                  <img
                    className="icon-14-5"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65818796fc8baadabbeba200/img/icon-14@2x.png"
                  />
                </div>
              </div>
              <div className="typereview-4">
                <div className="overlap-group-3-5">
                  <div className="quotes-2-e">
                    <p className="text-wrapper-20-5">
                      “Crowdsource term sheet freemium beta stealth responsive
                      web design niche market rock star channels.”
                    </p>
                  </div>
                  <img
                    className="icon-14-5"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65818796fc8baadabbeba200/img/icon-15@2x.png"
                  />
                </div>
              </div>
              <div className="tyoereview">
                <div className="overlap-group-3-5">
                  <div className="quotes-e">
                    <p className="text-wrapper-19-5">
                      “Crowdsource term sheet freemium beta stealth responsive
                      web design niche market rock star channels.”
                    </p>
                  </div>
                  <img
                    className="icon-14-5"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65818796fc8baadabbeba200/img/icon-16@2x.png"
                  />
                </div>
              </div>
              <div className="typereview-5">
                <div className="overlap-group-3-5">
                  <div className="quotes-2-e">
                    <p className="text-wrapper-20-5">
                      “Crowdsource term sheet freemium beta stealth responsive
                      web design niche market rock star channels.”
                    </p>
                  </div>
                  <img
                    className="icon-14-5"
                    alt="Icon"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65818796fc8baadabbeba200/img/icon-17@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <div className="des">
            <p className="text-wrapper-21-5">
              Do you offer discounts for education?
            </p>
            <p className="there-are-many">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, bypassed
              injected humour, or randomised words which don&#39;t look even
              slightly believable.
            </p>
          </div>
          <div className="des-2">
            <p className="text-wrapper-21-5">Is this book for me?</p>
            <p className="if-you-are-going-to">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn&#39;t anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators on the Internet tend to
              repeat predefined chunks as necessary.
            </p>
          </div>
        </div>
        <div className="books-e">
          <div className="content-4-5">
            <div className="book-wrapper">
              <img
                className="book-2-5"
                alt="Book"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/65818796fc8baadabbeba200/img/book.jpg"
              />
            </div>
            <div className="element-2-5">
              <div className="content-5-5">
                <div className="title-2-5">
                  <div className="text-wrapper-22-5">The Atomic One’s</div>
                </div>
                <div className="content-6-5">
                  <p className="text-wrapper-23-5">
                    Making this the first true generator on the Internet. It
                    uses a dictionary of over 200 Latin words, combined with a
                    handful of model sentence structures, to generate Lorem
                    Ipsum which looks reasonable. The generated Lorem Ipsum.
                  </p>
                  <p className="publisher-learning">
                    Publisher ‏&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    ‎&nbsp;&nbsp;&nbsp;&nbsp; Learning Private Limited (1
                    January 2021) <br />
                    Language ‏&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;
                    ‎ English <br />
                    Paperback&nbsp;&nbsp;&nbsp;&nbsp;
                    :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;‎212 pages <br />
                    ISBN-10
                    ‏&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;
                    ‎ 9788120345799 <br />
                    Dimensions ‏&nbsp;&nbsp; : ‎&nbsp;&nbsp;&nbsp;&nbsp;20 x 14
                    x 4 cm
                  </p>
                </div>
              </div>
              <div className="button-3-e">
                <div className="quantity">
                  <div className="overlap-group-4-5">
                    <div className="text-wrapper-24-5">1</div>
                  </div>
                </div>
                <button className="cart-wrapper">
                  <div className="cart-2">
                    <div className="text-wrapper-25-5">마이페이지에 추가</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="sub-content">
            <div className="tab">
              <div className="element-3-5">
                <div className="text-wrapper-26-5">더 알아보기</div>
              </div>
              <div className="element-4-5">
                <div className="text-wrapper-27-5">토론 게시판에서 찾아보기</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
