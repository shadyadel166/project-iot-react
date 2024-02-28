import "../Style/landinngFooterSection.css";
import addressSvg from "../../assets/addressSvg.svg";
import phoneSvg from "../../assets/phoneSvg.svg";
import emailSvg from "../../assets/emailSvg.svg";
 
import  facebook  from '../../assets/facebookSvg.svg';
import instagram from '../../assets/instagramSvg.svg';
import youtube from '../../assets/youtubeSvg.svg';
import linjedin from '../../assets/linkedinSvg.svg';
import { NavLink } from "react-router-dom";
import ContactUs from './../contactUs/ContactUs';

 

function LandinngFooterSection() {
  return (
    <footer>

  
    <div className="first1">
      <div className="pra-first">
        <h2>our beloved client</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quam
          quod sint asperiores, laboriosam ex fugit officiis dicta atque dolor,
          porro praesentium, cupiditate accusantium. Et nemo quae voluptatum
        </p>
      </div>
      <div className="divbtn">
        <button className="button-footer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
          <div className="text">Button</div>
        </button>
      </div>
    </div>
    <hr />
    <div className="info-footer">
      <div className="parent-footer">
        <div className="div1">
          <h3>brand</h3>
          <ul>
            <li>
              <a href="">
                <img src={addressSvg} alt="address" />
                <span>Aswan </span>
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <img src={phoneSvg} alt="phone" />
                <span>1140014619</span>
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <img src={emailSvg} alt="email" />
                <span> shadyadel642@gmail.com </span>
              </a>
            </li>
          </ul>
        </div><div className="div2">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <img src={instagram} alt="instagram" /> <a href="">instagram</a>
            </li>
            <li>
             <img src={youtube} alt="Youtube" /> <a href="">Youtube</a>
            </li>
            <li>
             <img src={facebook} alt="facebook" /> <a href="">facebook</a>
            </li>
            <li>
             <img src={linjedin} alt="linkedin" /> <a href="">linkedin</a>
            </li>
          </ul>
        </div>
        <div className="div3">
          <h3>Pages</h3>
          <ul>
            <li>
              <NavLink to="/home">what we do</NavLink> 
            </li>
            <li>
              <NavLink to="" > About</NavLink>
            </li>
            <li>
           <NavLink to="/blog">Blog </NavLink>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <NavLink to="/contactUs">ContactUs</NavLink>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
 
</footer>

  )
}

export default LandinngFooterSection