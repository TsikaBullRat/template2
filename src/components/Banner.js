import { useReducer } from 'react'
import image1 from '../assets/image1.jpeg';
import awaken from '../assets/image3.jpeg';
import gunners from '../assets/image4.jpeg';

export const Banner = () => {
    return (
        <div className="jumbotron" id="banner">

            <h1 className="display-4 pt-5 font-weight-bold">What we do</h1>
            <h3 className="lead">
                Big Brothers United is a Non Profit Organization that has been established to combat the scourge of alcohol and drug and abuse in Beaconsfield and Green point in particular.
            </h3>
            <a href="#aboutus" className="btn">Read more</a>
        </div>
    )
}

/*let play = true;
let index = 1;
Slide(index);

const playSlides = (state, action) =>{
    switch(action.type){
        case 'next':
            Slide(state + 1);
        case 'prev':
            Slide(state - 1);
        default:
            if(play=true){
                var n = 0;
                if(n=20){
                    Slide(state + 1);
                }
                n++
            }
    }
}

const Slide = (i) =>{
    let slides = document.getElementsByClassName("items");
    let marker = document.getElementsByClassName("mark");

    if(i > slides.length){index = 1}
    if(i < 1){index = slides.length}

    for (let x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    for (let x = 0; x < marker.length; x++) {
        marker[x].style.opacity = 0.5;
    }

    slides[i - 1].style.display = "none";
    marker[i - 1].style.opacity = 1;
}

export const Banner = () => {

    const[state, dispatch] = useReducer(playSlides, index)
    return ()
}*/
