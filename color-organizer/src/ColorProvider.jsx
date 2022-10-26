import React, { createContext, useContext, useState } from "react"
import colorData from "./colors.json"
import { v4 as uuidv4 } from 'uuid'

const ColorContext = createContext()
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
    const [colors, setColors] = useState(colorData)

    const addColor = (title, color) =>
        setColors([
            ...colors,
            {
               id: uuidv4(),
               rating: 0,
               title,
               color
            }
        ])
    
    const removeColor = id =>
        setColors(
            colors.filter(color => color.id !== id)
        )
    
    return (
        <ColorContext.Provider value={{ colors, addColor, removeColor }}>
            {children}
        </ColorContext.Provider>
    )
}