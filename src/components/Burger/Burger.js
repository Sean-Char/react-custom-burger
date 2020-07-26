import React from 'react';

import classes from './Burger.css'
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    // convert object to an array and map key value pair and store it to memory
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            console.log(igKey);
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                console.log(props.ingredients[igKey]);
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => { // Reduce is array function used to flatten the array into single array
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients} 
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}
 
export default burger;