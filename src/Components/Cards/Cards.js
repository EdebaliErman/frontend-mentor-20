import React from 'react'
import CardForm from '../CardForm/CardForm'
import "../../Style/Card.css"
const url = process.env.PUBLIC_URL + "./assets/"

function Cards({handleChange,handleSubmit,error}) {
  return (
    <div className='Card' >
      <CardForm error={error} handleChange={handleChange} handleSubmit={handleSubmit} />
      <img className=' xl:hidden lg:hidden 2xl:hidden' src={url + "illustration-sign-up-mobile.svg"} alt='mobile.svg' />
      <img className='' src={url + "illustration-sign-up-desktop.svg"} alt='desktop.svg' />
    </div>
  )
}

export default Cards
