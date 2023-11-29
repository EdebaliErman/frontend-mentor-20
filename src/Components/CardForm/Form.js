import React from 'react'
import { FormState } from '../../Hook/Hooks'

function Form({ setMail }) {
    const { handleSubmit, handleChange, error, mail } = FormState()


    return (
        <form onSubmit={handleSubmit}>
            <label>Email adress <span className='errorText'> {error}</span> </label>
            <input
                className={error && 'error'}
                type='text'
                value={mail}
                onChange={e => {
                    return (
                        setMail(e.target.value),
                        handleChange(e))
                }
                }
                placeholder='email@company.com'
            />
            <button >Subscribe to monthly newsletter</button>
        </form>
    )
}

export default Form
