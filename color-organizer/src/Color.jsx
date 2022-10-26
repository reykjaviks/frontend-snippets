import React from "react"
import { useColors } from "./ColorProvider"
import { FaTrash } from "react-icons/fa"

export default function Color({ id, title, color, rating }) {
    const { removeColor } = useColors()

    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => removeColor(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }} />
        </section>
    )
}