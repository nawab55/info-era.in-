import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <Link to="/" className="logo d-flex align-items-center">
                  <img
                    src="assets/img/infoera.png"
                    alt="Info Era Software Services Logo"
                    title="Logo - Info Era Software Services Pvt.Ltd "
                  />
                  {/* <span>FlexStart</span> */}
                </Link>
                <p>
                  Info Era is a leading global Next-Generation Software Services
                  platform providing client oriented solution. Our clients are
                  in different states of India and across globe.
                  <Link to="about"> read more.</Link>
                </p>
                <div className="social-links mt-3">
                  <Link
                    to="https://twitter.com/INFOERASOFTWAR1"
                    className="twitter"
                    target="_blank"
                  >
                    <i className="bi bi-twitter" />
                  </Link>
                  <Link
                    to="https://www.facebook.com/infoerasoftware"
                    className="facebook"
                    target="_blank"
                  >
                    <i className="bi bi-facebook" />
                  </Link>
                  <Link
                    to="https://www.instagram.com/infoerasoftwareservices/?hl=en"
                    className="instagram"
                    target="_blank"
                  >
                    <i className="bi bi-instagram" />
                  </Link>
                  <Link
                    to="https://in.linkedin.com/in/info-era-software-services-pvt-ltd-5b0688a5?trk=people-guest_people_search-card"
                    className="linkedin"
                    target="_blank"
                  >
                    <i className="bi bi-linkedin" />
                  </Link>
                  <Link
                    to="https://www.youtube.com/@user-yf2in7if6y"
                    className="youtube"
                    target="_blank"
                  >
                    <i className="bi bi-youtube" />
                  </Link>
                </div>
                <div className="paynow" style={{ marginTop: 20 }}>
                  <div className="pm-button">
                    <Link
                      to="https://www.payumoney.com/paybypayumoney/#/6DB40DF7CFCA4EEC115857CA73883749"
                      target="_blank"
                    >
                      <img
                        src="https://www.payumoney.com/media/images/payby_payumoney/new_buttons/21.png"
                        alt="Pay Now"
                        title="Pay Now - Info Era Software"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4 className="important-font-size">Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="/" title="Index Page">
                      Home
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="activity" title="Activity Page">
                      Activity
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="return-policy" title="Company Policy">
                      Return Policy
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="terms-conditions" title="Conditions Page">
                      Terms of Condition
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="privacy-policy" title="Company Privacy Policy">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4 className="important-font-size">Our Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="website-design">Web &amp; App Development</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="digital-marketing">Digital Marketing</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="consulting">IT Consulting</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="training">Industrial Training</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="ibc">Co-Partners (IBC/BBC)</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4 className="important-font-size">Contact Us</h4>
                <p>
                  <strong>Phone:</strong> +91 7008411312
                  <br />
                  <strong>Email:</strong> contact@infoerasoftware.com
                  <br />
                  <br />
                  <strong>Our Branches:</strong>
                  <br />
                  Bhubneshwar | Patna | Darbhanga
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            Copyright © 2014{" "}
            <strong>
              <span>Info Era Software Services Pvt. Ltd.</span>
            </strong>{" "}
            | All Rights Reserved.
          </div>
          <div className="credits">
            Designed &amp; Developed by{" "}
            <Link to="https://infoerasoftware.com/" target="_blank">
              Info Era Software Services Pvt. Ltd.
            </Link>
          </div>
        </div>
        <Link to="/robots.txt" title="Robots file - Info Era" />
      </footer>
      {/* End Footer */}
    </>
  );
}

export default Footer;
