import React, { Component } from 'react';
import Headers from './component/Headers';
import Footer from './component/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MesageContainer from './containers/MesageContainer';
class App extends Component {
    render() {
        return (
            <div className="hidden-sn animated deep-purple-skin">
                <Headers></Headers>
                <main id="mainContainer">
                    <div className="container">

                        <ProductsContainer/>
                        <MesageContainer/>
                       
                        <CartContainer/>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;