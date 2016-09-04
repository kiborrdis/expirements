import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Planet from './Planet/Planet.jsx';
import './PlanetList.css';

class PlanetList extends React.Component {
   render() {	
      return (
         <div className='planet-list '>
            {this.props.planets.map((planet, index) => {
              return <Planet planet={planet.name} key={index}/>
            })}
         </div>
      );
   }
}

PlanetList.propTypes = {
   planets: PropTypes.array.isRequired,
}

export default PlanetList;