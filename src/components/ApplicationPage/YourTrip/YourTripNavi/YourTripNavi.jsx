import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


function getLocalStorageData(key) {
    if (localStorage.getItem(key) == null) {
        return false;
    } else {
        return JSON.parse(localStorage.getItem(key));
    }
}

export default class YourTripNavi extends Component {
    render() {
        const linkStyle = {
            color: '#c43235'
        };

        const savedTrip = getLocalStorageData('newTripObj');

        return (
            <div className='appNavigation'>
                <nav>
                    <ul>
                        <li>
                            YOUR TRIPS:
                        </li>
                        <li>
                            <NavLink to='/app/newTrip/tripPlan' activeStyle={linkStyle}><FontAwesomeIcon icon='list-ul'/> PLAN
                                PODRÓŻY</NavLink>
                        </li>
                        <li>
                            <NavLink to='/app/newTrip/backpack' activeStyle={linkStyle}><FontAwesomeIcon icon='hiking'/> PLECAK</NavLink>
                        </li>
                        <li>
                            <NavLink to='/app/newTrip/diary' activeStyle={linkStyle}><FontAwesomeIcon icon='book'/> DZIENNIK
                                POKŁADOWY</NavLink>
                        </li>
                    </ul>
                    <ul className='back'>
                        <li>
                            <NavLink exact to='/app/' activeStyle={linkStyle}><FontAwesomeIcon icon='arrow-left'/> POWRÓT</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}