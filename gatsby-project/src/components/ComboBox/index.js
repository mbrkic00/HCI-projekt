import React from 'react'
 
import { sortings } from '../../constants/const'
import ComboBoxItem from './ComboBoxItem'
import styles from './style.module.css' 
 
const ComboBox = () => (
  <div className={styles.combobox}>Sortiraj
    <ul>
        {sortings.map(el =>
            <ComboBoxItem sorting={el.sorting} 
                name={el.name}
            />)}
            
    </ul>
  </div>
)
 
export default ComboBox