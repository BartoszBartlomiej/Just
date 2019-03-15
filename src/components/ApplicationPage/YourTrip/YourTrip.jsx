import React, {Component} from 'react';
import AppHeader from "../AppHeader/AppHeader";
import Navigation from "../Navigation/Navigation"
import Desktop from "../Desktop/Desktop"
import YourTripNavi from './YourTripNavi/YourTripNavi'
import {HashRouter, Route} from "react-router-dom";

function getLocalStorageData(key) {
    if (localStorage.getItem(key) == null) {
        return false;
    } else {
        return JSON.parse(localStorage.getItem(key));
    }
}


export default class YourTrip extends Component {
    render() {
        return (
            <div>
                <AppHeader/>
                <div className="desktopSpace content">
                    <YourTripNavi/>
                    <HashRouter>
                        <Desktop>
                            <Route/>
                            {/*<Route exact path='/app/newTrip/tripPlan' component={TripPlan}/>*/}
                            {/*<Route path='/app/newTrip/backpack' component={Backpack}/>*/}
                            {/*<Route path='/app/newTrip/diary' component={Diary}/>*/}
                        </Desktop>
                    </HashRouter>
                </div>
            </div>
        );
    }
}

