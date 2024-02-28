import React from 'react'
import './masterPost.css'
import heroBlog from "../../../assets/generative-ai-smart-home-interface-with-controlling-dwevice.jpg";
function MasterPost() {
  return (
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
  )
}

export default MasterPost