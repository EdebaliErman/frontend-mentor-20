import React from 'react'
import CardForm from '../CardForm/CardForm'
import "../../Style/Card.css"
const url = process.env.PUBLIC_URL + "./assets/"

function Cards({handleChange,handleSubmit,error}) {
  return (
    <div className='Card' >
      <CardForm error={error} handleChange={handleChange} handleSubmit={handleSubmit} />
      <img className=' w-[420px]  sm:hidden md:hidden' src={url + "illustration-sign-up-desktop.svg"} alt='desktop.svg' />
      <img className='w-full md:mt-3 hidden sm:flex md:flex' src={url + "illustration-sign-up-mobile.svg"} alt='mobile.svg' />
    </div>
  )
}

export default Cards
