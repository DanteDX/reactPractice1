import React,{Component} from 'react';
import Info from './components/Info';
import Form from './components/Form';

class App extends Component{
  state = {
    appData:[]
  }
  addData = (formData) =>{
    this.setState({
      appData:[
        ...this.state.appData,
        formData
      ]
    })
    console.log('FormData added to the App State');
  }

  clearState = e =>{
    this.setState({
      appData:[]
    })
    console.log('App state has been cleared');
  }

  deleteData = (deleteName) =>{
    this.setState({
      appData:this.state.appData.filter(data => data.name !== deleteName)
    })
    console.log(deleteName,"is deleted from the appData");
  }


  consoleLogAppState = e =>{
    console.log(this.state.appData);
  }
  render(){
    return(
      <div className="appContent">
        <button onClick={this.consoleLogAppState}>Console log App State</button>
        <button onClick={this.clearState}>Clear the state</button>
        <Info deleteData={this.deleteData}/>
        <Form addData={this.addData}/>
      </div>
    )
  }
}

export default App;
