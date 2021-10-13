import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../component/Cart';
import CartItem from '../component/CartItem';
import CartResult from '../component/CartResult';
import * as Mesage from './../constants/Mesage';
import {actDeleteInCart,actChangeMesage, actUpdateInCart} from './../actions/index';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;

        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
        var result = <tr>
            <td>{Mesage.MSG_CART_EMPTY}</td>
        </tr>;
        var {onDeleteInCart,onChangeMesage,onUpdateProductInCart}=this.props;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteInCart={onDeleteInCart}
                        onChangeMesage ={onChangeMesage}
                        onUpdateProductInCart = {onUpdateProductInCart}
                    />
                );
            });
        }
        return result;
    }
    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }


}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onDeleteInCart : PropTypes.func.isRequired,
    onChangeMesage : PropTypes.func.isRequired,
    onUpdateProductInCart : PropTypes.func.isRequired

}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch ,props) =>{
    return{
        onDeleteInCart : (product)=>{
            dispatch(actDeleteInCart(product));
        },
        onChangeMesage : (mesage) =>{
            dispatch(actChangeMesage(mesage));
        },
        onUpdateProductInCart : (product,quantity)=>{
            dispatch(actUpdateInCart(product,quantity));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);