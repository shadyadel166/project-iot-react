import React from "react";
import "./heroPost.css";
import secondImg1 from "../../../assets/inner1.jpeg";


import LikeButton from "../buttonLike/LikeButton";
import CommentButton from "../commentButton/CommentButton";

function HeroPost() {
  return (
    <div className="div1-card1" id="card1">
      <img src={secondImg1} alt="" />
      <div className="card-post">
        <h3>Control your home intelligently from anywhere in the world</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          aspernatur mollitia, earum ex perspiciatis sit dolorum. Commodi
          aperiam odio tenetur optio sapiente id rem voluptatem illum officiis
          aut?
        </p>
        {/* start button */}
        <div className="like-button">
          <LikeButton></LikeButton>
          <CommentButton></CommentButton>
        </div>
      </div>
    
    </div>
  );
}

export default HeroPost;
