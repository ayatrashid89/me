import React, {Component} from 'react';
import './experience.css';

export default class Experience extends Component {
    render() {
    return(
        <div className = "content" id="experience">

<section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta"></span>
                <h2 className="colorlib-heading animate-box">Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Web Developer – Internship<span> Sep/2019- Nov-2019</span></h2>
                        <p>Designed company website using WordPress content management system. Communicated directly with the founder of the company to adjust website content and design.</p>
                      </div>
                    </div>
                  </article> 

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Office Asisstance/Highline college <span>May/2019-Jul/2019</span></h2>
                        <p>Maintained students records using Microsoft Excel, using functions and tables within worksheets. Generated reports and coordinating meetings.</p>
                      </div>
                    </div>
                  </article>
                  
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Passenger Service Agent/Emirates Airlines<span> Apr/2018-Aug/2018</span></h2>
                        <p>Customer service to passengers, responsible for boarding process and passengers check-ins</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
    
            {/* <div id= "experience">
                <h1>EXPERIENCE</h1>
                <h2>Highline College/Continue education</h2>
                <h3>Office assistance, May 2019- July 2019</h3>

<p>Maintained students records using Microsoft Excel, using functions and tables within worksheets. Generated reports and coordinating meetings.</p>
            </div> */}

           
        </div>
    );
};
}