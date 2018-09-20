import React, { Component } from 'react';

class Losange extends Component {
    render() {
        console.log()
        return (
            <i style={{color: this.props.losangeValue.color}} className={this.props.losangeValue.losange}></i>
        );
    }
}
 
export default Losange;