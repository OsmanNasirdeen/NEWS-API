const Footer = () => {
  return (
    <div className="footer-container bg-secondary">
      <div class="container">
        <div class="row">
          <div class="col-sm contact-us">
            <div>Contact Us</div>
            <ul className="social-links">
              <li className="twitter">
                <i class="bi bi-twitter"></i>
              </li>
              <li className="linkedIn">
                <i class="bi bi-linkedin"></i>
              </li>
              <li className="github">
                <i class="bi bi-github"></i>
              </li>
              <li className="e-mail">
                E-mail
                <i class="bi bi-envelope"></i>
              </li>
            </ul>
          </div>
          <div class="col-sm">
            <div>Health</div>
            <ul className="health-items">
              <li>food</li>
              <li>sleep</li>
              <li>fitness</li>
            </ul>
          </div>
          <div class="col-sm">
            <div>sports</div>
            <ul className="sports-items">
              <li>football</li>
              <li>tennis</li>
              <li>cricket</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
