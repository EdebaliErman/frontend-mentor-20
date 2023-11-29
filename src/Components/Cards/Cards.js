import React from 'react'
import CardForm from '../CardForm/CardForm'
import "../../Style/Card.css"
const url = process.env.PUBLIC_URL + "./assets/"

function Cards() {
  return (
    <div className='Card' >
      <CardForm />
      <img src={url + "illustration-sign-up-desktop.svg"} alt='desktop.svg' />
    </div>
  )
}

export default Cards
