/*import React, { Component } from 'react';*/
import joyfull from '../assets/joyfull_children.jpg';
import cancer from '../assets/national-cancer-institute.jpg';
import sitting from '../assets/sitting-children.jpg';
import { Link } from 'react-router-dom';

export const Banner = () => {
    
    return (
        <div id="Indicators" className="row carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#Indicators" data-slide-to="0" className="active"></li>
                <li data-target="#Indicators" data-slide-to="1"></li>
                <li data-target="#Indicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div>
                        <h1>Hell World!!!!!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Link exact to="/" className="btn">Press Me</Link>
                        <Link exact to="/" className="btn">Press Me</Link>
                    </div>
                    <img src={joyfull} className="d-lg-block w-100" />
                </div>
                <div className="carousel-item">
                    <div>
                        <h1>Hell World!!!!!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Link exact to="/" className="btn">Press Me</Link>
                        <Link exact to="/" className="btn">Press Me</Link>
                    </div>
                    <img src={cancer} className="d-lg-block w-100" />
                </div>
                <div className="carousel-item">
                    <div>
                        <h1>Hell World!!!!!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Link exact to="/" className="btn">Press Me</Link>
                        <Link exact to="/" className="btn">Press Me</Link>
                    </div>
                    <img src={sitting} className="d-lg-block w-100" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#Indicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#Indicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

/*class Banner extends Component {
    Index= 1;
    showSlides(Index);

    slideControl(i){
        this.showSlides(this.Index += i);
    }

    slideCurrent(i){
        this.showSlides(this.Index = i);
    }

    showSlides(i){
        var x;
        var slide = document.getElementsByClassName("")
    }
    render() {
        return (
            <div id="Indicators" className="row carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#Indicators" data-slide-to="0" className="active"></li>
                    <li data-target="#Indicators" data-slide-to="1"></li>
                    <li data-target="#Indicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div>
                            <h1>Hell World!!!!!</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Link exact to="/" className="btn">Press Me</Link>
                            <Link exact to="/" className="btn">Press Me</Link>
                        </div>
                        <img src={joyfull} className="d-lg-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <div>
                            <h1>Hell World!!!!!</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Link exact to="/" className="btn">Press Me</Link>
                            <Link exact to="/" className="btn">Press Me</Link>
                        </div>
                        <img src={cancer} className="d-lg-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <div>
                            <h1>Hell World!!!!!</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Link exact to="/" className="btn">Press Me</Link>
                            <Link exact to="/" className="btn">Press Me</Link>
                        </div>
                        <img src={sitting} className="d-lg-block w-100" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#Indicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#Indicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Banner;*/