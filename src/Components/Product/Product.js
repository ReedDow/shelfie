import React, {Component} from 'react';

export default class Product extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.invObj)
        return(
            <div>
                <img src={this.props.invObj.url} alt={this.props.invObj}/>
                <h2 className='prodTitle'>{this.props.invObj.name}</h2>
                <h5 className='prodPrice'>{this.props.invObj.price}</h5>

            </div>
        )
    }
}