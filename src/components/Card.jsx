import React from 'react'
import { ObjectCard, ObjectContent, ObjectTitle } from '../styles/components/CardStyles'

export default function Card() {
  return (
    <ObjectCard>
        <ObjectTitle>
            <h1>Goku</h1>
            <a href="#">Es un sayajin</a>
            <a href="#">Es un sayajin</a>
        </ObjectTitle>
        <ObjectContent >
            <h1>Goku</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aliquid quo placeat quod repellendus rem tenetur voluptates.</p>
            <a href="#">Sayajin</a>
            <a href="#">Masculino</a>
        </ObjectContent>
        <img class='image' src="https://raw.githubusercontent.com/IngNex/dragonball-api-sagas/master/assets/img/goku.png" alt=""/>             
    </ObjectCard>
  )
}
