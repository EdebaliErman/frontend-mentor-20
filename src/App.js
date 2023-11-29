import { useState } from 'react';
import Cards from './Components/Cards/Cards';
import ComplatedCard from './Components/ComplatedCard/ComplatedCard';
import './Style/App.css'

function App() {
  const [mail, setMail] = useState('')
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(false)
  const isValidMail = email => { return /\S+@\S+\.\S+/.test(email) }


  const handleSubmit = (e) => {
    const disStatus = !status
    e.preventDefault()
    setMail(mail)
    mail.length > 3 && setStatus(disStatus)
  }
  const handleChange = (e) => {
    const value = e.target.value
    isValidMail(value)
    if (!isValidMail(value) ) {
      if (mail.length < 3) {
        setError("Valid email required")
      }
    } else {
      setError('')
    }
    setMail(value)
  }

  return (
    <div className='App'>
      {!status ?
        <Cards
          error={error}
          handleChange={handleChange}
          handleSubmit={handleSubmit} />
        : <ComplatedCard
          handleSubmit={handleSubmit}
          mail={mail} />}

    </div>
  );
}

export default App;
