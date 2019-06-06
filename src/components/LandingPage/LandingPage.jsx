import React, {Component} from 'react';


import Header from './Header/Header.jsx';
import PictureCarousel from './PictureCarousel/PictureCarousel';
import AboutApp from './AboutApp/AboutApp';
import AboutAuthor from './AboutAuthor/AboutAuthor';
import Footer from './Footer/Footer';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <PictureCarousel />
                <AboutApp />
                <AboutAuthor />
                {/*<Contact />*/}
                <Footer />
            </div>
        );
    }
}