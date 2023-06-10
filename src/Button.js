import React from 'react';
import IconDisplayer from './IconDisplayer';


export default function Button({ actionLevel, icon, actionDescription }) {
    return (
        <button className={actionLevel}>
            <IconDisplayer icon={icon} />
            <span>{actionDescription}</span>
        </button>
    );
}