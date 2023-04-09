import React,{useState} from 'react'


export default function ExpenseForm() {

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
              let data={
                title:enteredtitle,
                amount:enteredAmount,
                date:new Date(enteredDate)
              }
              console.log(data);
            }
  return (
    <form onSubmit={submitData}>
      <div className='newExpense'>
           <div className='title'>
            <label>Title: </label>
            <input type='text' onChange={displayTitle}></input>
           </div>
           <div className='amount'>
            <label>Amount: </label>
            <input type='number' onChange={displayAmount}></input>
           </div>
           <div className='date'>
            <label>Date: </label>
            <input type='date' min="2020-1-1" max="2022-12-31" onChange={displayDate}></input>
           </div>
      </div>
      <div>
        <button type="submit"> Add Expense</button>
      </div>
      </form>
  )
}
