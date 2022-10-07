import React from "react"
import Ingredients from "./Ingredients"
import Instructions from "./Instructions"

export default function Recipe({ name, ingredients, steps }) {
    return (
        <article id={name.toLowerCase().replace(/ /g, "-")}>
            <h2>{ name }</h2>
            <Ingredients ingredients={ ingredients } />
            <Instructions title="Instructions" steps={ steps } />
        </article>
    )
}