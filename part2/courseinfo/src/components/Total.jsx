import React from 'react'

const Total = ({ course }) => {
    const exercises = course.parts.map(part => part.exercises)
    const sum = exercises.reduce((total, exerciseValue) => total += exerciseValue)
    
    return(
      <p><strong>Number of exercises {sum}</strong></p>
    ) 
  }

export default Total