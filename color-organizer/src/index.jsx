import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import ColorProvider from "./ColorProvider"

// Any component that is App's child can obtain the colors from the useColor hook
ReactDOM.render(
    <ColorProvider>
        <App /> 
    </ColorProvider>,
    document.getElementById("root")
)
