import React, {Component} from 'react';
import Sidebar from './Component/sidebar/Sidebar';
import Header from './Component/header/Header';
import Experience from './Component/experience/experience';
import Education from './Component/education/education';
import Project from './Component/project/project';
import SocialMedia from './Component/sidebar/socialmedia/SocialMedia'
import './App.css';

class App extends Component {
  state = {
    isMobile: false,
}

componentDidMount(){
    this.isMobile();
    window.addEventListener("resize", this.isMobile);
}

isMobile = () => {
    if(window.innerWidth < 700){   
        this.setState({isMobile: true});
    }else{
        this.setState({isMobile: false});
    }
}

  render() {
  return (
    <div className="App">
      
      <Sidebar/>
      <div className = "AppContent">
        <Header/>
        <Experience/>
        <Project/>      
        <Education/>

        {this.state.isMobile?<SocialMedia/>:null}
      </div>
     
    </div>
  );
}
}
export default App;
