import React from 'react'
import { FormState } from '../../Hook/Hooks'

function Form() {
    const { handleSubmit, handleChange, error, mail, status } = FormState()

  

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
