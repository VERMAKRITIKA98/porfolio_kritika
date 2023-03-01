import React, { Component } from 'react';
import DEFAULT_dATA from '../resumeData.json';


let tmpData = DEFAULT_dATA['main'];

class About extends Component {
  render() {

    if(tmpData){
      var name = tmpData['name'];
      var profilepic= tmpData['image'];;
      var bio = tmpData['bio'];
      var street = tmpData['address']['street'];
      var city = tmpData['address']['city'];
      var state = tmpData['address']['state'];
      var zip = tmpData['address']['zip'];
      var phone= tmpData['phone'];
      var email = tmpData['email'];
      var resumeDownload = tmpData['resumedownload'];;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Kritika Verma Profile Pic" />
         </div>
         <div className="nine columns main-col">
            
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
