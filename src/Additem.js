import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

export default function Additem({newItem,setNewItem,handleSubmit}) {

    const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
          <label htmlFor='addItem'>
              Add Item
          </label>
          <input type='text'
              autoFocus
              ref={inputRef}
              id='addItem'
              placeholder='Please add your List'
              required
              value={newItem}
              onChange={(e)=>setNewItem(e.target.value)}
          />
        <button 
        type='submit'
        onClick={()=>inputRef.current.focus()}
        
        >
            <FaPlus />
        </button>
    </form>
   )
}
