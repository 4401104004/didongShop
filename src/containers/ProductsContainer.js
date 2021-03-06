import React, { Component } from 'react';
import Products from '../component/Products';
import {connect} from 'react-redux';
import Product from './../component/Product';
import PropTypes from 'prop-types'; 
import {actAddToCart, actChangeMesage} from './../actions/index'


class ProductsContainer extends Component {
    render() {
    var {products} = this.props;
        return (
            <Products >
                {this.showProducts(products)}
            </Products>
        );
    }

    showProducts(products){
        var result = null ;
        var {onAddToCart, onChangeMesage} = this.props;
        if(products.length >0){
            result=products.map((product,index)=>{
                return <Product 
                        key={index} 
                        product={product}
                        onAddToCart ={onAddToCart}
                        onChangeMesage ={onChangeMesage}
                        />
            });
        }

        return result;
    }

    
}

ProductsContainer.propTypes={
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.string.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        })
    ).isRequired,
    onAddToCart : PropTypes.func.isRequired,
    onChangeMesage : PropTypes.func.isRequired
}


const mapStateToProps = state =>{
    return{
        products : state.products
    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return{
        onAddToCart : (product)=>{
            dispatch(actAddToCart(product,1));
        },
        onChangeMesage : (mesage)=>{
            dispatch(actChangeMesage(mesage));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ProductsContainer);