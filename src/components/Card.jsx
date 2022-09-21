import React from 'react'
import { ObjectCard, ObjectTitle } from '../styles/components/CardStyles'

export default function Card() {
  return (
    <ObjectCard>
        <ObjectTitle className='title'>
            <h1>Goku</h1>
            <a href="#">Es un sayajin</a>
            <a href="#">Es un sayajin</a>
        </ObjectTitle>
    </ObjectCard>
  )
}
