import React from "react"

export default function Ingredient({ amount, measurements, name }) {
    return (
        <li>
            { amount } { measurements } { name }
        </li>
    )
}