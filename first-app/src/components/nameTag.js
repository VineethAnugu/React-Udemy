import React, { Fragment } from "react";

function NameTag(props) {
  if (props.special === true) {
    if(props.isVIP === true){
      return (
        <div className="SpecialName">
          <h3>{props.firstName}</h3>
          <h3>{props.lastName}</h3>
          <div style={{color: "red"}}><h5>VIP</h5></div>
          
        </div>
        );
    }
    else{
      return (
        <div className="SpecialName">
          <h3>{props.firstName}</h3>
          <h3>{props.lastName}</h3>
        </div>
        );
    }
    
    
  }
  if(props.isVIP === true){
    return (
      <div className="Names">
        <h3>{props.firstName}</h3>
        <h3>{props.lastName}</h3>
        <div style={{color: "red"}}><h5>VIP</h5></div>
        
      </div>
      );
  }
  else{
    return (
      <div className="Names">
        <h3>{props.firstName}</h3>
        <h3>{props.lastName}</h3>
      </div>
      );
  }
}

export default NameTag;
