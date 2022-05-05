import { useState, useRef, useEffect } from 'react'
import styles from './TodoCategory.module.scss'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const categoryList = [
  {
    id: 1,
    category: 'all',
    text: '전체보기',
  },
  {
    id: 2,
    category: 'work',
    text: '일',
  },
  {
    id: 3,
    category: 'health',
    text: '운동',
  },
  {
    id: 4,
    category: 'personal',
    text: '개인',
  },
  {
    id: 5,
    category: 'hobby',
    text: '취미',
  },
]

const TOTAL_SLIDES = 2

function TodoCategory () {
  const [currentCate, setCate] = useState('all')
  
  const catesRef = useRef()
  const [currentIndex, setIndex] = useState(0)

  const handleClickCate = (e) => {
    const { dataset } = e.currentTarget
    const {category} = dataset

    setCate(() => {
      const newCate = category
      return newCate
    })
  }
  
  const handlePrev = () => {
    if (currentIndex) {
      setIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < TOTAL_SLIDES) {
      setIndex(currentIndex + 1)
    } 
  }

  
  useEffect(() => {
    catesRef.current.style.transform = `translate(-${currentIndex * 18}0px )`
  },[currentIndex])

  return (
    <div className={styles.todoCategory}>
      <h3>Cateogories</h3>
      <div className={styles.cateWrap} >
        <button type='button' className={styles.arrowBtn} onClick={handlePrev}>
          <FaArrowLeft/>
        </button>
        <button type='button' className={styles.arrowBtn} onClick={handleNext}>
          <FaArrowRight />
        </button>
        
        <ul className={styles.categoryList} ref={catesRef}>
          {categoryList.map((cate) => (
            <li key={`category-${cate.id}`} className={styles.category}>
              <button className={styles.cateBtn} type='button' data-category={cate.category}  onClick={handleClickCate}> 
                <span className={styles.cateRange}>
                  12 tasks
                  {/* 수정 필요 */}
                </span>
                <span className={styles.cateTitle}>{cate.text}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${currentCate}-wrapper`}>
        <p>{currentCate}</p>
      </div>
    </div>
  )
}
export default TodoCategory