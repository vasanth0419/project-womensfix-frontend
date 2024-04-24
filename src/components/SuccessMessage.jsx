import React from "react";
import { Link } from "react-feather";

function SuccessMessage() {
  return (
    <div style={{ background: "" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="message-box">
              <div className="success-container">
                <br />
                <img
                  src="https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/31301640_2114242505489348_3921532491046846464_n.png?_nc_cat=104&ccb=1-3&_nc_sid=973b4a&_nc_ohc=pfOalMq8BzUAX-k-rhY&_nc_ht=scontent-lcy1-1.xx&oh=3af014dd12fa6e3d1816a3425a80e516&oe=609BE04A"
                  alt=""
                  style={{ height: "100px" }}
                />
                <br />
                <div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
                  <hr />
                </div>
                <br />
                <h1 className="monserrat-font" style={{ color: "Grey" }}>
                  Thank you for your order
                </h1>
                <br />
                <div className="confirm-green-box">
                  <br />
                  <h5>ORDER CONFIRMATION</h5>
                  <p>Your order #2465 has been successful!</p>
                  <p>
                    Thank you for choosing Oui Oui fashion. You will shortly
                    receive a confirmation email.
                  </p>
                </div>
                <br />
                <Link></Link>
                <button
                  id="create-btn"
                  className="btn btn-ouioui-secondary margin-left-5px"
                >
                  Back to shop
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessMessage;
