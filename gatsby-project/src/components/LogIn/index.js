import React, {useState} from 'react'
import {navigate} from 'gatsby'
 
import styles from './style.module.css'
 
const users = [
{
  email: "mate@gmail.com",
  password: "123"
},
{
  email: "jure@gmail.com",
  password: "123"
},
]
 
const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [name, setName] = useState()
  const [surname, setSurname] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = () => {
    setError(false)
    setLoading(true)
    setTimeout(() => {
      const loginSuccessful = !!users.find(user => user.email === email && user.password === password)
      setLoading(false)
      if (loginSuccessful) {
        localStorage.setItem("loggedIn", email)
        setError('Success')
        return navigate('/')
      }
        setError('Wrong username or password')
    }, 2000)
  }
 
  return (
  <main className={styles.background} onKeyDown={key => {
    if (key.key === "Enter")
      return submit()
  }}>
    <section className={styles.container}>
    <p className={styles.h}>Prijava</p>
      <section className={styles.field}>
        <label htmlFor="email">
          e-mail
        </label>
        <input name="email" onChange={e => setEmail(e.target.value)}/>
      </section>
      <section className={styles.field}>
        <label htmlFor="password">
          lozinka
        </label>
        <input name="password" type="password" onChange={e => setPassword(e.target.value)} />
      </section>
      <p className={`${styles[error !== "Success" ? 'error' : 'success']} ${error ? styles.show : ''}`}>{error}</p>
      <button className={styles.loginButton} onClick={() => submit()}>
        {loading ? 'Loading...' : 'PRIJAVI SE'}
      </button>
    </section>

    <section className={styles.container2}>
      <p className={styles.h}>Registracija</p>
      <section className={styles.field2}>
        <label htmlFor="email">
          e-mail
        </label>
        <input name="email" onChange={e => setEmail(e.target.value)}/>
      </section>
      <section className={styles.field2}>
        <label htmlFor="name">
          Ime
        </label>
        <input name="name" onChange={e => setName(e.target.value)}/>
      </section>
      <section className={styles.field2}>
        <label htmlFor="surname">
          Prezime
        </label>
        <input name="surname" onChange={e => setSurname(e.target.value)}/>
      </section>
      <section className={styles.field2}>
        <label htmlFor="password">
          lozinka
        </label>
        <input name="password" type="password" onChange={e => setPassword(e.target.value)} />
      </section>
      <p className={`${styles[error !== "Success" ? 'error' : 'success']} ${error ? styles.show : ''}`}>{error}</p>
      <button className={styles.loginButton2} onClick={() => submit()}>
        {loading ? 'Loading...' : 'REGISTRIRAJ SE'}
      </button>
    </section>
  </main>
)}
 
export default Login