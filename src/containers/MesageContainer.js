import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 
import Mesage from './../component/Mesage';


class MesageContainer extends Component {
    render() {
        var {mesage}=this.props;
        return (
           <Mesage mesage={mesage}/>
        );
    }

    
    
}
MesageContainer.propTypes = {
    mesage : PropTypes.string.isRequired
}

const mapStateToProps = state =>{
    return{
        mesage : state.mesage
    }
}




export default connect(mapStateToProps,null) (MesageContainer);