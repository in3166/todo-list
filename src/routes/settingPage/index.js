import { useState } from 'react'
import styles from './SettingPage.module.scss'
import Button from './Components/Button'
import LightSpeed from 'react-reveal/LightSpeed'

function SettingPage() {
  const [userId, setUserId] = useState('iamchho')
  const [username, setUsername] = useState('Chiho Lee')

  return (
    <div className={styles.container}>
      <LightSpeed right cascade>
        <div className={styles.settingHeader}>
          <header>
            <h1>계정 설정</h1>
            <p>{username}</p>
          </header>
          <div>
            <div className={styles.profile} />
          </div>
        </div>

        <div className={styles.settingInfo}>
          <header>
            <h1>유저 아이디</h1>
            <p>{userId}</p>

            <h1 className={styles.usernameHeader}>유저 이름</h1>
            <p>{username}</p>
          </header>
          <div>
            <Button>변경</Button>
          </div>
        </div>

        <div className={styles.settingSave}>
          <header>
            <p>
              안전한 Todo 관리를 위해 <br /> <br />
              로그아웃을 해주세요.
            </p>
            <Button>저장 후 나가기</Button>
          </header>
          <div>
            <Button>로그아웃</Button>
          </div>
        </div>
      </LightSpeed>
    </div>
  )
}

export default SettingPage
