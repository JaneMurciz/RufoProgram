import React from 'react';
import './App.css';
import Button from './components/consts/Button/Button';
import Routes from './routes/Routes'

export default class App extends React.Component {

  constructor(props){
    super(props);

  }

  render(){
    return (

      <div></div>
      <Routes />
      //<Button
      //  class="button default"
      //  content="Siguiente" 
      ///>

    );
  }
}