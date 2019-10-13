import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Hotel from './Hotel';
import Mybar from './Mybar';
import Panier from './panier';
import { Row } from 'react-bootstrap';
function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const allHotelsReducer = useSelector(state => state.allHotelsReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Mybar />
      <div className="container">
        <Row>
        <div className="col-8">
          <Hotel />
        </div>
        <div className="col-4">
          <Panier/>
        </div>
        </Row>
        </div>
      </div>
   
  );
}
export default App;
