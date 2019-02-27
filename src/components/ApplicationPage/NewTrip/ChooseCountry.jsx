import React, {Component} from 'react';
import Desktop from './../Desktop/Desktop'

export default class ChooseCountry extends Component {
    render() {
        return (
            <div>
                <Desktop>
                    <div className='chooseCountry'>
                        <div className='yourChoose'>
                            <p>WYBIERZ KRAJ PODRÓŻY</p>
                        </div>
                    </div>
                </Desktop>
            </div>
        )
    }


}