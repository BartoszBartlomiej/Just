import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

/*      ***************     LANDING PAGE        ***************     */
import LandingPage from './components/LandingPage/LandingPage';
// import Header from './components/LandingPage/Header/Header.jsx';
// import PictureCarousel from './components/LandingPage/PictureCarousel/PictureCarousel';
// import AboutApp from './components/LandingPage/AboutApp/AboutApp';
// import AboutAuthor from './components/LandingPage/AboutAuthor/AboutAuthor';
// import Footer from './components/LandingPage/Footer/Footer';
// import Contact from './components/LandingPage/Contact/Contact';


/*      ***************     APPLICATION PAGE        ***************     */

import ApplicationPage from './components/ApplicationPage/ApplicationPage';
// import AppHeader from './components/ApplicationPage/AppHeader/AppHeader';


import './App.scss';

import {library} from '@fortawesome/fontawesome-svg-core'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGlobeAmericas, faIgloo, faListUl, faPlane, faShare, faUser} from '@fortawesome/free-solid-svg-icons'
import {faCompass} from "@fortawesome/free-solid-svg-icons/faCompass";
import {faHiking} from "@fortawesome/free-solid-svg-icons/faHiking";
import {faBook} from "@fortawesome/free-solid-svg-icons/faBook";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

library.add(faIgloo);
library.add(faCompass);
library.add(faGlobeAmericas);
library.add(faHiking);
library.add(faPlane);
library.add(faShare);
library.add(faBook);
library.add(faListUl);
library.add(faUser);
library.add(faCheck);
library.add(faTimes);


class App extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <Route exact path='/' component={LandingPage}/>
                        <Route path='/about__app' component={LandingPage}/>
                        <Route path='/about__author' component={LandingPage}/>
                        <Route path='/app' component={ApplicationPage}/>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
});

export default App;
