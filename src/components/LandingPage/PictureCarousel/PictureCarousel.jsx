import React, {Component} from 'react';


const backgroundSlider = [
    {
        url: "url('https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
        textHeader: "Lorem ipsum dolor sit amet",
        text: "consectetur adipisicing elit, aliquid amet delectus inventore ipsam minus officia perspiciatis quisquam ratione velit veritatis!."
    },
    {
        url: 'url("https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
        textHeader: "Ipsum dolor sit amet lorem",
        text: "facere fuga maiores numquam obcaecati perferendis placeat quas quos repellendus. Autem, consequatur dolore."
    },
    {
        url: 'url("https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
        textHeader: "Dolor sit ipsum amet lorem",
        text: "autem, consequatur dolore, facere fuga maiores numquam obcaecati perferendis placeat quas quos repellendus."
    },

];


export default class PictureCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elemIndex: 0,
            background: backgroundSlider,
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(() => {
            if (this.state.elemIndex === this.state.background.length - 1) {
                this.setState({
                    elemIndex: 0
                })
            } else {
                this.setState({
                    elemIndex: this.state.elemIndex + 1,
                });
            }
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
        const slider = this.state.background[this.state.elemIndex];
        const myStyle = {
            backgroundImage: slider.url,
        };
        return (
            <section style={myStyle} className='carousel'>
                <div className='content'>
                    <div className='carousel__opacity__text'>
                        <h2>{slider.textHeader}</h2>
                        <p>{slider.text}</p>
                    </div>
                </div>
            </section>
        )
    }
}