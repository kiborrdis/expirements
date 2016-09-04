import React, {PropTypes} from 'react';
import './Preloader.css';

class Preloader extends React.Component {
	
   render() {
      return (
         <div className="preloader">
            <div className="preloader-row2"></div>
            <div className="preloader-row"></div>
            <div className="preloader-row"></div>
         </div>
      );
   }
}

export default Preloader;