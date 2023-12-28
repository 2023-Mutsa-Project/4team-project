import React from "react";
import { useNavigate } from "react-router-dom";
import "./style2.css";

export const Index2 = () => {
  const navigate = useNavigate();

  const handleHomePageClick = () => {
    navigate("/");
  };
  const handleActivityPageClick = () => {
    navigate("/activity");
  };
  const handleTypetestTestPageClick = () => {
    navigate("/typetest-test");
  };

  return (
    <div className="index">
      <div className="div-2">
        {/* FOOTER */}
        <footer className="footer-2">
          <div className="content-b">
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

        <div className="trusted-by-2">
          <div className="content-4-2">
            <div className="element-2-2">
              <p className="text-wrapper-14-2">
                A long established fact that a who looking at its layout.
              </p>
              <div className="text-wrapper-15-2">Amazen Corp</div>
              <img
                className="logo-2-2"
                alt="Logo"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6571a78064449cd06c6e8d6b/img/logo-1@2x.png"
              />
            </div>
            <div className="element-3-2">
              <p className="text-wrapper-16-2">
                A long established fact that a who looking at its layout.
              </p>
              <div className="text-wrapper-17-2">Megan Books</div>
              <img
                className="logo-3-2"
                alt="Logo"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6571a78064449cd06c6e8d6b/img/logo-3@2x.png"
              />
            </div>
            <div className="element-4-2">
              <p className="text-wrapper-18-2">
                A long established fact that a who looking at its layout.
              </p>
              <div className="text-wrapper-19-2">Los Books</div>
              <img
                className="logo-4"
                alt="Logo"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6571a78064449cd06c6e8d6b/img/logo-4@2x.png"
              />
            </div>
            <div className="element-5-2">
              <p className="text-wrapper-20-2">
                A long established fact that a who looking at its layout.
              </p>
              <div className="text-wrapper-21-2">Urban Lib</div>
              <img
                className="logo-5"
                alt="Logo"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6571a78064449cd06c6e8d6b/img/logo-5@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="title-rank">
          <img
            className="line-2-2"
            alt="Line"
            src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6571a78064449cd06c6e8d6b/img/line-12.svg"
          />
          <div className="text-wrapper-22-2">독서 유형 랭킹</div>
        </div>

        {/* BOOKS */}
        <div className="books">
          <div className="books-2">
            <div className="title-2-2">
              <img
                className="line-3-2"
                alt="Line"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6571a78064449cd06c6e8d6b/img/line-12.svg"
              />
              <div className="text-wrapper-23-2">다른 유형의 추천 도서</div>
            </div>
            <div className="content-5-2">
              <div className="element-6-2">
                <div className="overlap-group-wrapper-b">
                  <div className="overlap-group-2-2">
                    <div className="overlap-b">
                      <div className="text-wrapper-24-2">
                        **********************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**********************
                      </div>
                      <div className="bg-b" />
                    </div>
                    <p className="text-wrapper-25-2">
                      A supreme packages and web page editors.
                    </p>
                    <div className="text-wrapper-26-2">JOHN ABRAHAM</div>
                    <p className="text-wrapper-27-2">
                      A long established fact that a reader normal as well
                      distribution of letters
                    </p>
                    <img
                      className="trees-b"
                      alt="Trees"
                      src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6571a78064449cd06c6e8d6b/img/trees.svg"
                    />
                    <img
                      className="name-b"
                      alt="Name"
                      src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6571a78064449cd06c6e8d6b/img/name.svg"
                    />
                  </div>
                </div>
                <div className="element-7-2">
                  <div className="content-6-2">
                    <div className="text-wrapper-28-2">Atomic One’s</div>
                    <p className="many-variations-of-2">
                      Many variations of passages of Lorem Ipsum willing
                      araise&nbsp;&nbsp;alteration in some form.
                    </p>
                  </div>
                  <div className="details-b">
                    <div className="text-wrapper-29-2">10 Hours</div>
                    <div className="text-wrapper-30-2">Length:</div>
                    <div className="bg-2-2" />
                    <div className="text-wrapper-31-2">586pages</div>
                    <div className="text-wrapper-32-2">Pages:</div>
                    <div className="bg-3-2" />
                  </div>
                  <button className="button-rec">
                    <div className="text-wrapper-33-2">Order Today</div>
                  </button>
                </div>
              </div>
              <div className="element-8-2">
                <img
                  className="book-2-2"
                  alt="Book"
                  src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6571a78064449cd06c6e8d6b/img/book.png"
                />
                <div className="element-9-2">
                  <div className="content-6-2">
                    <div className="text-wrapper-28-2">The Dark Light</div>
                    <p className="many-variations-of-2">
                      Many variations of passages of Lorem Ipsum willing
                      araise&nbsp;&nbsp;alteration in some form.
                    </p>
                  </div>
                  <div className="details-b">
                    <div className="text-wrapper-34-2">10 Hours</div>
                    <div className="text-wrapper-35-2">Length:</div>
                    <div className="bg-4-2" />
                    <div className="text-wrapper-31-2">586pages</div>
                    <div className="text-wrapper-32-2">Pages:</div>
                    <div className="bg-3-2" />
                  </div>
                  <button className="button-rec">
                    <div className="text-wrapper-33-2">Order Today</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-2-2">
          <div className="about-2">
            <div className="author-2">
              <div className="image-b" />
            </div>
            <div className="title-3-2">
              <div className="content-7">
                <div className="name-2-2">
                  <div className="text-wrapper-36-2">
                    나의 독서 스타일 테스트
                  </div>
                  <img
                    className="line-4-2"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6571a78064449cd06c6e8d6b/img/line-2.svg"
                  />
                </div>
                <p className="text-wrapper-37-2">
                  나의 독서 스타일은 어떤 유형일까?
                  <br />
                  테스트로 알아보는 나의 독서 스타일!
                  <br />
                  나의 독서 유형을 알아보고 맞춤 도서 추천까지 받아보자!
                </p>
              </div>
              <button
                className="div-wrapper-2"
                onClick={handleTypetestTestPageClick}
              >
                <div className="text-wrapper-33-2">시작하기</div>
              </button>
            </div>
            <img
              className="social-media"
              alt="Social media"
              src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6571a78064449cd06c6e8d6b/img/social-media.svg"
            />
            <div className="text-wrapper-38-2">테스트 공유하기</div>
          </div>
          <div className="banner">
            <div className="title-wrapper">
              <div className="title-4">
                <img
                  className="line-5-2"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/6571a78064449cd06c6e8d6b/img/line-12.svg"
                />
                <div className="text-wrapper-39-2">독서 유형 테스트</div>
              </div>
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
              <div className="button-3">
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
  );
};
