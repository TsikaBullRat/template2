import React from 'react';
import picture from '../temp_assets/forehead_kiss.jpg';
import { GiAcousticMegaphone, GiOpenedFoodCan, GiSoccerKick, } from "react-icons/gi";

export const TextBox = props => {

    return (
        <div className="row text_box" id="aboutus">
            <div className="col-lg-5 col-sm-12 mt-5">
                <img src={picture} className="w-100" />
            </div>
            <div className="col-lg-7 col-sm-12 text-center" style={{ padding: 50 }}>
                <h1 style={{ color: '#fa8701' }}>{props.headline}</h1>
                <p>{props.text}</p>
                <div class="row justify-content-center mt-5 mb-5">
                    <div class="col-lg-3 col-md-6 col-sm-12 text-center">
                        {/*<i class="bi bi-emoji-smile" style={{ fontSize: 100, color: '#fa8701' }}></i>*/}
                        <GiAcousticMegaphone size='150px' color='#fa8701' />
                        <h4>Vukani</h4>
                        <p>
                            On Friday Big Brothers United hosted a youth awakening workshop in Beaconsfield in order to educate
                            the youth on the danger of drug and alcohol.
                        </p>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 text-center">
                        {/*<i class="bi bi-check2-circle" style={{ fontSize: 100, color: '#fa8701' }}></i>*/}
                        <GiSoccerKick size='150px' color='#fa8701' />
                        <h4>The Gunners</h4>
                        <p>
                            A young boys’ soccer team that is a product of Big Brothers United was accordingly launched;
                            Beaconsfield Gunners FC.
                        </p>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 text-center">
                        {/*<i class=" bi bi-award" style={{ fontSize: 100, color: '#fa8701' }}></i>*/}
                        <GiOpenedFoodCan size='150px' color='#fa8701'/>
                        <h4>Community</h4>
                        <p>
                            The programme for Big Brothers United was concluded on the 30 th with a charity work that was carried
                            out in Green point.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
    /*}*/
}