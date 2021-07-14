import { GiBalaclava, GiBeerStein, GiCharm, GiSoccerBall, GiSoccerField } from "react-icons/gi";
import reach from '../temp_assets/reaching_hand.png';
import money from '../temp_assets/money_in_heart.png';
import hand from '../temp_assets/heart_in_hand.png';


export const Tablets = () => {
    return (
        <div className="row justify-content-center mt-5">
            <div className="card tablet col-lg-3 col-sm-12 ml-3 mr-3">

                <div className="card-body text-center">
                    {/*<img src={reach} className="card-image-top" style={{ width: 150, height: 150 }} />*/}
                    {/*<GiBalaclava size='150px'/>*/}
                    <GiBeerStein size='150px'/>
                    <h5 className="card-title"  >Beat Addiction</h5>
                    <p className="card-text">We wish to free our youth from the tyranny that is drugs and alcohol, through prevntion and counselling</p>
                </div>

            </div>
            <div className="card tablet col-lg-3 col-sm-12 ml-3 mr-3">

                <div className="card-body text-center">
                    {/*<img src={money} className="card-image-top" style={{ width: 150, height: 150 }} />*/}
                    {/*<GiSoccerField size='150px'/> */}
                    <GiSoccerBall size='150px'/>
                    <h5 className="card-title"  >Keep Moving</h5>
                    <p className="card-text">Keep our youth away from the shadows using fun extra muril activities </p>
                </div>

            </div>
            <div className="card tablet col-lg-3 col-sm-12 ml-3 mr-3">

                <div className="card-body text-center">
                    <GiCharm size='150px'/>
                    {/*<img src={hand} className="card-image-top" style={{ width: 150, height: 150 }} />*/}
                    <h5 className="card-title"  >Caring</h5>
                    <p className="card-text">Touching not only the lives of the youth but all members of our community</p>
                </div>

            </div>
        </div>
    )
}