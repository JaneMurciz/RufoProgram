import React from 'react';
import './App.css';
import Routes from './routes/Routes'

export default class App extends React.Component {

  constructor(props){
    super(props);

  }

  render(){
    return (
      <>
      <Routes />
      </>
    );
  }
}
