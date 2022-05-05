import { useState } from 'react'
import styles from './SettingPage.module.scss'

function SettingPage() {
  const [username, setUsername] = useState('Chiho Lee')

  return (
    <div className={styles.container}>
      <div className={styles.settingHeader}>
        <div className={styles.headerAccount}>
          <h1>Account</h1>
          <p>Hello, {username}</p>
        </div>
        <div className={styles.headerProfilePic}>
          <div className={styles.profile}>.</div>
        </div>
      </div>

      <div className={styles.settingInfo}>
        <div className={styles.headerAccount}>
          <h1>Username</h1>
          <p>{username}</p>
        </div>
        <div className={styles.headerProfilePic}>
          <button type='button'>변경</button>
        </div>
      </div>

      <div className={styles.settingSave}>
        <div className={styles.headerAccount}>
          <h1>Log out</h1>
          <p>You may log out before leaving the app.</p>
          <button type='button'>Save Changes</button>
        </div>
        <div className={styles.headerProfilePic}>
          <button type='button'>Log out</button>
        </div>
      </div>
    </div>
  )
}

export default SettingPage
