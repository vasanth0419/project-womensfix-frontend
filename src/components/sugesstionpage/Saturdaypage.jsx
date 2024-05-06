import React from "react";

const Saturdaypage = () => {
  return (
    <div>
      <div class="fashion-trends">
        <div class="container">
          <div class="fashion-box">
            <div class="title-style text-center">
              <h1>Saturday</h1>
            </div>
            <p class="text-center sm-bt">
              Saturdays, under Saturn's influence, encourage introspection and
              inner purification. Embrace this day as an opportunity for
              self-reflection and mental rejuvenation, preparing for a fresh
              start. Connect with nature through activities like forest bathing
              or hiking, tapping into Saturn's grounding energy. Use this time
              to cultivate mindfulness and deepen your spiritual practice,
              fostering inner growth and resilience. Embrace Saturn's teachings
              as valuable lessons that pave the way for personal transformation
              and renewal.
              <br />
              <br />
              <span
                style={{
                  background: "black",
                  padding: "5px",
                  color: "white",
                }}
              >
                <b>Color:</b> Black ,Dark Blue
              </span>
            </p>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="trending-img">
                <img
                  src="https://fashionjackson.com/wp-content/uploads/2017/07/Fashion-Jackson-Everlane-Black-Button-Up-Shirt-Denim-Skinny-Jeans-Christian-Louboutin-Nude-Pumps-Red-Handbag.jpg"
                  alt=""
                />
                <button type="button" class="btn-buy">
                  Black Shirts
                </button>
                <div class="overlay"></div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trending-img">
                <img
                  src="https://i.pinimg.com/736x/66/c8/8a/66c88aaf749826a0f00b37a166517165.jpg"
                  alt=""
                />
                <button type="button" class="btn-buy">
                  Black & Navy
                </button>
                <div class="overlay"></div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trending-img">
                <img
                  src="https://qph.cf2.quoracdn.net/main-qimg-8b4b3f6f1e89cabc07215809cc34a6ff-pjlq"
                  alt=""
                />
                <button type="button" class="btn-buy">
                  Black outfit
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

export default Saturdaypage;
