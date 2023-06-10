import React from 'react';
import RexGoliathLogo from './RexGoliathLogo';
import FeatureSubtitle from './FeatureSubtitle';
import FeatureDescription from './FeatureDescription';
import Button from './Button';
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import './HeroCopyDisplayer.css';
import "./App.css";

export default function HeroContent() {
  const heroCopy = {
    title: 'Rex Goliath',
    subtitle: 'His Royal Majesty is back.',
    imageUrl: '/rex-goliath-logo.png', 
    description: `America's most unhinged rooster is out of retirement, and this time? He's mad
    as hell.  Experience the unapologetic flavor burst of Rex Goliath.`
  }
    return (
      <div className="hero-content">
        <RexGoliathLogo title={heroCopy.title}  imageUrl={heroCopy.imageUrl} />
        <FeatureSubtitle subtitle={heroCopy.subtitle} />
        <FeatureDescription description={heroCopy.description} />
        <ul className="controls">
          <li>
            <Button actionLevel="primary-action" actionDescription="Drink" icon={faPlay} />
          </li>
          <li>
            <Button actionLevel="secondary-action" actionDescription="More Info" icon={faInfoCircle}/>
          </li>
        </ul>

        {/* <HeroCopyDisplayer title={heroCopy.title} subtitle={heroCopy.subtitle} imageUrl={heroCopy.imageUrl} description={heroCopy.description} /> */}

        {/* <HeroCopyDisplayer {...heroCopy} /> */}

        {/* 
          Buttons - import FontAwesome icon={faPlay /} 

          icons
        */ }

{/* <ul className="controls">
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
    </ul> */}

      </div>

    );
}