import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li><Link to='/beers'>See the beers</Link></li>
        <li><Link to='/random-beer'>Show a random beer</Link></li>
      </ul>
    </div>
  )
}

export default Home
