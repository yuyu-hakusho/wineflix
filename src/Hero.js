import React from 'react';
import HeroImage from './HeroImage';
import Navbar from './Navbar'; 
import HeroContent from './HeroContent';
import './Hero.css';

/*some sort of header*/

export default function Hero() {
  return (
        <div className="hero">
            <HeroImage/>
            <Navbar />
            <HeroContent />
        </div>

        //
    );
}

/*
<header className="hero">
       <img className="hero-image" src="/wine-hero.webp" alt="Wine bottles" />
       <nav className="navigation">
         <section className="primary-navigation">
           <h1>WineFlix</h1>
           <ul className="navigation-links">
             <li className="active">
               <a href="https:developer.mozilla.org">Home</a>
             </li>
             <li>
               <a href="https:developer.mozilla.org">Whites</a>
             </li>
             <li>
               <a href="https:developer.mozilla.org">Reds</a>
             </li>
             <li>
               <a href="https:developer.mozilla.org">Blends</a>
             </li>
           </ul>
         </section>
         <section className="secondary-navigation">
           <span className="user-avatar">
             <a href="https:developer.mozilla.org">S</a>
           </span>
         </section>
       </nav>
       <div className="hero-content">
         <h2>
           <img alt="Rex Goliath" src="/rex-goliath-logo.png" />
         </h2>
         <h3>His Royal Majesty is back.</h3>
         <p>
           America's most unhinged rooster is out of retirement, and this time? He's mad as hell.  Experience the unapologetic flavor burst of Rex Goliath.
         </p>
         <ul className="controls">
           <li>
             <button className="primary-action">
             <FontAwesomeIcon icon={faPlay} />
             <span>Drink</span>
             </button>
           </li>
           <li>
             <button className="secondary-action">
               <FontAwesomeIcon icon={faInfoCircle} />
               <span>More Info</span>
             </button>
           </li>
         </ul>
       </div>
     </header>
     */