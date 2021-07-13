/*import React, { Component } from 'react';*/
import joyfull from '../assets/joyfull_children.jpg';
import cancer from '../assets/national-cancer-institute.jpg';
import sitting from '../assets/sitting-children.jpg';
import { Link } from 'react-router-dom';
//import Loader from 'react-spinners/HashLoader';
//import React, { useState, useEffect } from 'react'

export const Banner = () => {
    return (
        <div id="Indicators" className="carousel slide" data-ride="carousel" id="banner">
            <ol className="carousel-indicators">
                <li data-target="#Indicators" data-slide-to="0" className="active"></li>
                <li data-target="#Indicators" data-slide-to="1"></li>
                <li data-target="#Indicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div>
                        <h1>What we do</h1>
                        <p>Big Brothers United is a Non Profit Organization that has been established to combat the scourge of alcohol and drug and abuse in Beaconsfield and Green point in particular.</p>
                        <a href="#aboutus" className="btn">Read more</a>
                    </div>
                    <img src={joyfull} className="d-lg-block w-100" />
                </div>
                <div className="carousel-item">
                    <div>
                        <h1>Awaken Young People</h1>
                        <p>On Friday Big Brothers United hosted a youth awakening workshop in Beaconsfield in order to educate the youth on the danger of drug and alcohol.</p>
                    </div>
                    <img src={cancer} className="d-lg-block w-100" />
                </div>
                <div className="carousel-item">
                    <div>
                        <h1>Whoza Gunners</h1>
                        <p>A young boys’ soccer team that is a product of Big Brothers United was accordingly launched; Beaconsfield Gunners FC</p>
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
