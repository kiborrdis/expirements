import React, {PropTypes} from 'react';
import HeaderElement from './HeaderElement/HeaderElement.jsx';
import './Header.css';


class Header extends React.Component {
	
   render() {
      return (
         <div className="header">
            {this.props.children}
         </div>
      );
   }
}



export default Header;