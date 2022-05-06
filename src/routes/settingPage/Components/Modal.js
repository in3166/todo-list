import styles from './Modal.module.scss'
import PropTypes from 'prop-types'

function Modal({ handleModalOpen }) {
  return (
    <div className={styles.modalcontainer}>
      <div className={styles.modalBox}>
        <button type='button' onClick={handleModalOpen}>
          X
        </button>
        <input type='text' />
      </div>
    </div>
  )
}

Modal.propTypes = {
  handleModalOpen: PropTypes.func,
}

export default Modal
