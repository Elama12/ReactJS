import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import NewPost from './NewPost'

export default function Nav({search,setSearch}) {
  return (
    <nav className='Nav'>
        <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor='search'>Search posts</label>
            <input
                type='text'
                id="search"
                placeholder='To Search a Post'
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            
            />

        </form>

        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about' element={<About />}>About</Link></li>
            <li><Link to='/newpost' element={<NewPost />}>NewPost</Link></li>
            {/* <li><Link to='/postpage'>Post</Link></li> */}
        </ul>
    </nav>
  )
}
