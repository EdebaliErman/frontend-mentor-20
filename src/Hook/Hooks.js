import { useEffect, useState } from "react"

export const FormState = () => {
    const [mail, setMail] = useState('')
    const [error, setError] = useState(null)
    const [status, setStatus] = useState(false)


    useEffect(() => {
        !error ? setStatus(true) : setStatus(false)
        console.log(status)
    }, [error])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (status && status === true) {
            window.location.href = "www.google.com"
        }
    }
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
        handleSubmit
    }
}

