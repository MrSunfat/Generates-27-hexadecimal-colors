import React, { useState } from 'react';
import TagColor from './TagColor';

function App() {
  const [colors, setColors] = useState([
    "#EAB89C", "#32CE14", "#FE4E90", "#C5DFFC", "#6EF93B" , "#545B91", 
    "#AAB5D1", "#53645D", "#AEA041", "#CB971C", "#15CEF2", 
    "#FD3FF3", "#6E976A", "#0DFA24", "#5A2DD0", "#F361F7", 
    "#05252D", "#2B1B5E", "#8582B2", "#A4FD27", "#A877C6", 
    "#15373B", "#539835", "#577798", "#3D7798", "#43EAA8", "#37CFCF"
  ])

  const hex = 
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  const randomNumber = () => {
    return Math.floor(Math.random() * hex.length)
  }

  const createHexColor = () => {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
      hexColor += hex[ randomNumber() ]
    }
    return hexColor
  }

  const show27HexColor = () => {
    // setColors([])
    let result = []
    let i = 0
    while (i < 27) {
      let newColor = createHexColor()
      if (!result.includes(newColor)) {
        result.push(newColor)
        i++
      } 
    }

    setColors([...result])
  }

  return (
    <>
      <button onClick={show27HexColor}>Generate</button>
      <ul>
        { colors.map((color, index) => 
          <TagColor key={index}>
            {color}
          </TagColor> 
        )}
      </ul>
    </>
  )
}

export default App;
