import React from 'react'

function Form({handleChange,handleSubmit,error}) {


    return (
        <form onSubmit={handleSubmit}>
            <label>Email adress <span className='errorText'> {error}</span> </label>
            <input
                className={error && 'error'}
                type='text'
                onChange={e=>handleChange(e)}
                placeholder='email@company.com'
            />
            <button >Subscribe to monthly newsletter</button>
        </form>
    )
}

export default Form
