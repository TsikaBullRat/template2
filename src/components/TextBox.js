import React from 'react';

export const TextBox = props => {
    if (props.configure == "impacts"){
        return(
            <div className="row justify-content-center" id="ourimpacts">
                <div className="card text_box_l">
                    <div className="card-body">
                        <h1>{props.headline}</h1>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
    if (props.configure == "about"){
        return(
            <div className="row justify-content-center" id="aboutus">
                <div className="card text_box_r">
                    <div className="card-body">
                        <h1>{props.headline}</h1>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}