// import React from 'react'
import "../Style/landingBannerSection.css";
import "../Style/landingHeroSection.css";
import img1 from "../../assets/card1.png";
import img2 from "../../assets/card2.png";
function LandingBannerSection() {
  return (
    <>
      {/* banner */}
      <section className="banner" >
        {/* heder */}
        <h2>what we do to help our client grow in digital era </h2>
        {/* line  */}
        <hr className="line-banner" />
        {/* start card */}
        <div className="parent-card">
          {/* card1 */}
          <div className="card">
            <img src={img1} alt="" />
          </div>
                   {/* content card ,header, paragraph, button */}
          <div class="card-content">
            <h3>bring technology to your confortabal home</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              iusto nobis corporis! Ab at, molestiae similique libero,
            </p>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
              </span>
              <span className="button-text">Learn More</span>
            </button>
          </div>
        </div>
{/* end card */}
        {/* card2 */}
        <div className="parent-card  " id="card-reverse">
            {/* img card */}
                <div className="card">
                    <img src={img2} alt="" />
                </div>
         {/* content card ,header, paragraph, button */}
          <div class="card-content">
            <h3>bring technology to your confortabal home</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              iusto nobis corporis! Ab at, molestiae similique libero,
            </p>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
              </span>
              <span className="button-text">Learn More</span>
            </button>
          </div>
        </div>

        {/* end card2 */}

        {/* start card3 */}
        <div className="parent-card">
          {/* card1 */}
          <div className="card">
            <img src={img2} alt="" />
          </div>
                   {/* content card ,header, paragraph, button */}
          <div class="card-content">
            <h3>bring technology to your confortabal home</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              iusto nobis corporis! Ab at, molestiae similique libero,
            </p>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
              </span>
              <span className="button-text">Learn More</span>
            </button>
          </div>
        </div>

      </section>
    </>
  );
}

export default LandingBannerSection;

{
  /* <div className="parent-card">
<div className=" s1">
    <h3>what we do to help our client grow in digital era </h3>
</div>
<div className="card s2">
    <img src={img1} alt="" />
    <div className="contant-Card1">

    <h3>bring technology to your confortabal home</h3>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        iusto nobis corporis! Ab at, molestiae similique libero,
    </p>
    <button className="learn-more">
        <span className="circle" aria-hidden="true">
            <span className="icon arrow" />
        </span>
        <span className="button-text">Learn More</span>
    </button>
    </div>
</div>
<div className="card s3">
    <img src={img2} alt="" />
    <h3>bring technology to your confortabal home</h3>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        iusto nobis corporis! Ab at, molestiae similique libero,
    </p>
    <button className="learn-more">
        <span className="circle" aria-hidden="true">
            <span className="icon arrow" />
        </span>
        <span className="button-text">Learn More</span>
    </button>
</div>
<div className="card s4">
    <img src={img1} alt="" />
    <h3>bring technology to your confortabal home</h3>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        iusto nobis corporis! Ab at, molestiae similique libero,
    </p>
    <button className="learn-more">
        <span className="circle" aria-hidden="true">
            <span className="icon arrow" />
        </span>
        <span className="button-text">Learn More</span>
    </button>
</div>
</div> */
}
