import React from 'react'
import 'Expensedate'
const ExpenseDate = (date) => {
    const month=date.date.toLocaleString('en-US',{month:'long'});
    const day=date.date.toLocaleString('en-US',{ day:'2-digit'});
    const year =date.date.getFullYear();
  return (
    <div> 
    <div >{month}</div>
    <div >{year}</div>
    <div >{day}</div>
    </div>
  )
}

export default ExpenseDate