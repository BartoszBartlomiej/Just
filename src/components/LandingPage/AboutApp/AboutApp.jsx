import React, {Component} from 'react';

import Description from './Description';




export default class AboutApp extends Component {
    render() {
        return (
            <section className='aboutApp'>
                <div id="about__app"/>
                <div className='content'>
                    <div className='aboutApp__description'>
                        <h3>O APLIKACJI</h3>
                        <div className='aboutApp__description__options'>

                            <Description icon='globe-americas' description='INFORMACJE O KRAJU KTÓRY ODWIEDZASZ do którego jedziemy Lorem
                                    ipsum dolor sit amet, consectetur
                                    adipisicing elit. Commodi eligendi in laudantium unde? Earum enim esse facilis,
                                    ipsam officiis quia?'/>

                            <Description icon='hiking' description='ZAPLANUJ PAKOWANIE PLACAKA Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit.
                                    Commodi eligendi in laudantium unde? Earum enim esse facilis, ipsam officiis
                                    quia?'/>

                            <Description icon='plane' description='ZAPLANUJ PODRÓŻ Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                    Commodi eligendi in laudantium unde? Earum enim esse facilis, ipsam officiis
                                    quia?'/>

                            <Description icon='share' description='DZIEL SIĘ Z INNYMI Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                    Commodi eligendi in laudantium unde? Earum enim esse facilis, ipsam officiis
                                    quia?'/>

                        </div>
                    </div>
                    <div className='aboutApp__images'>

                    </div>

                </div>
            </section>
        )
    }
}

