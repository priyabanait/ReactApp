import React , {useState}from 'react'
import ExpenseForm from './ExpenseForm'
export default function NewExpense(props) {

  const[editing, setEditing]=useState(false);
  const onSaveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id:Math.random.toString()
    }
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setEditing(false)
    }
  function startEditingHandler(){
    setEditing(true)
  }
  function stopEditing(){
    setEditing(false)
  }
  return (
    <div>
      {!editing &&(<button onClick={startEditingHandler}>Add New Expense</button>)}
      
      {editing &&(<ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditing}></ExpenseForm>)}
    </div>
  )
}
