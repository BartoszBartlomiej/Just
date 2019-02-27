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


export default class ApplicationPage extends Component {

    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <Route exact path='/app' component={FirstView}/>
                        <Route path='/app/newTrip' component={NewTrip}/>
                        <Route path='/app/yourTrip' component={YourTrip}/>

                    </div>
                </HashRouter>
            </div>
        )
    }
}