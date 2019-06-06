import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SaveTrip from './../NewTrip/SaveTrip/SaveTrip';

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


export default class Navigation extends Component {
    render() {
        const linkStyle = {
            color: '#c43235'
        };

        return (
            <div className='appNavigation'>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to='/app/newTrip' activeStyle={linkStyle}><FontAwesomeIcon icon='globe-americas'/> STRONA GŁÓWNA</NavLink>
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
                            <SaveTrip/>
                        </li>
                        <li>
                            <NavLink exact to='/app/' activeStyle={linkStyle}><FontAwesomeIcon icon='arrow-left'/> POWRÓT</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}