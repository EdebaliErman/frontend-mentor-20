import { useState } from "react"

export const FormState = () => {
    const [mail, setMail] = useState('')
    const [error, setError] = useState(null)
    const [status, setStatus] = useState(false)
   

    const handleChange = (e) => {
        const target = e.target.value
        setMail(target)

        if (!isValidMail(target) && target.length < 5) {
            setError('Valid email required')
            setStatus(false)
        }
        else {
            setError('')
        }
    }

    const isValidMail = email => { return /\S+@\S+\.\S+/.test(email) }


    return {
        handleChange,
        mail,
        error,
        status,
    }
}

