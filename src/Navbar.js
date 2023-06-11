import React from 'react';
import Logo from './Logo';
import NavAvatar from './NavAvatar';
import NavBarItems from './NavBarItems';
import './Navbar.css';


export default function Navbar() {
    const navBarItems = [
        {
            id: 1,
            title: 'Home',
            href: 'https://developer.mozilla.org',
            active: true
        },
        {
            id: 2,
            title: 'Whites',
            href: 'https://developer.mozilla.org'
        },
        {
            id: 3,
            title: 'Reds',
            href: 'https://developer.mozilla.org'
        },
        {
            id: 4,
            title: 'Blends',
            href: 'https://developer.mozilla.org'
        }
    ]

    return (  
        <nav className="navigation">
            <section className="primary-navigation">
                <Logo/>
                <NavBarItems navBarItems={ navBarItems }/>
            </section>
            <NavAvatar/>
        </nav>
    );

}
