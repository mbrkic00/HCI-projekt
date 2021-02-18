import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import styles from './style.module.css'

const ThankYou = () => (
    <div className={styles.thanks}>
        <CheckCircleIcon className={styles.checkIcon}/>
        <p className={styles.text}>Uspješno izvršeno plaćanje!</p>
    </div>
)

export default ThankYou