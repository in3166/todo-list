import { useState } from 'react'

import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

import styles from './LoginScreen.module.scss'

function LoginScreen() {
  return (
    <div className={styles.wholeContainer}>
      <section className={styles.loginContainer}>
        <InputID />
        <InputPW />
        <LoginBtn />
      </section>
    </div>
  )
}

function InputID() {
  const [ID, setID] = useState('')

  const onChangeID = (e) => {
    setID(e.target.value)
  }

  return (
    <div className={styles.inputBox}>
      <input placeholder='id를 입력하시오' value={ID} onChange={onChangeID} />
    </div>
  )
}

function InputPW() {
  const [password, setPassword] = useState('')
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

function LoginBtn() {
  return (
    <button type='submit' className={styles.loginBtn}>
      LOGIN
    </button>
  )
}

export default LoginScreen
