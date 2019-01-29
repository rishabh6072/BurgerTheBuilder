import React from 'react';

import classes from './Order.css';

const order = (props) => {
    // Tranforming object into array
    // Method 1
    // let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    //     return [...Array(props.ingredients[igKey])].map((_, i) => {
    //         return <BurgerIngredient key={igKey + i} type={igKey} /> ;
    //     })
    // }).reduce((prev, curr) => {
    //     return prev.concat(curr);
    // }, []);
    // if( transformedIngredients.length === 0) {
    //     transformedIngredients = <p>Please start adding ingredients!!</p>
    // }
    // Method 2
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({ name: ingredientName, amount: props.ingredients[ingredientName] });
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 4px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ig.name}>{ig.name} ({ig.amount})
        </span>
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput} </p>
            <p>Price: <strong>$ {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
};

export default order;