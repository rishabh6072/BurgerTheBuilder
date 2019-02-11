import * as actionTypes from './actions';
import { stat } from 'fs';

const initialState = {
    ingredients: {
        cheese: 0,
        salad: 0,
        bacon: 0,
        meat: 0
    },
    totalPrice: 4
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.5,
    meat: 1.5,
    bacon: 1.0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1 //special syntax you can use to dynamically overwrite a property in a given javascript object,
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
            case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1 //special syntax you can use to dynamically overwrite a property in a given javascript object,
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
    }
    return state;
}

export default reducer;