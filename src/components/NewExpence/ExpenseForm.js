import React,{useState} from 'react'


export default function ExpenseForm(props) {

  const[enteredtitle ,setenteredtitle]=useState('');
  const[enteredAmount,setenteredAmount]=useState('');
  const[enteredDate ,setenteredDate]=useState('');

    function displayTitle(event){
      setenteredtitle(event.target.value);
        }

        function displayAmount(event){
          setenteredAmount(event.target.value);
          }

          function displayDate(event){
            setenteredDate(event.target.value);
            }
            function submitData(event){
              event.preventDefault();
              let expenseData={
                title:enteredtitle,
                amount:enteredAmount,
                date:new Date(enteredDate)
              }
              props.onSaveExpenseData(expenseData);
              setenteredtitle('');
              setenteredAmount('');
              setenteredDate('');
            }
  return (
    <form onSubmit={submitData}>
      <div className='newExpense'>
           <div className='title'>
            <label>Title: </label>
            <input type='text' value={enteredtitle} onChange={displayTitle}></input>
           </div>
           <div className='amount'>
            <label>Amount: </label>
            <input type='number' value={enteredAmount} onChange={displayAmount}></input>
           </div>
           <div className='date'>
            <label>Date: </label>
            <input type='date' value={enteredDate} min="2020-1-1" max="2022-12-31" onChange={displayDate}></input>
           </div>
      </div>
      <div>
        <button type="submit"> Add Expense</button>
      </div>
      </form>
  )
}
