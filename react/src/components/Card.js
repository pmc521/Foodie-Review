import React, { Component } from 'react';
import Square from './Square'
import Label from './Label'

class Card extends Component{

  render() {
    let cardStyle = {height: 200, width: 150, padding: 0, backgroundColor: "#FFF", WebkitFilter: "drop-shadow(0px 0px 5px #666)", filter: "drop-shadow(0px 0px 5px #666)"};
    return(
      <div style={cardStyle}>
        <Square />
        <Label colour="Display me" />
      </div>
    )
  }
};

export default Card;