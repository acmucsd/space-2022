import React, { useState } from 'react'

import Faq from '../../components/Faq/index'
import faqData from './faq.json'
import s from './style.module.scss'



const FAQ: React.FC = () => {

  const [studentState, showStudents] = useState(true);

  function activateStudents(){
    showStudents(true);
  }

  function activateCompanies(){
    showStudents(false);
  }


  return (
    <div className = {s.background}>
      <div className = {s.faqContainer}>
        <h2 className = {s.faqTitle}>FAQs</h2>
        <div className = {s.faqSubtitles}>
          <button className = {studentState ? s.activatedButton : s.faqButton} onClick={activateStudents}>For Students</button>
          <button className = {studentState ? s.faqButton : s.activatedButton} onClick ={activateCompanies}>For Companies</button>
        </div>
        <div className = {s.faqBox}>
          {studentState
            ? <Faq
            panelTitles={faqData.students.map(faq => faq.question)}
            panelContents={faqData.students.map(faq => faq.answer)}
            />
            : <Faq
            panelTitles={faqData.companies.map(faq => faq.question)}
            panelContents={faqData.companies.map(faq => faq.answer)}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default FAQ;