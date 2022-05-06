import { useEffect, useState } from 'react'
import style from './HistoryPage.module.scss'

const FINISHED_TODO_LIST = [
  {id:0, task:'abcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', category: 'cate-01', completed: true, expiry_date: 1230412304, completed_date: '2022-05-05'},
  {id:1, task:'abcd', category: 'cate-01', completed: true, expiry_date: 1230412304, completed_date: '2022-05-04'},
  {id:2, task:'abce', category: 'cate-01', completed: true, expiry_date: 1230412304, completed_date: '2022-05-03'},
  {id:3, task:'abcf', category: 'cate-02', completed: true, expiry_date: 1230412304, completed_date: '2022-05-02'},
  {id:4, task:'abcg', category: 'cate-02', completed: true, expiry_date: 1230412304, completed_date: '2022-05-01'},
  ]
const TASKS_KEY = 'TASK'

function HistoryPage() {
  const [finishedTasks, setFinishedTasks] = useState(FINISHED_TODO_LIST)
  const deleteTask = (id) => {
    const localStorageTasks = localStorage.getItem(TASKS_KEY)
    const newTask = JSON.parse(localStorageTasks).filter(task => task.id !== id)
    localStorage.setItem(TASKS_KEY,JSON.stringify(newTask))
  }
  const handleDeleteBtnClick = (e) => {
    const {id} = e.currentTarget.dataset
    deleteTask(Number(id))
  }

  useEffect(()=>{
    const localStorageTasks = localStorage.getItem(TASKS_KEY)
    if(localStorageTasks){
      const localStorageTasksFinished = JSON.parse(localStorageTasks).filter(task=>task.completed)
      console.log(localStorageTasksFinished)
      setFinishedTasks(localStorageTasksFinished)
    }
  },[])
  return (
    <div className={style.historyPage}>
      <div className={style.leftAlign}>
        <h1>HISTORY</h1>
      </div>
      <div className={style.leftAlign}>
        <h2>ANALISIS</h2>
      </div>
      <div className={style.leftAlign}>
        <h2>FINISHED TASKS</h2>
      </div>

      <ul className={style.tasks}>
        {finishedTasks.map(task=>(
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li key={`task-key-${task.id}`} data-id={task.id} className={style.task} onClick = {handleDeleteBtnClick} >
            <div className={style.leftAlign} >
              <p className={style.title}>
                {task.task}
              </p>
            </div>
          </li>
        ))}
      </ul>  
    </div>
  )
}

export default HistoryPage
