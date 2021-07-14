import React, {Component} from 'react';

class Clone extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            headline: "About",
            text: [" Filler Filler Filler Filler Filler Filler Filler Filler Filler","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum ut tristique et egestas quis ipsum. Diam quam nulla porttitor massa id neque. Varius duis at consectetur lorem donec massa. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Urna nec tincidunt praesent semper feugiat nibh. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Purus sit amet luctus venenatis lectus magna fringilla urna. Hendrerit gravida rutrum quisque non tellus. Morbi leo urna molestie at elementum. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Tincidunt dui ut ornare lectus sit amet est placerat in."]
        };
        this.switch = false;
        this.display = this.state.text[0];
    }

    Switch() {
        if(this.switch == false){
            this.display = this.state.text[1] ;
        }
        if(this.switch == true){
            this.display = this.state.text[0];
        }
        this.switch = !this.switch;
        return this.state.display;
    }

    render() {
        return(
            <div className="row justify-content-center" id="ourimapcts">
                <div className="card text_box_w">
                    <div className="card-body">
                        <h1>{this.state.headline}</h1>
                        <p>{this.display}</p>
                        <button className="btn" onClick={() => this.Switch()}>My button</button>
                    </div>
                </div>
            </div>
        )
        }
}

export default Clone