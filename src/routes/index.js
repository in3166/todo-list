import styles from './Routes.module.scss'
import TodoList from './todoList'
import TodoCategory from './todoCategory'

function App() {
  return (
    <div className={styles.app}>
      <TodoCategory />
      <TodoList />
    </div>
  )
}

export default App
