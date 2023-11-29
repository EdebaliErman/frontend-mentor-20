import React from 'react'
import Form from './Form'
import '../../Style/CardForm.css'
import Listed from './Listed'

function CardForm({handleChange,handleSubmit,error}) {
    return (
        <div className='CardForm'>
            <h1>Stay updated!</h1>
            <h4>Join 60,000+ product managers receiving monthly updates on:</h4>
            <Listed />
            <Form error={error} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    )
}

export default CardForm
