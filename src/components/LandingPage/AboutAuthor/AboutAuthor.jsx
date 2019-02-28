import React, {Component} from 'react';


export default class AboutAuthor extends Component {
    render() {
        return (
            <section className="aboutAuthor">
                <div id='about__author'/>
                <div className='content'>
                    <h4>O AUTORZE</h4>
                    <div className='aboutAuthor__container'>
                        <div className='aboutAuthor__description'>
                            <h3>Bartosz Bartłomiej Lewicki</h3>
                            <p>Od dziecka fascynują mnie podróże. Zaczęło się od wycieczek rowerowych, pieszych z
                                plecakiem prowiantu po okolicach Nysy - mojego rodzinnego miasta. Z biegiem lat zaczęły
                                się podróże po Polsce pociągiem, autobusem, albo z wystawionym kciukiem do góry, liczac
                                na dobroduszność kierowców. Następnie kilka krajów Europy, Islandia, Tajlandia, a w
                                planach Wietnam. Ta pasja popchnęła mnie do stworzenia JustTrip, miejsca w którym każdy
                                będzie mógł zaplanować swoją podróż, stworzyć z niej pamiątkę oraz dzielić się swoimi
                                przeżyciami i doświadczeniami z innymi entuziastami podróży, nie ważne czy dalekich czy
                                bliskich. Każda podróż kształci! </p>
                        </div>
                        <div className='aboutAuthor__img'>
                            <img alt='author' title='bbl'
                                 src='https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/13716062_10207447636124443_4406429907458921452_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=891de90943c82abf8517b6761259cf9f&oe=5D28F822'/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}