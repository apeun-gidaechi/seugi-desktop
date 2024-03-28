import React from 'react';

const selectingjob = () => {
  return (
    <div className='Frame335'>
        <p>학생인가요 선생님인가요?</p>
        <div className='Frame334'>
            <button className='Frame232'>
                <img src='src/assets/image/student.svg'></img>
                <p>학생</p>
            </button>
            <button className='Frame232'>
                <img src='src/assets/image/teacher.svg'></img>
                <p>선생님</p>
            </button>
        </div>
        <div className='Frame300'>
            <button className='continuebtn'>계속하기</button>
            <p></p>
            <a href='http://localhost:5176/login'>이미 계정이 있으신가요?</a>
        </div>
    </div>
  )
}

export default selectingjob;