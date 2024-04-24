import React from "react";
import { Link } from "react-router-dom";

const Cartpage = ({
  cartItems = [],
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              {/* Your cart items rendering */}
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {cartItems.length} items</h5>
                </div>
                <div className="card-body">
                  {cartItems.map((cartItem) => (
                    <div key={cartItem._id} className="row mb-4">
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div className="bg-image hover-overlay hover-zoom ripple rounded">
                          <img
                            src={cartItem.image}
                            className="w-100"
                            alt={cartItem.name}
                          />
                          <a href="#!">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p>
                          <strong>{cartItem.name}</strong>
                        </p>

                        <p>Size :XS, S, L, XL, XXL</p>

                        <p>
                          <span
                            className="fa fa-star checked"
                            style={{ color: "gold" }}
                          ></span>
                          <span
                            className="fa fa-star checked"
                            style={{ color: "gold" }}
                          ></span>
                          <span
                            className="fa fa-star checked"
                            style={{ color: "gold" }}
                          ></span>
                          <span
                            className="fa fa-star checked"
                            style={{ color: "gold" }}
                          ></span>
                          <span
                            className="fa fa-star checked"
                            style={{ color: "gold" }}
                          ></span>
                        </p>

                        <button
                          type="button"
                          className="btn btn-primary btn-sm me-1 mb-2"
                          onClick={() => removeFromCart(cartItem._id)}
                        >
                          <i className="fas fa-trash"></i> Remove item
                        </button>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div
                          className="d-flex mb-4"
                          style={{ maxWidth: "300px" }}
                        >
                          <button
                            className="btn btn-primary px-3 me-2"
                            onClick={() => decreaseQuantity(cartItem._id)}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <div className="form-outline">
                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value={cartItem.quantity}
                              type="number"
                              className="form-control"
                              readOnly
                            />
                            <label className="form-label" htmlFor="form1">
                              Quantity
                            </label>
                          </div>
                          <button
                            className="btn btn-primary px-3 ms-2"
                            onClick={() => increaseQuantity(cartItem._id)}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <p className="text-start text-md-center">
                          <strong>${cartItem.price}</strong>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Cart summary */}
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>${calculateTotal()}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>${calculateTotal()}</strong>
                      </span>
                    </li>
                  </ul>
                  <Link to="/success">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Go to checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">{/* Additional content, if any */}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cartpage;
