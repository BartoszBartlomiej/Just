import React, {Component} from 'react';

import NewTrip from './NewTrip/NewTrip'
import FirstView from './FirstView/FirstView';
import YourTrip from './YourTrip/YourTrip';

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import NotFound from "../NotFound/NotFound";


export default class ApplicationPage extends Component {

    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <Switch>
                            <Route exact path='/app' component={FirstView}/>
                            <Route path='/app/newTrip' component={NewTrip}/>
                            <Route path='/app/yourTrip' component={YourTrip}/>
                            <Route path='/*/' component={NotFound}/>
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        )
    }
}