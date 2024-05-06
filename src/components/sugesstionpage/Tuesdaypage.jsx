import React from "react";

const Tuesdaypage = () => {
  return (
    <div>
      <div class="fashion-trends">
        <div class="container">
          <div class="fashion-box">
            <div class="title-style text-center">
              <h1>Tuesday</h1>
            </div>
            <p class="text-center sm-bt">
              Mars, symbolizing energy and drive, carries a dynamic influence.
              Despite its traditionally deemed unfavorable status, Tuesdays
              offer opportunities for action-oriented pursuits like sports and
              academic endeavors. While caution is advised for significant
              events, focusing on tasks requiring determination and focus aligns
              with Mars' energy. Embrace themes of honor and integrity,
              channeling Mars' fiery spirit into productive pursuits. Prioritize
              self-discipline and clarity of intention to make the most of
              Tuesdays' potential.
              <br /><br />
              <span
                style={{
                  background: "red",
                  padding: "5px",
                  color: "white",
                }}
              >
                <b>Color:</b> Red
              </span>
            </p>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="trending-img">
                <img
                  src="https://i.pinimg.com/736x/6e/a6/d2/6ea6d27d2f177eac30e0ff91b05bd8a2.jpg"
                  alt=""
                />
                <button type="button" class="btn-buy">
                  the Hourglass Body Type | Stylish spring outfit, Work fashion,
                  Professional outfit
                </button>
                <div class="overlay"></div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trending-img">
                <img
                  src="https://i.pinimg.com/originals/79/a8/56/79a856474c39a0bf8b3691a52aa5fbb6.jpg"
                  alt=""
                />
                <button type="button" class="btn-buy">
                  Casual Winter Look Red and white outfits, Red coat outfit
                  winter, Black white outfit
                </button>
                <div class="overlay"></div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trending-img">
                <img
                  src="https://i.pinimg.com/736x/b2/85/28/b28528f37a4de2a9b7148445934be19e.jpg"
                  alt=""
                />
                <button type="button" class="btn-buy">
                  Casual Winter Look Red and white outfits, Red coat outfit
                  winter, Black white outfit
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

export default Tuesdaypage;
