import React, {Component} from 'react';
import AppHeader from './AppHeader/AppHeader';
import Navigation from './Navigation/Navigation';
import NewTrip from './NewTrip/NewTrip'
import FirstView from './FirstView/FirstView';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


export default class ApplicationPage extends Component {

    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <Route exact path='/app' component={FirstView}/>
                        <Route path='/app/newTrip' component={NewTrip}/>
                        {/*<AppHeader />*/}
                        {/*<AppSpace />*/}
                        {/*<Navigation />*/}
                    </div>
                </HashRouter>
            </div>
        )
    }
}