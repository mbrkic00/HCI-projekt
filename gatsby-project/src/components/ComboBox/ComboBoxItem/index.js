import React from 'react'
import styles from './style.module.css'
 
const ComboBoxItem = ({sorting, name, setSelected, selected}) => (
    <li key={name}
    onClick ={ () => setSelected({sorting, name})}
    className={`${styles.comboboxItem} ${selected ? styles.selected : ''}`} >
        <span>{sorting}</span>       
    </li>
)
 
export default ComboBoxItem