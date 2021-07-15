import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/image5.jpeg';
import image6 from '../assets/image6.jpeg';

export const Gallery = () =>{
    return(
      <div id="gallery" className="container">
        <input type="radio" name="Photos" id="check1"/>
        <input type="radio" name="Photos" id="check2"/>
        <input type="radio" name="Photos" id="check3"/>
        <input type="radio" name="Photos" id="check4"/>

        <div className="row text-center">
          <div className="top-content col-sm-12 col-lg-12">
            <label htmlFor="check1">All</label>
            <label htmlFor="check2">Workshops</label>
            <label htmlFor="check3">Activities</label>
            <label htmlFor="check4">Community</label>
          </div>
          <div className="photo-gallery">
            <div className="pic workshop col-sm-12">
              <img src={image1}/>
            </div>
            <div className="pic workshop col-sm-12">
              <img src={image2}/>
            </div>
            <div className="pic workshop col-sm-12">
              <img src={image3}/>
            </div>
            <div className="pic activities col-sm-12">
              <img src={image4}/>
            </div>
            <div className="pic community col-sm-12">
              <img src={image5}/>
            </div>
            <div className="pic community col-sm-12">
              <img src={image6}/>
            </div>
          </div>
        </div>
      </div>
    )
}