const Navbar = ({ getCategoryData }) => {
  return (
    <>
      <nav className="nav container d-flex navbar navbar-expand-lg navbar-light bg-light px-4">
        <a className="navbar-brand" href="#">
          <img
            src="https://cdn-icons-png.flaticon.com/512/21/21601.png"
            width="40"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          LOREM NEWS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-lg-flex justify-content-lg-between"
          id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" onClick={getCategoryData}>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                politics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Business
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true">
                Sports
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Football
                </a>
                <a className="dropdown-item" href="#">
                  Tennis
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  NBA
                </a>
                <a className="dropdown-item" href="#">
                  Cricket
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Technology
              </a>
            </li>
          </ul>
          <form className="d-flex ml-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
