import React, {Component} from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component{
    constructor(props){
        super(props)
       
    }



    render(){
        const mappedItems = this.props.inventory.map(
            (item, i) => (
            <Product 
                key={i}
                invObj={item}/>
        ))
        
        return(
            <div>
                <section className = 'products'>
                    {mappedItems}
                </section>
                <h3>Dashboard</h3>
                

            </div>
        )
    }
}