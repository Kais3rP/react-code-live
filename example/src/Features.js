import React from 'react'
import styles from './styles.module.css'

const Features = () => {
  return (
    <ul className={styles.features}>
      <li>Write React code, style it, enjoy the result</li>
      <li>Write CSS the good old way</li>
      <li>
        CSS code is scoped to the previewed component and won't affect other
        code
      </li>
      <li>Support for potentially any library that you pass into the scope</li>
      <li>Support for both function and class declaration</li>
      <li>
        Easy APIs expose the code, so you can use it around your application
      </li>
    </ul>
  )
}

export default Features
