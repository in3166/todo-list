import { useEffect, useState } from 'react'
import styles from './HistoryPage.module.scss'
import cx from 'classnames'
import {BsTrash, BsCircle} from 'react-icons/bs'
import PropTypes from 'prop-types'

// const FINISHED_TODO_LIST = [
//   {id:0, task:'abcaaaaaaaaaaaaaaaaaa', category: 'business', completed: true, expiry_date: 1230412304, completed_date: '2022-05-05'},
//   {id:1, task:'abcd', category: 'personal', completed: true, expiry_date: 1230412304, completed_date: '2022-05-04'},
//   {id:2, task:'abce', category: 'health', completed: true, expiry_date: 1230412304, completed_date: '2022-05-03'},
//   {id:3, task:'abcf', category: 'hobby', completed: true, expiry_date: 1230412304, completed_date: '2022-05-02'},
//   {id:4, task:'abcg', category: 'abcd', completed: true, expiry_date: 1230412304, completed_date: '2022-05-01'},
//   {id:5, task:'1', category: 'abcd', completed: true, expiry_date: 1230412304, completed_date: '2022-05-01'},
//   {id:6, task:'2', category: 'abcd', completed: true, expiry_date: 1230412304, completed_date: '2022-05-01'},
//   {id:7, task:'3', category: 'abcd', completed: true, expiry_date: 1230412304, completed_date: '2022-05-01'},
//   {id:8, task:'4', category: 'abcd', completed: true, expiry_date: 1230412304, completed_date: '2022-05-01'},
//   {id:9, task:'5', category: 'abcd', completed: true, expiry_date: 1230412304, completed_date: '2022-05-01'},
//   ]
const TASKS_KEY = 'task'

function FinishedTasks({value}) {
  // localStorage.setItem(TASKS_KEY, JSON.stringify(FINISHED_TODO_LIST))
  const year = value.getFullYear()
  const month = value.getMonth() + 1
  const day = value.getDate()
  const date = `${year}-${month >= 10 ? month : `0${month}`}-${day >= 10 ? day : `0${day}`}`

  const [finishedTasks, setFinishedTasks] = useState([])

  const getTasks = () => {
    const localStorageTasks = localStorage.getItem(TASKS_KEY)
    if(localStorageTasks){
      const localStorageTasksFinished = JSON.parse(localStorageTasks).filter(task=>task.completed_date === date)
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

  const findCategoryClassname = (category) => {
    switch(category){
      case 'business':
        return styles.business
      case 'personal':
        return styles.personal
      case 'health':
        return styles.health
      case 'hobby':
        return styles.hobby
      default:
        return styles.all
    }
  }
  useEffect(()=>{
    getTasks()
    console.log(date, JSON.parse(localStorage.getItem(TASKS_KEY)).filter(task=>task.completed_date === date))
  },[ date ])
  return (
    <ul className={styles.tasks}>
      {finishedTasks.map(task=>(
        <li key={`task-key-${task.id}`} className={styles.task}  >
          <div className={styles.leftAlign} >
            <BsCircle className = {cx(styles.categoryIcon,findCategoryClassname(task.category))}/>
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
FinishedTasks.propTypes = {
  value: PropTypes.objectOf(PropTypes.string),
}
export default FinishedTasks
