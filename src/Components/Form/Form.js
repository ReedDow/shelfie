import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component{
    constructor(props){
    super(props)
    this.state ={
        nameInput: '',
        priceInput: 0.0,
        urlInput: '',
    }
    }

    handleNameInput =(val) =>{
        this.setState({nameInput: val})
            
    }    

    handlePriceInput=(val)=>{
        this.setState({priceInput: val})
    }

    handleUrlInput=(val)=>{
        this.setState({urlInput: val})
    }

    handleCancel=()=>{
        this.setState({urlInput: ''})
        this.setState({priceInput: 0.0})
        this.setState({nameInput: ''})
    }

    render(){
        return(
            <div>
                <input className = 'inputName'
                    value={this.state.nameInput} onChange ={e => this.handleNameInput(e.target.value)}/>
                <input className = 'inputPrice' value={this.state.priceInput} onChange ={e => this.handlePriceInput(e.target.value)}/>
                <input className ='inputUrl' value={this.state.urlInput}  onChange ={e => this.handleUrlInput(e.target.value)}/>
                <button className = 'cancelBtn' onClick={e => this.handleCancel(e.target.value)}>Cancel</button>
                <button className = 'addBtn'>Add</button>

                
                // <h3>Form</h3>
                
            </div>
    
        )
    }
}