import React from "react"
import Recipe from "./Recipe"

function Menu({ recipes }) {
    return (
        <ol className="Recipes">
            {recipes.map((recipe, i) => (
                <Recipe key={i} {...recipe} />
                ))}
        </ol>
    )
}

export default Menu