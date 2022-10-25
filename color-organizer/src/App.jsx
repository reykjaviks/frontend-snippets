import React, { useState } from "react"
import colorData from "./colors.json"
import ColorList from "./ColorList";

// The only component to hold state
export default function App() {
  const [colors] = useState(colorData);
  return <ColorList colors={colors} />
}
