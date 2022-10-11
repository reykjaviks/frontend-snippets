import React, { useState } from "react"
import Star from "./Star"

const createArray = length => [...Array(length)]

export default function StarRating({ totalStars = 5 }) {
    /*
        The function 'useState' returns an array containing two members.
        The first member contains the current state and the second member is a function 
        used to modify the state. Deconstructiing can be used to name these members.
    */
    const [selectedStars, setSelectedStars] = useState(0)
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star 
                    key={i} 
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                />
            ))}
            <p>
                Selected {selectedStars} out of {totalStars} stars
            </p>
        </>
    )
}