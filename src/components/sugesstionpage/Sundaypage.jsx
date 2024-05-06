import "./style.css/style.css";

const Sundaypage = () => {
  return (
    <div>
      <div class="fashion-trends">
        <div class="container">
          <div class="fashion-box">
            <div class="title-style text-center">
              <h1>Sunday</h1>
            </div>
            <p class="text-center sm-bt">
              In modern interpretation, Sundays symbolize self-care and
              introspection. Activities like yoga or meditation, such as Sun
              Salutations, promote mindfulness and gratitude. Recognizing the
              sun's significance fosters connection to oneself and nature.
              Starting the week with wellness practices enhances mental and
              physical health. Embracing Sundays as a day to honor the sun
              cultivates harmony and positivity. <br />
              <br />
              <span style={{ background: "#E0115F", padding: "5px" ,color:"white"}}>
                <b>Color:</b> Rube Red
              </span>
            </p>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="trending-img">
                <img
                  src="https://newcdn.kalkifashion.com/media/catalog/product/r/u/ruby-red-gown-in-milano-satin-with-embellished-bodice-online-kalki-fashion-462741_6_.jpg"
                  alt=""
                />
                <button type="button" class="btn-buy">
                  Ruby Red Gown In Milano Satin With Embellished Bodice
                </button>
                <div class="overlay"></div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trending-img">
                <img
                  src="https://cdn.shopify.com/s/files/1/0064/6591/2921/products/18-804MF-Burgundy.jpg?v=1622155851"
                  alt=""
                />
                <button type="button" class="btn-buy">
                  Ruby Red Gown In Milano Satin With Embellished Bodice
                </button>
                <div class="overlay"></div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trending-img">
                <img
                  src="https://i.pinimg.com/1200x/c1/b9/13/c1b913abecbb7a3213a5c8b70aec1ca7.jpg"
                  alt=""
                />
                <button type="button" class="btn-buy">
                  Elegant Dark Wine Maxi Dress for Women Red Dress
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

export default Sundaypage;
