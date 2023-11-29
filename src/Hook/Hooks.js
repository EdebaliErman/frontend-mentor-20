import { useState } from "react"

export const FormState = () => {
    const [error, setError] = useState(null)



    const handleSubmit = (e) => {
        e.preventDefault()
        if (!error) {

            window.location.href = "/complated"
        }
    }
    const handleChange = (e) => {
        const target = e.target.value

        if (!isValidMail(target) && target.length < 5) {
            setError('Valid email required')
        }
        else {
            setError('')
        }

    }

    const isValidMail = email => { return /\S+@\S+\.\S+/.test(email) }


    return {
        handleChange,
        error,
        handleSubmit
    }
}

