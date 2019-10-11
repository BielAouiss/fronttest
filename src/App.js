import React from 'react';
 import './App.css';
 import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from './actions';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Hotel from './Hotel';
import Mybar from './Mybar';
function App() {
  const counter = useSelector(state => state.counter);
  const isLogged=useSelector(state => state.isLogged);
  const allHotels=useSelector(state => state.allHotelsReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Mybar/>
      <Hotel/>
      <div>
        {allHotels.map((hotel)=>
          <h1>{hotel.name}</h1>)}
      </div>
    </div>
  );
}
export default App;
