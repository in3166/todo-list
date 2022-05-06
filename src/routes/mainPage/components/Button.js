import PropTypes from 'prop-types'
import styles from './Button.module.scss'

function Button({ children, onClick, className }) {
  return (
    <button type='button' onClick={onClick} className={`${styles.roundButton} ${className}`}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default Button
