import React from "react";
import "./postPage.css";
import LikeButton from "../buttonLike/LikeButton";

import secondImg3 from "../../../assets/tv.jpg";
import CommentButton from "../commentButton/CommentButton";
function PostPage() {
  return (
    <>
      <section className="third-section">
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
             <CommentButton></CommentButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PostPage;
