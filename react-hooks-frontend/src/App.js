import './App.css';
import ListKidComponent from './components/ListKidComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddKidComponent from './components/AddKidComponent';

function App(){
    return (
      <div className="App">
        <Router>
          <HeaderComponent/>
          <div className='container' >
            <Routes>
              <Route exact path='/' element={<ListKidComponent/>}/>
              <Route exact path='/kids' element={<ListKidComponent/>}/>
              <Route path='/add-kid' element={<AddKidComponent/>}></Route>
              <Route path='/edit-kid/:id' element={<AddKidComponent/>}></Route>
            </Routes>
          </div>
          <FooterComponent/>
        </Router>
      </div>
    );
}


export default App;
