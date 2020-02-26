

import React from 'react';
//import Product from './Product.js';
import axios from 'axios';

class Products extends React.Component {
    constructor() {
        super()
        this.state = {
            productDetails: []
        }
    }
    componentDidMount() {
        axios.get('/products.json').then(response=>{
            this.setState({productDetails:response.data})
        }).catch(error => 
            this.setState({
                error
            })
        );
    }
    render() {
        return (<div>
            {this.state.productDetails.map(function(productDetail){
                 return <Product pid={productDetail.pdtCode}
                 price = {productDetail.pdtPrice}
                 name = {productDetail.pdtName}
                 key = {productDetail.pdtCode}
                 desc = {productDetail.pdtDescription}
                 img = {productDetail.pdtImg}
                 rating = {productDetail.rating}
                 avgRating = {productDetail.avgFeedback}
                 />
            })}
           
        </div>)
    }
}
export default Products;
