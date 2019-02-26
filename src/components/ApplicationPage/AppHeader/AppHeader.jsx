import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class AppHeader extends Component {
    render() {
        return (
            <header>
                <div className='content'>
                    <div className='app__space'>
                        <nav>
                            <h1>JustTrip</h1>
                            <ul>
                                <li>
                                    <a><FontAwesomeIcon icon='list-ul'/> PLAN PODRÓŻY</a>
                                </li>
                                <li>
                                    <a><FontAwesomeIcon icon='hiking'/> PLECAK</a>
                                </li>
                                <li>
                                    <a><FontAwesomeIcon icon='book'/> DZIENNIK POKŁADOWY</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}


{/*<header>*/
}
{/*<div className='content'>*/
}
{/*<div className='app__space'>*/
}
{/*<h1>JustTrip</h1>*/
}
{/*</div>*/
}
{/*</div>*/
}
{/*</header>*/
}