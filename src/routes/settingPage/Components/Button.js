import styles from './Button.module.scss'
import PropTypes from 'prop-types'

function Button({ children, handleModalOpen }) {
  return (
    <button type='button' onClick={handleModalOpen} className={styles.button}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  handleModalOpen: PropTypes.func,
}

export default Button
