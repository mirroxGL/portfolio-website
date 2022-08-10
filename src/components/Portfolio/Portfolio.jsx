import React from 'react'
import "./Portfolio.css"
import bicycles from "./../../assets/images/sellingbycecles.png"
import mogo from "./../../assets/images/mogo.png"
import socialNetwork from "./../../assets/images/socialNetwork.png"
import freeFilms from "./../../assets/images/freeFilms.png"


const PortfolioItem = (props) => {
   return (<article className='portfolio__item'>
      <div className="portfolio__item-image">
         <img src={props.image} alt="" />
      </div>
      <h3>{props.description}</h3>
      <h5>{props.additional}</h5>
      <div className="portfolio__item-cta">
         <a className={"btn" + (!props.github ? "disabled" : "")} href={props.github}>Github</a>
         <a className={"btn btn-primary" + (!props.demo ? " disabled" : "")} href={props.demo} target="_blank">Live Demo</a>
      </div>
   </article>)

}

const Portfolio = () => {
   return (
      <section id="portfolio">
         <h5>My Recent Work</h5>
         <h2>Portfolio</h2>
         <div className="container portfolio__container">
            <PortfolioItem
               image={socialNetwork}
               description={"Simple social network, which I built with React.js."}
               github={"https://github.com/mirroxGL/SocialNetwork-React"}
               demo={"https://mirroxgl.github.io/SocialNetwork-React"}
               additional={"Login and password to sign in: (zomkovolodymyr@gmail.com:networkpass556)"} />
            <PortfolioItem
               image={bicycles}
               description={"Training template with responsive structure."}
               github={"https://github.com/mirroxGL/sellingbicycles"}
               demo={"https://mirroxgl.github.io/sellingbicycles/"} />
            <PortfolioItem
               image={mogo}
               description={"Training template without responsive structure."}
               github={"https://github.com/mirroxGL/mogo"}
               demo={"https://mirroxgl.github.io/mogo/"} />
            <PortfolioItem
               image={freeFilms}
               description={"This is a web project on which you can add/remove/update films to create your own movie collection."}
               github={"https://github.com/mirroxGL/filmsFree2Watch"}
            />



         </div>
      </section>
   )
}

export default Portfolio