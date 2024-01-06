import React from 'react'
import { Link } from 'react-router-dom'

export default function PostPage() {
  return (
    <main>
      <li><Link to='/postpage/1'>Page 1</Link></li>
      <br />
      <li><Link to='/postpage/2'>Page 2</Link></li>
      <br />
      <li><Link to='/postpage/3'>Page 3</Link></li>



    </main>
  )
}
