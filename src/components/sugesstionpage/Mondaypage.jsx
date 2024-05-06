import React from "react";
import "./style.css/style.css";
const Mondaypage = () => {
  return (
    <div>
      <div class="fashion-trends">
        <div class="container">
          <div class="fashion-box">
            <div class="title-style text-center">
              <h1>Monday</h1>
            </div>
            <p class="text-center sm-bt">
              Mondays, associated with the nurturing energy of the moon, invite
              us to embrace our emotional well-being. Dedicate this day to
              self-care and relaxation, reducing stress and embracing
              tranquility. In the spirit of lunar influence, prioritize
              connecting with others and fostering community bonds. Opt for
              activities that encourage communication and socializing, promoting
              a sense of belonging. Embrace the essence of "manic Mondays" by
              enjoying outings with friends and engaging in meaningful
              interactions.
              <br />
              <br />
              <span style={{ background: "white", padding: "5px" }}>
                <b>Color:</b> White
              </span>
            </p>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="trending-img">
                <img
                  src="https://www.hancockfashion.com/cdn/shop/files/13031WhiteS_1.jpg?v=1686918329&width=1080"
                  alt=""
                />
                <button type="button" class="btn-buy">
                  WHITE FORMAL SHIRT WITH BLACK PANT
                </button>
                <div class="overlay"></div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trending-img">
                <img
                  src="https://jonathanmezibov.com/cdn/shop/products/SHOT_05_277.jpg?v=1615482370&width=2048"
                  alt=""
                />
                <button type="button" class="btn-buy">
                  WHITE FORMAL SHIRT WITH BLUE JEAN
                </button>
                <div class="overlay"></div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trending-img">
                <img
                  src="https://i.pinimg.com/originals/4b/a2/2d/4ba22dfd657d262c63f4f424c1f15cc7.jpg"
                  alt=""
                />
                <button type="button" class="btn-buy">
                  WHITE FORMALS
                </button>
                <div class="overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mondaypage;
