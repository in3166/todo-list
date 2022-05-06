import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import moment from 'moment'
import './grass.css' // css import

function Grass() {
  const [value, setValue] = useState(new Date())
  const year = value.getFullYear()
  const month = value.getMonth() + 1
  const day = value.getDate()
  const date = `${year}-${month >= 10 ? month : `0${month}`}-${day >= 10 ? day : `0${day}`}`

  const task = [ // 더미데이터 입니다.
    {
      id: 1,
      task: '밥먹기',
      category: '루틴',
      completed: true,
      expiry_date: '2022-05-06',
      complete_date: '2022-05-01',
    },
    {
      id: 2,
      task: '이메일 회신',
      category: '일',
      completed: false,
      expiry_date: '2022-05-06',
      complete_date: '2022-05-02',
    },
    {
      id: 3,
      task: '서울숲',
      category: '여가',
      completed: true,
      expiry_date: '2022-05-06',
      complete_date: '2022-05-03',
    },
    {
      id: 4,
      task: '헬스',
      category: '운동',
      completed: true,
      expiry_date: '2022-05-06',
      complete_date: '2022-05-04',
    },
  ] 
  localStorage.setItem(`task`, JSON.stringify(task))
  
   function getDate(){
    const data = localStorage.getItem('task')

     return JSON.parse(data)
  }


  useEffect(() => {
    console.log(date)
    console.log(getDate().filter(el => el.complete_date === date))
  }, [value])

  return (
    <div>
      <Calendar
        onChange={setValue}
        value={value}
        formatDay={(locale, date) => moment(date).format('DD')} // ''일 보이지않게 설정 
        minDetail='month' // 상단 네비게이션에서 '월' 단위만 보이게 설정
        maxDetail='month' // 상단 네비게이션에서 '월' 단위만 보이게 설정
        showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
      />
    </div>
  )
}

export default Grass
