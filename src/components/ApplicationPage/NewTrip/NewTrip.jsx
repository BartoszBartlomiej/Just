import React, {Component} from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Navigation from "../../ApplicationPage/Navigation/Navigation";
import ChooseCountry from './ChooseCountry';
import Desktop from '../Desktop/Desktop';

export default class NewTrip extends Component {

    render() {

        return (
            <div>
            <AppHeader />
            <div className="desktopSpace content">
            <Navigation />
            {/*<Desktop />*/}
            <ChooseCountry />
            </div>
            </div>
        )
    }
};