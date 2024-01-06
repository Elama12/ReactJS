import React from 'react'

function Footer({length}) {

    

  return (
    <footer>{length} List {length ===1 ? "item":"items"}</footer>
  )
}

export default Footer