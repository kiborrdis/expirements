import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import './HeaderElement.css';


class HeaderElement extends React.Component {
   render() {
      return (
      	<Link className="header-element" to={this.props.destination}>
		    <div >
		        {this.props.name}
		    </div>
         </Link>
      );
   }
}

HeaderElement.propTypes = {
   name: PropTypes.string.isRequired,
   destination: PropTypes.string.isRequired,
}

export default HeaderElement;