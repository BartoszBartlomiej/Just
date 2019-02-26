import React, {Component} from 'react';
import AppHeader from './AppHeader/AppHeader';
import Navigation from './Navigation/Navigation';


export default class ApplicationPage extends Component {

    render() {
        return (
            <div>
                < AppHeader />
                <Navigation />
            </div>
        )
    }
}