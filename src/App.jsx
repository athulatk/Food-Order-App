import React from 'react'
import './App.css';
import Main from './containers/Main/Main';
import OrderDetails from './containers/OrderDetails/OrderDetails';

function App() {
  return (
    <div className='App'>
      <Main/>
      <OrderDetails/>
    </div>
  );
}

export default App;
