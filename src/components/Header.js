import React from "react";
import { Link } from "react-router-dom";
import {
  blue_flag,
  cambridge,
  european_union,
  germany,
  greek,
  logo,
  navbar_cart,
  navbar_chat,
  navbar_notification,
  norway,
  uk,
  usa,
  vietnam,
  profile_img,
} from "../constant";

const Header = () => {
  return (
    <>
      <header id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5">
              <div className="logo-and-search-wrapper">
                <div className="logo-warpper">
                  <Link to="/">
                    <img src={logo} className="img-fluid" />
                  </Link>
                </div>
                <div className="search-wrapper">
                  <form>
                    <input
                      className="form-control"
                      placeholder="Search"
                      type="text"
                    />
                    <button className="btn">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 align-self-center">
              <div className="navbar-profile-icon-wrapper">
                <div className="navbar-wrapper">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        My Product
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        Merch
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="navbar-icon-wrapper">
                  <div className="icon-wrapper">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to="#">
                          <img src={navbar_cart} className="img-fluid" />
                          <span className="count">2</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">
                          <img src={navbar_chat} className="img-fluid" />
                          <span className="count">2</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">
                          <img
                            src={navbar_notification}
                            className="img-fluid"
                          />
                          <span className="count">2</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="language-icon-wrapper">
                  <div className="lang-wrapper">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item dropdown language-list">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <img src={usa} className="img-fluid" />
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item" href="#">
                            <img src={uk} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={blue_flag} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={vietnam} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={germany} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={norway} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={greek} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={cambridge} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={european_union} className="img-fluid" />
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <img src={profile_img} className="img-fluid" />{" "}
                          <span>Darrell Bailey</span>
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item" href="#">
                            <img src={uk} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={blue_flag} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={vietnam} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={germany} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={norway} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={greek} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={cambridge} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={european_union} className="img-fluid" />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
