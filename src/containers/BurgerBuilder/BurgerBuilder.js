import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            cheese: 1,
            salad: 1,
            bacon: 1,
            meat: 1,
        }
    }

    render() {
        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </>
        );
    }
}

export default BurgerBuilder;