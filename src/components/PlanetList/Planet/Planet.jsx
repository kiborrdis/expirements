import React, {PropTypes} from 'react';
import './Planet.css';


class Planet extends React.Component {
	
   render() {
      return (
         <div className="planet"
               onClick={this.props.onClick}>
            <span>{this.props.planet}</span>
         </div>
      );
   }
}

Planet.propTypes = {
   planet: PropTypes.string.isRequired,
   onClick: PropTypes.func
}

export default Planet;