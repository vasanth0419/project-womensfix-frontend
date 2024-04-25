import React from "react";
import "./style.css/Homepage.css";
import { Link } from "react-router-dom";
import Footerpage from "./Footerpage";
import Contactus from "./Contactus";

const Homepage = () => {
  return (
    <div>
      <div className="container-fluid">
        {/* 1st - content */}

        <img
          class="index-main-img"
          src="https://singh-shivani.github.io/Merlin-Fashion/images/index-img/Off-the-Wall.jpg"
          alt=""
        />

        <br />
        {/* 2st - content */}

        <div className="jumbotron pt-4 pb-1 text-white rounded bg-dark">
          <div className="container">
            <div className="row justify-content-center justify-content-md-start">
              <div className="col-md-6 px-0">
                <div className="text-center pt-5 pe-5 m-1">
                  <p className="lead my-3 font-italic ">
                    "Welcome to Women's Fix Daily Dress Color Suggestions!
                    Elevate your style effortlessly with our curated color
                    recommendations tailored for the modern woman. From vibrant
                    hues that exude confidence to soft tones that radiate
                    elegance, we're here to inspire your wardrobe every day. Say
                    goodbye to fashion dilemmas and hello to effortless chic
                    with our daily picks. Let's paint your world with hues that
                    reflect your unique personality and empower your style
                    journey."
                  </p>
                  <p className="lead mb-0">
                    <a href="#" className="text-white font-weight-bold">
                      Continue reading...
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 ml-3 first_image">
                <img
                  className=" rounded pt-4 ps-3"
                  style={{ width: "100%", height: "90%" }}
                  src="https://www.color-meanings.com/wp-content/uploads/Colors-of-the-Week-1-1536x1032.png"
                  alt="Dress collection"
                />
              </div>
            </div>
          </div>
        </div>
        <br />

        {/* ///// */}
        <div class="index-grid-img-1">
          <p>
            <img
              src="https://singh-shivani.github.io/Merlin-Fashion/images/index-img/anton-levin-P8prss71psk-unsplash.jpg"
              alt=""
            />
            <h4 class="info-of-img-below">For the Young, Wild & Stylish</h4>
          </p>
          <p>
            <img
              src="https://singh-shivani.github.io/Merlin-Fashion/images/index-img/bogdan-glisik-2WgOPYJuPsU-unsplash%20(1).jpg"
              alt=""
            />
            <h4 class="info-of-img-below">Just like your way to Conquer</h4>
          </p>
          <p>
            <img
              src="https://singh-shivani.github.io/Merlin-Fashion/images/index-img/calvin-lupiya--yPg8cusGD8-unsplash.jpg"
              alt=""
            />
            <h4 class="info-of-img-below">Stands out like the Sun</h4>
          </p>
        </div>
        {/* //////// */}

        <h2 class="head-of-offer ">STYLES TO STEAL</h2>
        

        <div class="index-grid-img-3">
          <div>
            <a>
              <img
                src="https://singh-shivani.github.io/Merlin-Fashion/images/index-img/girl4.png"
                alt=""
              />
            </a>
          </div>
          <div>
            <a>
              <img
                src="https://singh-shivani.github.io/Merlin-Fashion/images/index-img/girl3.png"
                alt=""
                srcset=""
              />
            </a>
          </div>
          <div>
            <a>
              <img
                src="https://singh-shivani.github.io/Merlin-Fashion/images/index-img/girl2.png"
                alt=""
              />
            </a>
          </div>
          <div>
            <a>
              <img
                src="https://singh-shivani.github.io/Merlin-Fashion/images/index-img/girl1.png"
                alt=""
                srcset=""
              />
            </a>
          </div>
        </div>
      </div>
      {/* <Footer /> */}

      <Footerpage />
    </div>
  );
};

export default Homepage;
