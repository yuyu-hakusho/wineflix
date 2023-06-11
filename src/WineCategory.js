import React from 'react';
import DrinkStatusHeader from './DrinkStatusHeader';
import NewTag from './NewTag';
import ProgressBar from './ProgressBar';
import './WineCategory.css';

//do I need to make this into more components? like new & wine together

export default function WineCategory({ wines }) {
    // isFinished, checks to see if it has the attribute...(wine => wine.isFinished), why? this way means that this needs to be true to be filtered. if wine has the isFinished attribute and it's true, then filter
    const finishedWines = wines.filter(wine => !!wine.isFinished) //this is saying wine.isFinished is made into a boolean via !!, and used to filter. so if wine.isFinished = undefined >> false, if wine.isFinished = false >> false, if wine.isFinished = true >> true. then filter based on true 

    // Progress
    const stillDrinkingWines = wines.filter(wine => !!wine.progress)

    //filtering can be outside of the return. and complex array manipulation should be outside of the return. react does not have a filter api.   

    return (
        <main>
            <div className='category'>
                <DrinkStatusHeader statusHeader="Drink Again" />
                <ul> {/* Putting map in the return in more semantically React */}
                    {finishedWines.map(wine => (
                        <li key={wine.id}>
                            <div className="wine">
                                <img src={wine.imageUrl} alt={wine.label} />
                                {wine.isNew ? <NewTag /> : null}
                            </div>
                        </li>
                    ))
                    }
                </ul>
            </div>
            <div className='category'>
                <DrinkStatusHeader statusHeader="Keep Drinking" />
                <ul>
                    {stillDrinkingWines.map(wine => (
                        <li key={wine.id}>
                            <div className="wine">
                                <img src={wine.imageUrl} alt={wine.label} />
                                {wine.progress ? <ProgressBar progress={wine.progress} /> : null}
                            </div>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </main>
        );
}

//

