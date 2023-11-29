import React from 'react'
import { FormState } from '../../Hook/Hooks'

function Form() {
    const {  handleChange, error, mail,status } = FormState()

    const handleSubmit = (e)=>{
         e.preventDefault()
       
         
    }

    return (
        <form id='#form' onSubmit={handleSubmit}>
            <label>Email adress <span className='errorText'> {error}</span> </label>
            <input
                className={error && 'error'}
                type='text'
                value={mail}
                onChange={e => handleChange(e)}
                placeholder='email@company.com'
            />
            <button>Subscribe to monthly newsletter</button>
        </form>
    )
}

export default Form
