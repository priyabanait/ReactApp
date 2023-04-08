import React from 'react'

export default function ExpenseForm() {
    function display(event){
        event.preventDefault();
       const show=event.target.value;
         console.log(show);
        }
  return (
    <form>
      <div className='newExpense'>
           <div className='title'>
            <label>Title: </label>
            <input type='text' onChange={display}></input>
           </div>
           <div className='amount'>
            <label>Amount: </label>
            <input type='number' onChange={display}></input>
           </div>
           <div className='date'>
            <label>Date: </label>
            <input type='date' min="2020-1-1" max="2022-12-31" onChange={display}></input>
           </div>
      </div>
      <div>
        <button type="submit"> Add Expense</button>
      </div>
      </form>
  )
}
