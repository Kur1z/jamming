import React from "react";
import './Track.css'

class Track extends React.Component{
    renderAction() {
        if (this.props.isRemoval){
            <button className="Track-action">-</button>
        }else {
            <button className="Track-action">+</button>
        }
  
    }
    render(){
        return(
            <div className="Track">
                <div className="Track-information">
                     <h3>Track</h3> 
                    <p>Artist Name | Album Name</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}

export default Track;