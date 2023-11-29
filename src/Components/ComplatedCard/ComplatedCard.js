import React from 'react'
import { FormState } from '../../Hook/Hooks'

function ComplatedCard() {
    const { mail } = FormState()
    return (
        <div  >
            <img src={process.env.PUBLIC_URL + "./assets/icon-success.svg"} alt='svg' />
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <span>{mail}</span>. Please open it and click the button inside to confirm your subscription.
            </p>
            <button>Dismiss message</button>
        </div>
    )
}

export default ComplatedCard
