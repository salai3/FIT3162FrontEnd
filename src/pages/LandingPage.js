import { Fragment } from "react";
import "./LandingPage.css";
import logo from "./img/chase_logo.png"
import truck from "./img/truck.svg"
import business_1 from "./img/business_1.jpg"
import business_2 from "./img/business_2.jpg"
import business_3 from "./img/business_3.jpg"
import blog_1 from "./img/blog-1.jpg"
import blog_2 from "./img/blog-2.jpg"
import blog_3 from "./img/blog-3.jpg"

const LandingPage = () => {
  return (
    <Fragment>
      <section className="smart-scroll">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-dark">
            <a className="navbar-brand heading-black" href="index.html">
              <img src={logo} alt="logo" width="100" height="100" />
            </a>
            <button
              className="navbar-toggler navbar-toggler-right border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span data-feather="grid"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#features">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#blog">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>

      <section className="py-7 py-md-0 bg-hero" id="home" style={{backgroundColor: "#00000"}}>
        <div className="container">
          <div className="row vh-md-100">
            <div className="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
              <img src={truck} alt="logo" width="100" height="100" />
              <h1 className="heading-black text-capitalize">
                Track you product with Chase! Sign up now
              </h1>
              <p className="lead py-3"></p>
              <a href="" style={{margin:"25px"}} className="btn btn-primary d-inline-flex flex-row align-items-center">
                Register
                <em className="ml-2" data-feather="arrow-right"></em>
              </a>
              <a href="/login" style={{margin:"25px"}} className="btn btn-primary d-inline-flex flex-row align-items-center">
                Log In
                <em className="ml-2" data-feather="arrow-right"></em>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-7" style={{backgroundColor: "#DCDCDC"}} id="features">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h2 className="heading-black" style={{color: "black"}}>Chase offers everything you need.</h2>
              <p className="text-muted lead">We provide the services such as</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-10 mx-auto">
              <div className="row feature-boxes">
                <div className="col-md-6 box">
                  <div className="icon-box box-primary">
                    <div className="icon-box-inner">
                      <span data-feather="edit-3" width="35" height="35"></span>
                    </div>
                  </div>
                  <h5 style={{color: "black"}}>Track Products from Supplier to your warehouse.</h5>
                  <p className="text-muted">
                    Fully track orders through their delivery stages. Never lose
                    track on an order again!
                  </p>
                </div>
                <div className="col-md-6 box">
                  <div className="icon-box box-success">
                    <div className="icon-box-inner">
                      <span
                        data-feather="monitor"
                        width="35"
                        height="35"
                      ></span>
                    </div>
                  </div>
                  <h5 style={{color: "black"}}>Create new orders and send directly to suppliers</h5>
                  <p className="text-muted">
                    Create orders with ease! Just enter the products and
                    quantity and we will handle the rest
                  </p>
                </div>
                <div className="col-md-6 box">
                  <div className="icon-box box-danger">
                    <div className="icon-box-inner">
                      <span data-feather="layout" width="35" height="35"></span>
                    </div>
                  </div>
                  <h5 style={{color: "black"}}>Beautiful visualization of your stock level</h5>
                  <p className="text-muted">
                    Different graphs visualizing to ensure you are fully
                    informed about your stock information.
                  </p>
                </div>
                <div className="col-md-6 box">
                  <div className="icon-box box-info">
                    <div className="icon-box-inner">
                      <span data-feather="globe" width="35" height="35"></span>
                    </div>
                  </div>
                  <h5 style={{color: "black"}}>Easy to use</h5>
                  <p className="text-muted">
                    Our program is designed to cater for users with varying
                    technical literacy levels!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-6">
            <div className="col-md-6 mr-auto">
              <h2 style={{color: "black"}}>Chace is more than just a stock tracker.</h2>
              <p className="text-muted">
                With Chace, you can have every aspects of your business in your
                control anytime and anywhere.
              </p>
            </div>
            <div className="col-md-5">
              <div className="slick-about">
                <img
                  src={business_1}
                  className="img-fluid rounded d-block mx-auto"
                  alt="Work 1"
                />
                <img
                  src={business_2}
                  className="img-fluid rounded d-block mx-auto"
                  alt="Work 2"
                />
                <img
                  src={business_3}
                  className="img-fluid rounded d-block mx-auto"
                  alt="Work 3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-7" id="faq">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h2>Frequently asked questions</h2>
              <p className="text-muted lead">Answers to most common questions.</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div className="col-md-6 mb-5">
                  <h6>Can I try it for free?</h6>
                  <p className="text-muted">
                    Yes! Chace is absolutely free with no hidden fees.
                  </p>
                </div>
                <div className="col-md-6 mb-5">
                  <h6>How often do you release updates?</h6>
                  <p className="text-muted">
                    Since we are in early beta, we are planning for a monthly
                    patch cycle with the exception of emergency bug fixes.
                  </p>
                </div>
                <div className="col-md-6 mb-5">
                  <h6>What is your privacy policy?</h6>
                  <p className="text-muted">
                    Your data is safe with us behind our multi level
                    authentication system. We also plan to implement 2FA in
                    future patches so do keep and eye on that.
                  </p>
                </div>
                <div className="col-md-6 mb-5">
                  <h6>How can I contact you?</h6>
                  <p className="text-muted">
                    You can contact us at ask@chace.com with any enquiries of
                    problems that you have regarding the system and we will be
                    happy to assist you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 mx-auto text-center">
              <h5 className="mb-4">Have questions?</h5>
              <a href="" className="btn btn-primary">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-7 bg-dark section-angle top-left bottom-left"
        id="blog"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h2 className="heading-black">News from Chace.</h2>
              <p className="text-muted lead">What's new at Chace.</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card">
                <a href="#">
                  <img
                    className="card-img-top img-raised"
                    src={blog_1}
                    alt="Blog 1"
                  />
                </a>
                <div className="card-body">
                  <a href="#" className="card-title mb-2">
                    <h5>We launched Version 1 of the System!</h5>
                  </a>
                  <p className="text-muted small-xl mb-2">Sep 27, 2022</p>
                  <p className="card-text">
                    Chace is happy to announce the initial version of the
                    program is out to the public! <a href="#">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <a href="#">
                  <img
                    className="card-img-top img-raised"
                    src={blog_2}
                    alt="Blog 2"
                  />
                </a>
                <div className="card-body">
                  <a href="#" className="card-title mb-2">
                    <h5>Mobile app announced!</h5>
                  </a>
                  <p className="text-muted small-xl mb-2">Oct 16, 2022</p>
                  <p className="card-text">
                    Chace is happy to announce that integration with mobile
                    devices are coming in the near future.{" "}
                    <a href="#">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <a href="#">
                  <img
                    className="card-img-top img-raised"
                    src={blog_3}
                    alt="Blog 3"
                  />
                </a>
                <div className="card-body">
                  <a href="#" className="card-title mb-2">
                    <h5>Chace: who are we?</h5>
                  </a>
                  <p className="text-muted small-xl mb-2">December 2nd, 2021</p>
                  <p className="card-text">
                    Introducing the team behind Chace, our story and our journey
                    in creating Chace. <a href="#">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-6">
            <div className="col-md-6 mx-auto text-center">
              <a href="#" className="btn btn-primary">
                View all posts
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 mr-auto">
              <h5>About Chace</h5>
              <p className="text-muted">
                We provide a system to keep track of the stock and other
                information to help navigate you and your business in day to day
                operations.
              </p>
              <ul className="list-inline social social-sm">
                <li className="list-inline-item">
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 text-muted text-center small-xl">
              &copy; 2019 Knight - All Rights Reserved
            </div>
          </div>
        </div>
      </footer>

      <div className="scroll-top">
        <i className="fa fa-angle-up" aria-hidden="true"></i>
      </div>

      <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.7.3/feather.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
    </Fragment>
  );
};

export default LandingPage;
