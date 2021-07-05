/*import { IoMdHand, IoIosInformationCircle, IoIosCall } from 'react-icons/io'*/
import reach from '../assets/reaching_hand.png';
import money from '../assets/money_in_heart.png';
import hand from '../assets/heart_in_hand.png';


export const Tablets = () => {
    return (
        <div className="row justify-content-center mt-4">
            <div className="card tablet mt-3 ml-3 mr-3">

                <div className="card-body text-center">
                    <img src={reach} className="card-image-top" style={{ width: 150, height: 150 }} />
                    <h5 className="card-title"  >Card Title</h5>
                    <p className="card-text">Filler text for fullfilment of the site of beauty</p>
                </div>

            </div>
            <div className="card tablet mt-3 ml-3 mr-3">

                <div className="card-body text-center">
                    <img src={money} className="card-image-top" style={{ width: 150, height: 150 }} />
                    <h5 className="card-title"  >Card Title</h5>
                    <p className="card-text">Filler text for fullfilment of the site of beauty</p>
                </div>

            </div>
            <div className="card tablet mt-3 ml-3 mr-3">

                <div className="card-body text-center">
                    <img src={hand} className="card-image-top" style={{ width: 150, height: 150 }} />
                    <h5 className="card-title"  >Card Title</h5>
                    <p className="card-text">Filler text for fullfilment of the site of beauty</p>
                </div>

            </div>
        </div>
    )
}