import React from "react";
import "./styleBlog.css";
import LandinngFooterSection from "../landingPage/LandinngFooterSection";
import PostPage from "./PostsPage/PostPage";
import HeroPost from "./heroPost/HeroPost";
import SearchInput from "./searchInput/SearchInput";
import HeaderMaster from "./master/HeaderMaster";
import MasterPost from "./masterPost/MasterPost";

function BlogPage() {
  return (
    <>
      {/* Header Master Section 1 */}
      <HeaderMaster></HeaderMaster>

      {/* input search */}
      <SearchInput></SearchInput>

      {/* Master Post section 2 */}
      <MasterPost></MasterPost>

      {/* Hero Post Section 3 */}

      <div className="parent-second">
        <div id="card1">
          <HeroPost></HeroPost>
        </div>

        <div id="card2">
          <HeroPost></HeroPost>
        </div>
        <div id="card3">
          <HeroPost></HeroPost>
        </div>
      </div>

      {/* line  */}

      <hr />

      {/* Post page Section 4 */}

      <PostPage></PostPage>
      <PostPage></PostPage>
      <PostPage></PostPage>
      <PostPage></PostPage>
      <PostPage></PostPage>

      {/* footer */}
      <LandinngFooterSection></LandinngFooterSection>
    </>
  );
}

export default BlogPage;
