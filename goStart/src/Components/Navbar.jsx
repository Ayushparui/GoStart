import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            GOSTART
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sellers
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      List Startup
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Get Help Selling
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Buyers
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Browse Startups
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Pricing
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Resources
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Testimonials
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div style={{ "padding-right": "20px" }}>
              <button
                className="btn btn-outline-success"
                type="submit"
              >
                Login 
              </button>
            </div>
            <div style={{ "padding-right": "30px" }}>
              <button
                className="btn btn-outline-success"
                type="submit"
              >
                Join Now 
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
