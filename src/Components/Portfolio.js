import React, { Component } from 'react';
import DEFAULT_dATA from '../resumeData.json';

let portfolioData = DEFAULT_dATA['portfolio'];


class Portfolio extends Component {
  render() {

    if(portfolioData){
      var projects = portfolioData['projects'].map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return (
              <div key={projects.title} className="columns portfolio-item">
                {/* <div className="item-wrap"> */}
                  <a href={projects.url} title={projects.title}>
                    <img alt={projects.title} src={projectImage} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                        {/* <i className="fa fa-link"> </i> */}
                          <h5 style={{color:'#454545'}}>{projects.title}</h5>
                          <p style={{color:'#4c4e4e'}}>{projects.category}</p>
                        </div>
                      </div>
                      {/* <div className="link-icon"><i className="fa fa-link"></i></div> */}
                  </a>
                {/* </div> */}
              </div>
              )
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
