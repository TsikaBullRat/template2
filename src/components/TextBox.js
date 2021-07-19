import React from 'react';
import picture from '../assets/image2.jpeg';
import { GiAcousticMegaphone, GiOpenedFoodCan, GiSoccerKick, } from "react-icons/gi";

export const TextBox = props => {

    return (
        <div id="aboutus" className="text_box">
            <div className="row">
                <div className="col-lg-12 col-sm-12 pl-5 pr-5 text-center" style={{ padding: 50 }}>
                    <h1 style={{ color: '#fa8701' }}>About Us</h1>
                    <p>
                        Big Brothers United is a Non Profit Organization that has been established to combat the scourge of alcohol and drug and abuse in Beaconsfield and Green point in particular. The founder of this organization Mr Tebogo C Moroka said that the youth in these two areas find themselves in the crossfire between two forces that wrestle over the unused time that is at the disposal of the youth. He said that there are no facilities that can keep the youth away from the streets and this results in the force of evil winning the wrestle because there are more alcohol facilities and drug sales. He said the youth in these areas need help and they need it urgently. As Big Brothers United, we try to create activities for the youth to keep them out of the streets; that is how we will fight the drug and alcohol abuse that is happening in our area.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="row justify-content-center mt-5 mb-5">
                    <h1 style={{ color: '#fa8701' }} className="col-lg-12 text-center">Monthly Programmes</h1>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                        {/*<i class="bi bi-emoji-smile" style={{ fontSize: 100, color: '#fa8701' }}></i>*/}
                        <GiAcousticMegaphone size='150px' color='#fa8701' />
                        <h4>Vukani</h4>
                        <p>
                            On Friday Big Brothers United hosted a youth awakening workshop in Beaconsfield in order to educate
                            the youth on the danger of drug and alcohol.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                        {/*<i class="bi bi-check2-circle" style={{ fontSize: 100, color: '#fa8701' }}></i>*/}
                        <GiSoccerKick size='150px' color='#fa8701' />
                        <h4>Woza Gunners</h4>
                        <p>
                            A young boys’ soccer team that is a product of Big Brothers United was accordingly launched;
                            Beaconsfield Gunners FC.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                        {/*<i class=" bi bi-award" style={{ fontSize: 100, color: '#fa8701' }}></i>*/}
                        <GiOpenedFoodCan size='150px' color='#fa8701' />
                        <h4>The Community is Our Family</h4> {/*Community = Family*/}
                        <p>
                            The programme for Big Brothers United was concluded on the 30 th with a charity work that was carried
                            out in Green point.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-sm-12 pl-5 pr-5 text-center" style={{ padding: 50 }}>
                    <h1 style={{ color: '#fa8701' }}>The Boetie of the Community</h1>
                    <p>
                        Big Brothers United received complaints relating to maladministration against the Local Municipality, and Big Brothers United intends to approach the government institution concerned to raise these matters with them. Big Brothers United will not only focus on issues of drug and alcohol abuse but they will operate as a Big Brothers, they will listens to the cries of the community and they will take the necessary steps to help those who cannot stand for themselves, and they will speak for the voiceless.
                        He said as Big Brothers United they intend to establish good working relations with organs of state and not work against them. Government needs initiatives such as this one to keep them under a microscope.
                        We are here with the purpose of radically improving the lives of people and with God on our side nothing can stop us.

                    </p>
                </div>
            </div>
        </div>
    )
}