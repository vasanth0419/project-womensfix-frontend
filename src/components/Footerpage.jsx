import React from "react";
import "./style.css/Footer.css"; // Import your CSS file
import { Link } from "react-router-dom";

const Footerpage = () => {
  return (
    <div className="container-fluid">
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                Discover the epitome of elegance at <i>Women's Fix</i>, where
                every stitch is tailored to empower. From timeless classics to
                trendsetting pieces, our curated collection celebrates the
                essence of femininity. Embrace confidence with our range of
                dresses, designed to accentuate your unique style. With
                unparalleled quality and attention to detail, Women's Fix is
                your destination for sartorial sophistication. Redefine fashion
                on your terms with every click, because at Women's Fix, every
                woman is her own muse.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <Link to="/formaldress">Formal Dresses</Link>
                </li>
                <li>
                  <Link to="/casualdress">Casual Dresses</Link>
                </li>
                <li>
                  <Link to="/rompers">Rompers</Link>
                </li>
                <li>
                  <Link to="/jumpsuits">Jumpsuits</Link>
                </li>
                <li>
                  <Link to="/tops">Tops</Link>
                </li>
                <li>
                  <Link to="/pants">Pants</Link>
                </li>
                <li>
                  <Link to="/skirts">Skirts</Link>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>
                <li>
                  <Link to="#">Contribute</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <a href="https://maps.app.goo.gl/tAPiHb15WbJSmyZi7">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by
                <a href="#">Women's Fix</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footerpage;
