import React, {Component} from 'react';
import AppHeader from '../AppHeader/AppHeader';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export default class FirstView extends Component {


    render() {
        return (
            <div>
                <AppHeader/>
                <div className='content'>
                    <div className='viewSpace'>
                        <Link to='/app/newTrip'>
                            <div className='newTrip'>
                                <div className='newTrip__text'>
                                    <p>NOWA PODRÓŻ</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/app/yourTrip'>
                            <div className='yourTrip'>
                                <div className='yourTrip__text'>
                                    <p>TWOJE PODRÓŻE</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )

    }
}