import { buildQueries } from '@testing-library/react';
import React, { Component } from 'react';
import reactDom from 'react-dom';

class Counter extends React.Component {

styles ={
    fontSize: 10,
    fontWeight: "bold",
    color: "black"

}
     render() {
         return( 
         <div>
         <span style={this.styles} className={this.getBadgeName()}>{this.formatCount()}</span>
         <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm ">Increment</button>
        <button className="btn btn-danger btn-sm m-2" onClick={ () => this.props.onDelete(this.props.counter.id)}>Delete</button>
         </div>
         );
     }
 

    getBadgeName() {
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

formatCount(){
const {value} = this.props.counter;
return value === 0 ? "Zero" : value;
} 
}
 export default Counter;

 