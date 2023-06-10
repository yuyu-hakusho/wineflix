import React from 'react';

export default function NavBarItems({ navBarItems}) {
    const navBarItems2 = navBarItems.map(item => (
        <li key={item.id}>
            <a href={item.href}>{item.title}</a>
        </li>
    ))
    
    return (
        <ul className="navigation-links">
            {navBarItems2}
        </ul>
    );
}

{/* //how to make one active? */}