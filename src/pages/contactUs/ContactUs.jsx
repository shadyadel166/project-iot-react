import React from "react";

import "./contactUs.css";
import contactUsImg from "../../assets/contactUs.png";
import phoneSvg from "../../assets/phoneSvg.svg";
import websiteSvg from "../../assets/websiteSvg.svg";
import emailSvg from "../../assets/emailSvg.svg";
import { useForm } from "react-hook-form";
import LandinngFooterSection from "../landingPage/LandinngFooterSection";

function ContactUs() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  function onSubmit(val) {
    console.log(val);
  }
  return (
    <>
      <section className="master">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          expedita fugiat animi veniam rem minus eveniet voluptatibus, cum
          aliquam. Repudiandae provident ab, commodi sit necessitatibus eius
          accusamus cupiditate assumenda. Placeat.
        </p>
      </section>
      <section className="info">
        <div className="contact">
          <img src={contactUsImg} alt="" className="img-info" />
          <h3>Address</h3>
          <p>
            Information Technology Institute - Aswan, Aswan - Abu Simbel Road,
            High Dam Area, Aswan Section, Aswan
          </p>
          <h3>Phone</h3>
          <div className="info-contact">
            <div>
              <img src={phoneSvg} alt="" />
              <span>01140014619 </span>
            </div>
            <div>
              <img src={phoneSvg} alt="" />
              <span>01140014619 </span>
            </div>
          </div>
          <h3>Online Service</h3>
          <div className="info-contact">
            <div>
              <img src={websiteSvg} alt="" />
              <span>www.smartHome.com</span>
            </div>
            <div>
              <img src={emailSvg} alt="" />
              <span>shadyadel642@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="form-info">
          <form onSubmit={handleSubmit(onSubmit)}>
          
             <h1>Send Us Message</h1>
            <div className="form-control">
              <label htmlFor="fullName">Full Name</label>
              <input
                placeholder="Enter your Full Name..."
                className="input"
                name="fullName"
                type="text"
                {...register("fullName", {
                  required: {
                    value: true,
                  },
                  maxLenght: {
                    value: 30,
                  },
                  minLentgh: {
                    value: 3,
                  },
                })}
              />

              {errors.fullName && errors.fullName.type === "required" && (
                <span style={{ color: "red" }}>This is required</span>
              )}
              {errors.fullName && errors.fullName.type === "maxLength" && (
                <span style={{ color: "red" }}>Max length exceeded</span>
              )}
              {errors.fullName && errors.fullName.type === "minLength" && (
                <span style={{ color: "red" }}>Min length 3 Character</span>
              )}
            </div>
            <div className="form-control ">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Enter your Email..."
                className="input"
                name="email"
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <span style={{ color: "red" }}>This is required</span>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <span style={{ color: "red" }}>
                  Entered value does not match email format
                </span>
              )}
            </div>
            <div className="form-control text-area">
              <label htmlFor="massage"> Massage</label>
              <textarea
                name="massage"
                id=""
                cols={30}
                rows={10}
                placeholder="Enter your Massage..."
                defaultValue={""}
{...register('textarea',{
    required:true
})}
              />
               {errors.email && errors.email.type === "required" && (
                <span style={{ color: "red" }}>This is required</span>
              )}
            </div>
            {/* button send */}
            <button className="btn-contactUs">
              Send Message
              <div className="star-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="star-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="star-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="star-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="star-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="star-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    ></path>
                  </g>
                </svg>
              </div>
            </button>{" "}
            
          </form>
        </div>
      </section>
      {/* section map */}
      <section className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.9136717352703!2d32.85754712489673!3d23.998825379194184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1436893d605764c3%3A0xac9c8ab7cf39677a!2z2YXYudmH2K8g2KrZg9mG2YjZhNmI2KzZitinINin2YTZhdi52YTZiNmF2KfYqiAtINij2LPZiNin2YY!5e0!3m2!1sar!2seg!4v1708893329916!5m2!1sar!2seg"
          width={1000}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
      <LandinngFooterSection></LandinngFooterSection>
    </>
  );
}

export default ContactUs;
