import React from 'react'
import styles from '../styles/sass/_Title.module.scss';

function Title(props) {
  return (
    <div className={styles.title}>
    {props.title}
    </div>
  )
}

export default Title