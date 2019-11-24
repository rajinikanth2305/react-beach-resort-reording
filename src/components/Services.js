import React, { Component } from 'react';
import Title from "./Title";
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
class Services extends Component {
  state={
    services:[
      {
        icon:<FaCocktail/>,
        title:"free cocktails",
        info:"we give free cocktails"
      },
      {
        icon:<FaHiking/>,
        title:"free hiking",
        info:"we gonna take for free hiking"
      },
      {
        icon:<FaShuttleVan/>,
        title:"free van services",
        info:"we gonna provide free shuttle services"
      },
      {
        icon:<FaBeer/>,
        title:"free Beer",
        info:"we gonna provide free beers"
      }
    ]
  }
  render() {
    return (
      <section className="services">
      <Title title="services"/>
      <div className="services-center">
      {this.state.services.map((item,index)=>
      {
        return (<article key={index} className="service">
        <span>{item.icon}</span>
        <h6>{item.title}</h6>
        <p>{item.info}</p>
        </article>
      );
      })}
      </div>
      </section>
    );
  }

}

export default Services;
