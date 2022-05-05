import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

import PropTypes from 'prop-types'

import styles from './LoginPage.module.scss'

function LoginPage() {
  const [ID, setID] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    // TODO: 로그인을 위한 코드

    history.push('/')
    window.location.reload()
  }

  return (
    <div className={styles.loginContainer}>
      <header>TODO LIST</header>
      <form onSubmit={handleSubmit}>
        <InputID ID={ID} setID={setID} />
        <InputPW password={password} setPassword={setPassword} />
        <LoginBtn />
      </form>
    </div>
  )
}

function InputID({ ID, setID }) {
  const onChangeID = (e) => {
    setID(e.target.value)
  }

  return (
    <div className={styles.inputBox}>
      <input placeholder='ID를 입력하시오' value={ID} onChange={onChangeID} />
    </div>
  )
}

InputID.propTypes = {
  ID: PropTypes.string,
  setID: PropTypes.func,
}

function InputPW({ password, setPassword }) {
  const [isPasswordView, setIsPasswordView] = useState(false)

  const onChangePW = (e) => {
    setPassword(e.target.value)
  }

  const handlePasswordIcon = () => {
    setIsPasswordView((prev) => !prev)
  }

  const passwordViewIcon = isPasswordView ? <FaRegEye size={15} /> : <FaRegEyeSlash size={15} />

  return (
    <div className={styles.inputBox}>
      <input
        placeholder='비밀번호를 입력하시오'
        type={!isPasswordView && 'password'}
        value={password}
        onChange={onChangePW}
      />
      <button type='button' className={styles.passwordIcon} onClick={handlePasswordIcon}>
        {passwordViewIcon}
      </button>
    </div>
  )
}

InputPW.propTypes = {
  password: PropTypes.string,
  setPassword: PropTypes.func,
}

function LoginBtn() {
  return (
    <button type='submit' className={styles.loginBtn}>
      LOGIN
    </button>
  )
}

export default LoginPage
