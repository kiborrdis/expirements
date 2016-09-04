import React, {PropTypes} from 'react';
import { Provider } from 'react-redux'
import PlanetList from './components/PlanetList/PlanetList.jsx';
import { Router, Route, Link, browserHistory } from 'react-router';
import Main from 'containers/Main.jsx';
import About from 'containers/About.jsx';
import './App.css';
class App extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <Route path="about" component={About}/>
          <Route path="planets" component={About}/>
          <Route path="*" component={About}/>
        </Route>
      </Router> 
    );
  }
}

export default App;