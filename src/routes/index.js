import styles from './Routes.module.scss'
import TodoList from './todoList'

function App() {
  return (
    <div className={styles.app}>
      <TodoList />
    </div>
  )
}

export default App
