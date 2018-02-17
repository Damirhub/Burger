import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


const burger = (props) => {
    return (
        <div className = {classes.Burger}>
            <BurgerIngredient Btype = "bread-top" />
            <BurgerIngredient Btype = "Cheese" />
            <BurgerIngredient Btype = "meat" />
            <BurgerIngredient Btype = "bread-bottom" />
           

        </div>

    );

};

export default burger;