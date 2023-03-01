import React, { Component } from 'react';
import DEFAULT_dATA from '../resumeData.json';


let footerData = DEFAULT_dATA['main'];
// let currentTime = new Date()
class Footer extends Component {
  render() {

    if(footerData){
      var networks= footerData['social'].map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>
           <hr style={{background: "#838C95",height: "0.1px",border: "none", }}
/>
           {/* <ul className="copyright">
              <li>&copy; Copyright {currentTime.getFullYear()} Kritika Verma</li>
              <li>Design by <a title="Styleshout" href="#">Kritika Verma</a></li>
           </ul> */}

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
