import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import PlanetList from 'components/PlanetList/PlanetList.jsx';
import Preloader from 'ui/Preloader/Preloader.jsx';
import Header from 'components/Header/Header.jsx';
import HeaderElement from 'components/Header/HeaderElement/HeaderElement.jsx';
import {createPlanet, fetchPlanets} from "data/actions/actions.js";

const mapStateToProps = (state) => {
   return {
      planets: state.planets
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchList: () => {
      dispatch(fetchPlanets());
    }
  }
}

class _Main extends React.Component {

   componentWillMount() {
      this.props.fetchList();
   }

   render() {	
      return (
          <div>
          <Header>
            <HeaderElement name="Main" destination="/" />
            <HeaderElement name="About" destination="/about" />
          </Header>
          {this.props.planets.isFetching ? <Preloader/> : <PlanetList planets={this.props.planets.list}/>}
          </div>
      );
   }
}

const Main = connect(
   mapStateToProps,
   mapDispatchToProps
)(_Main);

export default Main;