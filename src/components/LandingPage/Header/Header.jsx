import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <header>
                <div className='content'>
                    <nav>
                        <h1>JustTrip</h1>
                        <ul>
                            <li className='nav__links'>
                                <a href='/JustTrip/#about__app'>O APLIKACJI</a>
                            </li>
                            <li className='nav__links'>
                                <a href='/JustTrip/#about__author'>O AUTORZE</a>
                            </li>
                            {/*<li>*/}
                                {/*<a href='#contact'>KONTAKT</a>*/}
                            {/*</li>*/}
                            <li className='nav__links'>
                                <Link to='/app'>APLIKACJA</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}