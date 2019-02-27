import React, {Component} from 'react';
import AppHeader from "../AppHeader/AppHeader";
import Navigation from "../Navigation/Navigation"
import Desktop from "../Desktop/Desktop"
import {HashRouter, Route} from "react-router-dom";


export default class YourTrip extends Component {
    render() {
        return (
            <div>
                <AppHeader/>
                <div className="desktopSpace content">
                    <Navigation/>
                    <HashRouter>
                        <Desktop>
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

