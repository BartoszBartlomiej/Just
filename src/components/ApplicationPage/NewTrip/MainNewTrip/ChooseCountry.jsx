import React, {Component} from 'react';

export default class ChooseCountry extends Component {
    render() {
        return (
            <form onSubmit={this.props.information}>
                <input onChange={this.props.change} placeholder={this.props.place}
                       value={this.props.userCountry}/>
            </form>
        );
    }
}

//
//
// <div className='mainPage'>
//     <form onSubmit={this.countriesInformation}>
//         <input onChange={(e) => this.userChooseCountry(e)} placeholder='KRAJ'
//                value={this.state.userCountry}/>
//     </form>
// </div>
//
