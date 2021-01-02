import React from 'react'
 
import styles from './style.module.css'
 
const ComboBoxItem = ({sorting, name}) => (
    <div key={name}
    className={styles.comboboxItem}>
        <span>{sorting}</span>
        
    </div>
)
 
export default ComboBoxItem