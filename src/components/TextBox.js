import React from 'react';
import picture from '../assets/forehead_kiss.jpg';

export const TextBox = props => {
    /*if (props.configure == "impacts"){
        return(
            <div className="row justify-content-center" id="ourimapcts">
                <div className="card text_box_w">
                    <div className="card-body">
                        <h1>{props.headline}</h1>
                        <p>{props.text}</p>
                        <button className="btn" onClick="Press(props)">My button</button>
                    </div>
                </div>
            </div>
        )
    }
    if (props.configure == "about"){*/
    return (
        <div className="row text_box" id="aboutus">
            <div className="col-lg-5 col-sm-12 mt-5">
                <img src={picture} className="w-100" />
            </div>
            <div className="col-lg-7 col-sm-12 text-center" style={{ padding: 50 }}>
                <h1 style={{ color: '#fcba07' }}>{props.headline}</h1>
                <p>{props.text}</p>
                <div class="row justify-content-center mt-5 mb-5">
                    <div class="col-lg-3 col-md-6 col-sm-12 text-center">
                        <i class="bi bi-emoji-smile" style={{ fontSize: 100, color: '#fcba07' }}></i>
                        <h4>300 Souls</h4>
                        <h4></h4>
                        <h4>Impacted</h4>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 text-center">
                        <i class="bi bi-check2-circle" style={{ fontSize: 100, color: '#fcba07' }}></i>
                        <h4>300 Projects</h4>
                        <h4></h4>
                        <h4>Completed</h4>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 text-center">
                        <i class=" bi bi-award" style={{ fontSize: 100, color: '#fcba07' }}></i>
                        <h4>300 Goals</h4>
                        <h4></h4>
                        <h4>Achieved</h4>
                    </div>
                </div>
            </div>

        </div>
    )
    /*}*/
}