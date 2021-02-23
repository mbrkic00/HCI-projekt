import React from 'react'
import {useState} from 'react'
import { sortings } from '../../constants/const'
import styles from './style.module.css' 
import ComboBoxItem from './ComboBoxItem'
 
const ComboBox = () => {
  const [selectedItem, setSelectedItem] = useState(sortings.find(el => el.name === "recommended"))
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.combobox} onClick={() => setOpen(!open)}>
        {open ? 
            <ul style={{display: open ? 'flex' : 'none'}}>
                {sortings.map(el => 
                <ComboBoxItem {...el} 
                setSelected={setSelectedItem}
                selected={el.name === selectedItem.name}
                 />)}
            </ul>
            : null
        }
        {selectedItem.sorting}
    </div>
)
}

export default ComboBox