import { useState } from 'react';
import Cards from './Components/Cards/Cards';
import ComplatedCard from './Components/ComplatedCard/ComplatedCard';
import './Style/App.css'

function App() {
  const [mail, setMail] = useState('')
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(false)

  //!Input içi kontrol etme REGEX işlemi
  const isValidMail = email => { return /\S+@\S+\.\S+/.test(email) }

  //**Sayfa yönlendirme işlemi

  const handleSubmit = (e) => {
    const disStatus = !status
    e.preventDefault()
    setMail(mail)
    mail.length > 3 && setStatus(disStatus)
  }

  //**Anlık değer alma */
  const handleChange = (e) => {
    const value = e.target.value
    isValidMail(value)
    //? isValue inputu kontrol ediyor ve mail'den 3 harften küçükse hata mesajı gösteriyor 
    if (!isValidMail(value)) {
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
