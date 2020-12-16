import React from 'react'
import styles from './style.module.css'

const user = 'korisnik1203';
function getGreeting(user) {
    if (user) {
      return <h1>Dobar dan, {user}!</h1>;
    }
    return <h1>Hello, newUser!</h1>;
  }
  

const MsgToUser = () => (
    <main className={styles.msgToUser}>
      <span className={styles.msgText}>{getGreeting(user)}</span> 
    </main>

)

export default MsgToUser