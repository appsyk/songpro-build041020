import React from 'react';
import './App.css';
import ListItems from './components/ListItems';
import AddItem from './components/AddItem';
import NavBar from './components/NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="">
        <NavBar />
        <div className='container'>
          <AddItem />
          <hr />
          <ListItems />
        </div>
      </div>
    );
  }
}

export default App;
