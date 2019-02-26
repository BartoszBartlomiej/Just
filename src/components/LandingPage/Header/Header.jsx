import React, {Component} from 'react';


export default class Header extends Component {
    render() {
        return (
            <header>
                <div className='content'>
                    <nav>
                        <h1>JustTrip</h1>
                        <ul>
                            <li>
                                <a href='#about__app'>O APLIKACJI</a>
                            </li>
                            <li>
                                <a href='#about__author'>O AUTORZE</a>
                            </li>
                            <li>
                                <a href='#contact'>KONTAKT</a>
                            </li>
                            {/*<li>*/}
                                {/*<a href='/app'>APLIKACJA</a>*/}
                            {/*</li>*/}
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}