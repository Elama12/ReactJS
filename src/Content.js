import React from 'react'

import ItemList from './ItemList'

function Content({ items, handleCheck, handleDelete }) {




  return (
    <>
      {(items.length) ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          />
      ) :
        <p>Your List is Empty</p>
      }

    </>
  )
}

export default Content