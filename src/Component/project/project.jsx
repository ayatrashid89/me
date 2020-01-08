import React, { Component } from 'react';
import './project.css';
export default class Project extends Component{
render (){
return(
   
    <div className="content" id="project">
    <section className="colorlib-about" data-section="about">
    <div className="colorlib-narrow-content">
        <div className="row">
        <div className="col-md-12">
            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
            <div className="col-md-12">
                <div className="about-desc">
               
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
    <section className="colorlib-about">
    <div className="colorlib-narrow-content">
        <div className="row">
        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
           
            <h2 className="colorlib-heading">Here are some of my projcts</h2>
        </div>
        </div>
        <div className="row row-pt-md">
        <div className="col-md-4 text-center animate-box">
            <div className="services color-1">
            
            <img className= "myimg" src={ require('./voy.PNG') } />
    
            <div className="desc">
                <h3>www.voyagereng.com</h3>
                <p>Designed company website using WordPress content management system. Communicated directly with the founder of the company to adjust website content and design</p>
            </div>
            </div>
        </div>
        <div className="col-md-4 text-center animate-box">
            <div className="services color-3">
           
                <img className= "myimg" src={require('./cs.PNG') }/>
            
            <div className="desc">
                <h3>CS Club Project</h3>
                <p>Developed a website using PHP and MYSQL for Computer Science Club in Highline College. http://chelan.highline.edu/ ~ayatrashid/finalPhp/</p>
            </div>
            </div>
        </div>
        <div className="col-md-4 text-center animate-box">
            <div className="services color-5">
            <img className="myimg" src={require("./wp2.PNG")} />
            <div className="desc">
                <h3>WordPress Project</h3>
                <p> I designed a website for my WordPress class that allow me to display items and purshis them. http://ayatr.sgedu.site/ wordpress/</p>
            </div>
            </div>
        </div>

        </div>
        </div>
        </section>
      </div>

)


}




}