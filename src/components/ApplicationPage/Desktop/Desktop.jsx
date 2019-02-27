import React, {Component} from 'react'

export default class Desktop extends Component {

    render() {
        console.log("reeender");
        return (

            <div className='desktop'>
                {this.props.children}
            </div>
        )
    }
}