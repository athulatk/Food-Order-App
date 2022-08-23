import React from 'react'
import styles from './Button.module.scss'
import PropTypes from 'prop-types'
function Button(props) {
  const {label} = props
  return (
    <button className={styles.button}>{label}</button>
  )
}

Button.propTypes={
  label:PropTypes.string
}

Button.defaultProps={
  label:""
}

export default Button