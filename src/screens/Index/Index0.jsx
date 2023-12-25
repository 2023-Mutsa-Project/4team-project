import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Index0 = () => {
  const navigate = useNavigate();

  const handleActivityPageClick = () => {
    navigate("/activity");
  };
  const handleEventPageClick = () => {
    navigate("/event");
  };

  return (
    <div className="index">
      <div className="div">
        {/* FOOTER */}
        <footer className="footer">
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

        {/* EVENT */}
        <div className="event">
          <div className="element-2">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper-14">Author - 23.05.2022</div>
                <button className="btn">
                  <img
                    className="btn-2"
                    alt="Btn"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/btn.svg"
                  />
                  <div className="text-wrapper-15">Read more</div>
                </button>
                <p className="text-wrapper-16">
                  The point of using Lorem Ipsum hiter of that using making it
                  look like others readable will get end.
                </p>
                <p className="text-wrapper-17">
                  Significant reading has more info number
                </p>
                <div className="overlap" />
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper-18">Author - 23.05.2022</div>
                <button className="btn">
                  <img
                    className="btn-2"
                    alt="Btn"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/btn.svg"
                  />
                  <div className="text-wrapper-15">Read more</div>
                </button>
                <p className="text-wrapper-19">
                  The point of using Lorem Ipsum hiter of that using making it
                  look like others readable will get end.
                </p>
                <p className="release-of-letraset">
                  Release of Letraset sheets tools
                  containing&nbsp;&nbsp;passages
                </p>
                <div className="overlap-group-3" />
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper-20">Author - 23.05.2022</div>
                <button className="btn">
                  <img
                    className="btn-2"
                    alt="Btn"
                    src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/btn.svg"
                  />
                  <div className="text-wrapper-15">Read more</div>
                </button>
                <p className="text-wrapper-21">
                  The point of using Lorem Ipsum hiter of that using making it
                  look like others readable will get end.
                </p>
                <p className="text-wrapper-17">
                  The energy efficiency offers hydrotherapy or swim
                </p>
                <div className="overlap-group-4" />
              </div>
            </div>
          </div>
          <div className="text-wrapper-22">이벤트 리스트</div>
        </div>

        {/* DEBATE */}
        <div className="debate">
          <div className="frame">
            <div className="the-chapter">
              <div className="content-4">
                <div className="element-wrapper">
                  <div className="element-3">
                    <div className="element-4">
                      <div className="overlap-2">
                        <div className="details">
                          <div className="text-wrapper-23">의견나눔</div>
                          <div className="text-wrapper-24">토론유형:</div>
                          <div className="bg" />
                          <div className="overlap-group-5">
                            <div className="text-wrapper-25">3명</div>
                            <div className="text-wrapper-26">참여자:</div>
                          </div>
                          <div className="bg-2" />
                        </div>
                        <p className="text-wrapper-27">
                          Making this the first true value generator on the
                          Internet. It of over 200 Latin words, combined with a
                          handful.
                        </p>
                        <div className="text-wrapper-28">토론방1 주제</div>
                      </div>
                    </div>
                    <div className="element-5">
                      <div className="overlap-2">
                        <div className="details-2">
                          <div className="text-wrapper-29">롤플레잉</div>
                          <div className="text-wrapper-30">토론유형 :</div>
                          <div className="bg-3" />
                          <div className="overlap-group-6">
                            <div className="text-wrapper-31">2명</div>
                            <div className="text-wrapper-32">참여자 :</div>
                          </div>
                          <div className="bg-4" />
                        </div>
                        <p className="text-wrapper-33">
                          Making this the first true value generator on the
                          Internet. It of over 200 Latin words, combined with a
                          handful.
                        </p>
                        <div className="text-wrapper-34">토론방2 주제</div>
                      </div>
                    </div>
                    <div className="element-6">
                      <div className="overlap-2">
                        <div className="details-3">
                          <div className="overlap-3-0">
                            <div className="text-wrapper-35">반박형</div>
                            <div className="text-wrapper-36">토론유형 :</div>
                          </div>
                          <div className="bg-5" />
                          <div className="overlap-group-7">
                            <div className="text-wrapper-37">3명</div>
                            <div className="text-wrapper-38">참여자 :</div>
                          </div>
                          <div className="bg-6" />
                        </div>
                        <p className="text-wrapper-39">
                          Making this the first true value generator on the
                          Internet. It of over 200 Latin words, combined with a
                          handful.
                        </p>
                        <div className="text-wrapper-40">토론방3 주제</div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="button-0">
                  <button className="button-2-0">
                    <div className="text-wrapper-41">토론방 생성하기</div>
                  </button>
                </button>
              </div>
            </div>
          </div>
          <div className="text-wrapper-42">독서 토론방</div>
        </div>

        {/* REVIEWS */}
        <div className="reviews">
          <div className="quotes">
            <p className="text-wrapper-43">
              “Crowdsource term sheet freemium beta stealth responsive web
              design niche market rock star channels.”
            </p>
          </div>
          <div className="text-wrapper-44">인기 리뷰</div>
        </div>

        {/* POPULAR */}
        <div className="popular">
          <div className="element-7">
            <div className="element-8">
              <img
                className="book-2"
                alt="Book"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/book.jpg"
              />
              <div className="content-wrapper">
                <div className="content-5">
                  <div className="title">
                    <div className="text-wrapper-45">책1 제목</div>
                  </div>
                  <div className="content-6">
                    <p className="many-variations-of">
                      Many variations of passages of Lorem Ipsum willing
                      araise&nbsp;&nbsp;alteration in some form.
                    </p>
                    <div className="details-4">
                      <div className="text-wrapper-46">4.5/ 5</div>
                      <div className="bg-7" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="element-9">
              <img
                className="book-3"
                alt="Book"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/book.jpg"
              />
              <div className="content-wrapper">
                <div className="content-5">
                  <div className="title">
                    <div className="text-wrapper-45">책2 제목</div>
                  </div>
                  <div className="content-6">
                    <p className="many-variations-of">
                      Many variations of passages of Lorem Ipsum willing
                      araise&nbsp;&nbsp;alteration in some form.
                    </p>
                    <div className="details-5">
                      <div className="text-wrapper-46">4.7/5</div>
                      <div className="bg-7" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="element-9">
              <img
                className="book-2"
                alt="Book"
                src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/book.jpg"
              />
              <div className="content-wrapper">
                <div className="content-5">
                  <div className="title">
                    <div className="text-wrapper-45">책3 제목</div>
                  </div>
                  <div className="content-6">
                    <p className="many-variations-of">
                      Many variations of passages of Lorem Ipsum willing
                      araise&nbsp;&nbsp;alteration in some form.
                    </p>
                    <div className="details-5">
                      <div className="text-wrapper-46">4.3/5</div>
                      <div className="bg-7" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="arrow"
            alt="Arrow"
            src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/arrow-1.svg"
          />
          <img
            className="arrow-2"
            alt="Arrow"
            src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/arrow-2.svg"
          />
        </div>

        {/* POPULAR-TITLE */}
        <div className="text-wrapper-55">인기 있는 도서</div>

        {/* MAIN BANNER */}
        <div className="main-banner">
          <div className="overlap-4">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <img
              className="image-3"
              alt="Image"
              src="https://cdn.animaapp.com/projects/655f025f7b7a4a525e0b5c7d/releases/655f029a8042abc4409056b2/img/image-2.png"
            />
            <p className="mbti">
              나의 독서 타입은?
              <br />
              독서 mbti 테스트
            </p>
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
                <div className="text-wrapper-57">Home</div>
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
                <div className="text-wrapper-57" onClick={handleEventPageClick}>
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
  );
};

// export default Index0;
