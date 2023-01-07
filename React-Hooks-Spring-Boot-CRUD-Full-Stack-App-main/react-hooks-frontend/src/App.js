import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListKidComponent from './components/ListKidComponent';
import AddKidComponent from './components/AddKidComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className= "container">
          <Switch>
              <Route exact path = "/" component = {ListKidComponent}/>
              <Route path = "/kids" component = {ListKidComponent}/>
              <Route path = "/add-kid" component = {AddKidComponent} />
              <Route path = "/edit-kid/:id" component = {AddKidComponent}/>
            </Switch>
        </div>
        <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
