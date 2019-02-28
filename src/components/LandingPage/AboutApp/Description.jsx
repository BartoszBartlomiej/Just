import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default class Description extends Component {
    render() {
        return (
            <div className='aboutApp__description__options__container'>
                <FontAwesomeIcon className='fontAwesome' icon={this.props.icon}/>
                <p>{this.props.description}</p>
                {/*<div className='aboutApp__description__options__container__img'>*/}
                    {/*TU BĘDZIE SCREEN*/}
                {/*</div>*/}
            </div>
        )
    }
}