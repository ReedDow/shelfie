import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      inventory: [],
      nameInput: '',
      priceInput: 0,
      urlInput: ''
    }
  }

componentDidMount(){
  this.getInventory();

}
getInventory = () => {
  axios.get('/api/inventory')
  .then(res=>this.setState({inventory: res.data}))
  .catch(err => console.log(err))
  }

addProduct = () => {
  axios.post('/api/inventory', {name: this.state.nameInput, price: this.state.priceInput, url: this.state.urlInput })
  .then(() => this.getInventory())
  .catch(err => console.log(err))
}

edit


  


  render() {
    return (
      <div className="App">
        <Dashboard inventory = {this.state.inventory}/>
        <Form></Form>
        <Header></Header>
      </div>
    );
  };
}
export default App;
