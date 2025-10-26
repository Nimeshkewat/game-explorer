import React from 'react'
import { useParams } from 'react-router-dom'

function GamePage() {
  const {id} = useParams();
  console.log(id);
  return (
    <div>GamePage</div>
  )
}

export default GamePage