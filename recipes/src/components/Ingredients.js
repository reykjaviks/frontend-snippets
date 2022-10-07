import React from "react";
import Ingredient from "./Ingredient";

export default function Ingredients({ ingredients }) {
    return (
        <div className="ingredients">
            <h3>Ingredients</h3>
            <ul>
                {ingredients.map((ingredient, i) => (
                    <Ingredient key={i} {...ingredient} />
                ))}
            </ul>
        </div>

    )
}