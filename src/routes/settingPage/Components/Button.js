import styles from './Button.module.scss'
import PropTypes from 'prop-types'

function Button({ children }) {
  return (
    <button type='button' className={styles.button}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
}

export default Button
