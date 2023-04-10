import React from 'react'
import ExpenseForm from './ExpenseForm'
export default function NewExpense(props) {
  const onSaveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id:Math.random.toString()
    }
    console.log(expenseData);
    props.onAddExpense(expenseData);

  }
  return (
    <div>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>
    </div>
  )
}
