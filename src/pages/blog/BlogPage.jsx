import React from "react";
import heroBlog from "../../assets/generative-ai-smart-home-interface-with-controlling-dwevice.jpg";
import secondImg1 from "../../assets/inner1.jpeg";
import secondImg2 from "../../assets/dash.png";
import secondImg3 from "../../assets/tv.jpg";
import "./styleBlog.css";
import LandinngFooterSection from "../landingPage/LandinngFooterSection";
import LikeButton from "../../Componant/LikeButton";
function BlogPage() {
  return (
    <>
      <section className="master">
        <h1>Blog Smart Home</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum porro
          excepturi voluptates provident fugit saepe qui exercitationem cumque
          doloremque quam? Culpa vel voluptate sit non facilis distinctio magnam
          fugit aliquam?
        </p>
      </section>
      {/* input search */}
      <section>
        <div id="search">
          <svg viewBox="0 0 420 60" xmlns="http://www.w3.org/2000/svg">
            <rect className="bar" />
            <g className="magnifier">
              <circle className="glass" />
              <line className="handle" x1={32} y1={32} x2={44} y2={44} />
            </g>
            <g className="sparks">
              <circle className="spark" />
              <circle className="spark" />
              <circle className="spark" />
            </g>
            <g className="burst pattern-one">
              <circle className="particle circle" />
              <path className="particle triangle" />
              <circle className="particle circle" />
              <path className="particle plus" />
              <rect className="particle rect" />
              <path className="particle triangle" />
            </g>
            <g className="burst pattern-two">
              <path className="particle plus" />
              <circle className="particle circle" />
              <path className="particle triangle" />
              <rect className="particle rect" />
              <circle className="particle circle" />
              <path className="particle plus" />
            </g>
            <g className="burst pattern-three">
              <circle className="particle circle" />
              <rect className="particle rect" />
              <path className="particle plus" />
              <path className="particle triangle" />
              <rect className="particle rect" />
              <path className="particle plus" />
            </g>
          </svg>
          <input
            type="search"
            name="q"
            aria-label="Search for inspiration"
            placeholder=""
          />
        </div>
        <div id="results"></div>
      </section>
      {/* start hero section */}
      <section className="hero">
        <div className="parent-post">
          <div className="post">
            <img src={heroBlog} alt="" />
          </div>
          <div className="content-post">
            <h1>
              Invest in the intelligence of your home, and enjoy an unparalleled
              life experience.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, hic
              recusandae? Eum saepe assumenda velit itaque nam, veniam,
              repellendus deserunt magni dolor ullam totam nisi numquam rem
              placeat voluptates dignissimos!
            </p>
          </div>
        </div>
      </section>
      <div className="parent-second">
        <div className="div1-card1" id="card1">
          <img src={secondImg1} alt="" />
          <div className="card-post">
            <h3>Control your home intelligently from anywhere in the world</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              aspernatur mollitia, earum ex perspiciatis sit dolorum. Commodi
              aperiam odio tenetur optio sapiente id rem voluptatem illum
              officiis aut?
            </p>

            <div className="like-button">
              <LikeButton></LikeButton>
              <button className="bookmarkBtn">
                <span className="IconContainer">
                  <svg fill="white" viewBox="0 0 512 512" height="1em">
                    <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
                  </svg>
                </span>
                <p className="text-btn">Comment</p>
              </button>
            </div>
          </div>
        </div>
        <div className="div1-card1" id="card2">
          <img src={secondImg2} alt="" />
          <div className="card-post">
            <h3>Unforgettable entertainment experiences with smart home .</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              vitae sint ut provident voluptatem nostrum quam ullam harum, eos
              ab ratione non deserunt asperiores voluptates mollitia incidunt
              voluptatum id aut?
            </p>

            <div className="like-button">
              <LikeButton></LikeButton>
              <button className="bookmarkBtn">
                <span className="IconContainer">
                  <svg fill="white" viewBox="0 0 512 512" height="1em">
                    <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
                  </svg>
                </span>
                <p className="text-btn">Comment</p>
              </button>
            </div>
          </div>
        </div>


        <div className="div1-card1" id="card3">
          <img src={secondImg3} alt="" />
          <div className="card-post">
            <h3>Protect your home and family with smart security systems</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              vitae sint ut provident voluptatem nostrum quam ullam harum, eos
              ab ratione non deserunt asperiores voluptates mollitia incidunt
              voluptatum id aut?
            </p>
            <div className="like-button">
              <LikeButton></LikeButton>
              <button className="bookmarkBtn">
                <span className="IconContainer">
                  <svg fill="white" viewBox="0 0 512 512" height="1em">
                    <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
                  </svg>
                </span>
                <p className="text-btn">Comment</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* section post */}
      <section className="third-section">
        <hr />
        <div className=" third-card">
          <img src={secondImg3} alt="" />
          <div className="third-card-paragraph">
            <h1>Protect your home and family with smart security systems </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi laboriosam nam doloribus dicta, consectetur ad est quos
              doloremque eveniet totam voluptate aperiam saepe ea quae modi
              neque harum quod qui?
            </p>

            <div className="like-button">
              <LikeButton></LikeButton>
              <button className="bookmarkBtn">
                <span className="IconContainer">
                  <svg fill="white" viewBox="0 0 512 512" height="1em">
                    <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
                  </svg>
                </span>
                <p className="text-btn">Comment</p>
              </button>
            </div>
          </div>
        </div>
        <div className=" third-card">
          <img src={secondImg3} alt="" />
          <div className="third-card-paragraph">
            <h1>Protect your home and family with smart security systems </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi laboriosam nam doloribus dicta, consectetur ad est quos
              doloremque eveniet totam voluptate aperiam saepe ea quae modi
              neque harum quod qui?
            </p>
            <div className="like-button">
              <LikeButton></LikeButton>
              <button className="bookmarkBtn">
                <span className="IconContainer">
                  <svg fill="white" viewBox="0 0 512 512" height="1em">
                    <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
                  </svg>
                </span>
                <p className="text-btn">Comment</p>
              </button>
            </div>
          </div>
        </div>
        <div className=" third-card">
          <img src={secondImg3} alt="" />
          <div className="third-card-paragraph">
            <h1>Protect your home and family with smart security systems </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi laboriosam nam doloribus dicta, consectetur ad est quos
              doloremque eveniet totam voluptate aperiam saepe ea quae modi
              neque harum quod qui?
            </p>

            <div className="like-button">
              <LikeButton></LikeButton>
              <button className="bookmarkBtn">
                <span className="IconContainer">
                  <svg fill="white" viewBox="0 0 512 512" height="1em">
                    <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
                  </svg>
                </span>
                <p className="text-btn">Comment</p>
              </button>
            </div>
          </div>
        </div>
        <div className=" third-card">
          <img src={secondImg3} alt="" />
          <div className="third-card-paragraph">
            <h1>Protect your home and family with smart security systems </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi laboriosam nam doloribus dicta, consectetur ad est quos
              doloremque eveniet totam voluptate aperiam saepe ea quae modi
              neque harum quod qui?
            </p>

            <div className="like-button">
              <LikeButton></LikeButton>
              <button className="bookmarkBtn">
                <span className="IconContainer">
                  <svg fill="white" viewBox="0 0 512 512" height="1em">
                    <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
                  </svg>
                </span>
                <p className="text-btn">Comment</p>
              </button>
            </div>
          </div>
        </div>
        <div className=" third-card">
          <img src={secondImg3} alt="" />
          <div className="third-card-paragraph">
            <h1>Protect your home and family with smart security systems </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi laboriosam nam doloribus dicta, consectetur ad est quos
              doloremque eveniet totam voluptate aperiam saepe ea quae modi
              neque harum quod qui?
            </p>

            <div className="like-button">
              <LikeButton></LikeButton>
              <button className="bookmarkBtn">
                <span className="IconContainer">
                  <svg fill="white" viewBox="0 0 512 512" height="1em">
                    <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
                  </svg>
                </span>
                <p className="text-btn">Comment</p>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* end third section */}
      <LandinngFooterSection></LandinngFooterSection>
    </>
  );
}

export default BlogPage;
