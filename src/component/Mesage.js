import React, { Component } from 'react';

class Mesage extends Component {
    render() {
        var {mesage}=this.props;
        return (
            <h3>
                <span className="badge amber darken-2">
                    {mesage}
                </span>
            </h3>
        );
    }
}

export default Mesage;