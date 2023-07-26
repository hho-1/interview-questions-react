import React, { useState } from 'react'
import {arrowup} from '../helpers/icons'
import {arrowdown} from '../helpers/icons'
import './main.css'


const Main = ({id, question, answer}) => {

    const [acikMi, setacikMi] = useState(false)

  return (
    
    <div className='main'>
        {
            acikMi ? 
            (
            <section className='question-answer acik'>
                <div className='question-and-button'>
                    <h5 className='question'>{id}. {question}</h5>
                    <button onClick={()=>setacikMi(false)}>{arrowup}</button>
                    </div>
                <p className='answer'>{answer}</p>
            </section>
            ) 
            : 
            (
            <section className='question-answer'>
                <div className='question-and-button'>
                    <h5 className='question'>{id}. {question}</h5>
                    <button onClick={()=>setacikMi(true)}>{arrowdown}</button>
                </div>
            </section>)
        }
        
    </div>
  )
}

export default Main