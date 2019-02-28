import React, {Component} from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Navigation from "../../ApplicationPage/Navigation/Navigation";
import ChooseCountry from './ChooseCountry/ChooseCountry';
import Desktop from '../Desktop/Desktop';
import TripPlan from './TripPlan/TripPlan'
import Backpack from './Backpack/Backpack';
import Diary from './Diary/Diary';
import MainNewTrip from './../MainNewTrip/MainNewTrip';

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


export default class NewTrip extends Component {

    render() {
        return (
            <div>
                <AppHeader/>
                <div className="desktopSpace content">
                    <Navigation/>
                    <HashRouter>
                        <Desktop>
                            <Route exact path='/app/newTrip' component={MainNewTrip}/>
                            <Route exact path='/app/newTrip/tripPlan' component={TripPlan}/>
                            <Route path='/app/newTrip/backpack' component={Backpack}/>
                            <Route path='/app/newTrip/diary' component={Diary}/>
                        </Desktop>
                    </HashRouter>
                </div>
            </div>
        )
    }
};