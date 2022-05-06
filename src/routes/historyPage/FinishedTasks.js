import { useEffect, useState } from 'react'
import styles from './HistoryPage.module.scss'
import {BsTrash} from 'react-icons/bs'

const FINISHED_TODO_LIST = [
  {id:0, task:'abcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', category: 'cate-01', completed: true, expiry_date: 1230412304, completed_date: '2022-05-05'},
  {id:1, task:'abcd', category: 'cate-01', completed: true, expiry_date: 1230412304, completed_date: '2022-05-04'},
  {id:2, task:'abce', category: 'cate-01', completed: true, expiry_date: 1230412304, completed_date: '2022-05-03'},
  {id:3, task:'abcf', category: 'cate-02', completed: true, expiry_date: 1230412304, completed_date: '2022-05-02'},
  {id:4, task:'abcg', category: 'cate-02', completed: true, expiry_date: 1230412304, completed_date: '2022-05-01'},
  ]
const TASKS_KEY = 'TASK'

function FinishedTasks() {
  const [finishedTasks, setFinishedTasks] = useState(FINISHED_TODO_LIST)
  const getTasks = () => {
    const localStorageTasks = localStorage.getItem(TASKS_KEY)
    if(localStorageTasks){
      const localStorageTasksFinished = JSON.parse(localStorageTasks).filter(task=>task.completed)
      setFinishedTasks(localStorageTasksFinished)
    }
  }
  const deleteTask = (id) => {
    const localStorageTasks = localStorage.getItem(TASKS_KEY)
    const newTask = JSON.parse(localStorageTasks).filter(task => task.id !== id)
    localStorage.setItem(TASKS_KEY,JSON.stringify(newTask))
    getTasks()
  }
  const handleDeleteBtnClick = (e) => {
    const {id} = e.currentTarget.dataset
    deleteTask(Number(id))
  }

  useEffect(()=>{
    getTasks()
  },[])
  return (
    <ul className={styles.tasks}>
      {finishedTasks.map(task=>(
        <li key={`task-key-${task.id}`} className={styles.task}  >
          <div className={styles.leftAlign} >
            <p className={styles.title}>
              {task.task}
            </p>
            <BsTrash className={styles.deleteIcon} data-id={task.id} onClick = {handleDeleteBtnClick} />
          </div>
        </li>
        ))}
    </ul> 
  )
}

export default FinishedTasks