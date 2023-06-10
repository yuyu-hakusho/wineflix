import React from 'react';
import './WineCategory.css';

// should I break this down to even more components? 

export default function WineCategory({ wines }) {
    // isFinished
    const finishedWines = wines.filter(wine => !!wine.isFinished).map(wine => (
        <li key={wine.id}>
            <div className="wine">
                <img src={wine.imageUrl} alt={wine.label} />
            </div>
        </li>
    ))
    // manipulate isFinished to show new if it has that property
    
    
    // Progress
    const stillDrinkingWines = wines.filter(wine => !!wine.progress).map(wine => (
        <li key={wine.id}>
            <div className="wine">
                <img src={wine.imageUrl} alt={wine.label} />
                <div className="amount-consumed">
                    <progress min="0" max="100" value={wine.progress}></progress> 
                    {/* should I have the min,max stuff here?    */}
                </div>
            </div>
        </li>
    ))

    
    return (
        <main>
            <div className='category'>
                <h2>Drink Again</h2>
                <ul>{finishedWines}</ul>
            </div>
            <div className='category'>
                <h2>Keep Drinking</h2>
                <ul>{stillDrinkingWines}</ul>
            </div>
        </main>
        );
}

