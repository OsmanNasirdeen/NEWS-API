const Footer = ({ getSearchTerm }) => {
  return (
    <div className="footer-container">
      <div className="container footer-sub-container text-center">
        <div className="row footer-links-row">
          <div className="col-12 col-lg-2 col-md-6">
            <div className="footer-links-header mb-2">
              <h4>World</h4>
            </div>
            <div className="health-items-container">
              <ul
                className="health-items list-unstyled"
                onClick={getSearchTerm}>
                <li>
                  <a href="#" className="footer-link">
                    Africa
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Ghana
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Europe
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Asia
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    India
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-2 col-md-6">
            <div className="footer-links-header mb-2">
              <h4>sports</h4>
            </div>
            <div className="links-container">
              <ul
                className="sports-items list-unstyled"
                onClick={getSearchTerm}>
                <li>
                  <a href="#" className="footer-link">
                    football
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Tennis
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    cricket
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    golf
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-2 col-md-6">
            <div className="footer-links-header mb-2">
              <h4>Health</h4>
            </div>
            <div className="links-container">
              <ul className="list-unstyled" onClick={getSearchTerm}>
                <li>
                  <a href="#" className="footer-link">
                    food
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    sleep
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    fitness
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <div className="footer-links-header mb-2">
              <h4>Trending</h4>
            </div>
            <div className="links-container">
              <ul className="list-unstyled" onClick={getSearchTerm}>
                <li>
                  <a href="#" className="footer-link">
                    chatGPT
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Russian-ukraine war
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Turkey earthquake
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <div className="footer-links-header mb-2">
              <h4>Address</h4>
            </div>
            <div className="links-container">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="bi bi-house me-1"></i>{" "}
                  <span>location, NY-0123-4567, GH</span>
                </li>
                <li className="e-mail mb-3">
                  <i className="bi bi-envelope me-1"></i>{" "}
                  <span>loremNews@gmail.com</span>
                </li>

                <li className="mb-3">
                  <i className="bi bi-telephone me-1"></i>{" "}
                  <span>+233 234 567 890</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row footer-contact-row">
          <div className="col-12 col-lg-9 col-md-6">
            <p>Get connected with us on social networks!</p>
          </div>
          <div className="col-6 col-lg-3 col-md-6 footer-contact-us d-flex flex-column">
            <ul className="social-links list-unstyled d-flex flex-row">
              <li className="twitter">
                <i className="bi bi-twitter"></i>
              </li>
              <li className="linkedIn">
                <i className="bi bi-linkedin"></i>
              </li>
              <li className="github">
                <i className="bi bi-facebook"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="row footer-copyright-row mt-4">
          <p className="text-center">
            &copy; 2023 Copyright - loremNews. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
