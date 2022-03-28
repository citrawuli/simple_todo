import './App.css';
import React from 'react';
import Todo from './components/todo/todo';

class HeaderNih extends React.Component{
  render(){
    return (
      <div>
        <h2>My Simple To Do</h2>
        <p>-C-</p>
      </div>
    );
  }
}
function App() {
  return (
    <div className='App'>  
      <h1>Hello World!</h1>
      <HeaderNih />
      <Todo />
    </div>
    
  );
}

export default App;
