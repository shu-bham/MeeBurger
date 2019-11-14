import React, { Component } from 'react';
import Aux from '../../../hoc/Auxilliary/Auxilliary';
import Button from '../../UI/Button/Button';
class OrderSummary extends Component {
    // could be a functional component

    componentWillUpdate(){
        console.log('[OrderSummary] componentWillUpdate');
    }

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform : 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
                </li>);
        })

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A Delicious Burger with the following ingredients :</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price : {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
    
            </Aux>
        );
    }

}

export default OrderSummary;