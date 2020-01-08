import React, { Component } from 'react';
import './header.css';


class Header extends Component {
    state = {
        isMobile: false,
    }

    componentDidMount(){
        this.isMobile();
        window.addEventListener("resize", this.isMobile);
    }
    
    isMobile = () => {
        if(window.innerWidth < 700){
            console.log("I am in if");
            this.setState({isMobile: true});
        }else{
            console.log("I am in else");
            this.setState({isMobile: false});
        }
    }

    render(){
        return(
            <div className="header" id="home">
                <div className="bg">
                <img className="backimg" src={ this.state.isMobile?require('./ayat12.jpeg'):require('./bg.jpeg') } />
                </div>
                <div className="intro">
                <h1>Hi, I'm Ayat Rashid.</h1>
                <p>I'm a Web Developer based in Greater Seattle Area. I'm experienced in  building websites using HTML, CSS, JavaScript, and ReactJS. Also, I've built websites for several clients using PHP, SQL, WordPress, PhotoShop, Premiere Pro.</p>
                </div>             
            </div>
        )
    }
 
};

export default Header;
