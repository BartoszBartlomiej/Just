import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export default class AppHeader extends Component {
    render() {
        return (
            <header className='appHeader'>
                <div className='content'>
                    <div className='header'>
                        <Link to='/'><h1>JustTrip</h1></Link>
                        <p>Bartosz <FontAwesomeIcon icon='user'/></p>
                    </div>
                </div>
            </header>

        )

    }
}
