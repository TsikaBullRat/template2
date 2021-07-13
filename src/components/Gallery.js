import school_kids from '../assets/school_kids.jpg';
import studying_kids from '../assets/studying_kids.jpg';
import nature from '../assets/nature.jpg';
import marriage from '../assets/marriage.jpg';
import peace from '../assets/peace.jpg';

export const Gallery = () =>{
    return(
      <div id="gallery">
        <input type="radio" name="Photos" id="check1"/>
        <input type="radio" name="Photos" id="check2"/>
        <input type="radio" name="Photos" id="check3"/>
        <input type="radio" name="Photos" id="check4"/>

        <div className="row text-center">
          <div className="top-content col-sm-12">
            <label for="check1">All Photos</label>
            <label for="check2">Nature</label>
            <label for="check3">Love</label>
            <label for="check4">Children</label>
          </div>
          <div className="photo-gallery">
            <div className="pic children col-sm-12">
              <img src={school_kids}/>
            </div>
            <div className="pic children col-sm-12">
              <img src={studying_kids}/>
            </div>
            <div className="pic nature col-sm-12">
              <img src={nature}/>
            </div>
            <div className="pic love col-sm-12">
              <img src={marriage}/>
            </div>
            <div className="pic love col-sm-12">
              <img src={peace}/>
            </div>
          </div>
        </div>
      </div>
    )
}