import React from "react";

export default function Instructions({ title, steps }) {
    return (
        <section className="instructions">
            <h3>{title}</h3>
            <ol>
                {steps.map((s, i) => (
                    <li key={i}>{s}</li>
                ))}
            </ol>
        </section>
    )
}