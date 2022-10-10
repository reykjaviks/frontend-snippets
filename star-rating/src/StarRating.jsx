import React, { useState } from "react"
import { FaStar } from "react-icons/fa"

const createArray = length => [...Array(length)]

const Star = ({ selected = false }) => <FaStar color={selected ? "red" : "gray"} />


export default function StarRating({ totalStars = 5 }) {
    return createArray(totalStars).map((n, i) => <Star key={i} />)
}