import React, { Component } from "react";
import "./project.css";
export default class Project extends Component {
  render() {
    return (
      <div className="content" id="project">
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 className="colorlib-heading">
                  Here are some of my projects
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <a href="http://voyagereng.com/">
                    {" "}
                    <img
                      className="myimg"
                      alt="img"
                      src={require("./voy.PNG")}
                    />{" "}
                  </a>

                  <div className="desc">
                    <h3>Voyager Engineering website</h3>
                    <p>
                      Designed a website for Voyager Engineering LLC. I used
                      WordPress content management system to built the website
                      in align by company guidelines.<a href=" www.voyagereng.com">www.voyagereng.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <a href="http://chelan.highline.edu/~ayatrashid/finalPhp/admin_login.php">
                    {" "}
                    <img
                      className="myimg"
                      alt="img"
                      src={require("./cs.PNG")}
                    />{" "}
                  </a>

                  <div className="desc">
                    <h3>CS Club Project</h3>
                    <p>
                      Developed a website using PHP and MYSQL for Computer
                      Science Club in Highline College.
                     <a href="http://chelan.highline.edu/~ayatrashid/finalPhp/index.php">CS-Club Project</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <a href="http://wordpress.org/plugins/multiple-page-generator/">
                    {" "}
                    <img
                      className="myimg"
                      alt="img"
                      src={require("./wp2.PNG")}
                    />{" "}
                  </a>
                  <div className="desc">
                    <h3>WordPress Plugin </h3>
                    <p>
                      {" "}
                      A member of team who Developed a WordPress plugin by using
                      HTML/CSS, PHP, WordPress library. Plugin creates a page
                      with one click.
                      <a href="wordpress.org/plugins/multiple-page-generator/">WordPress Plugin </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
