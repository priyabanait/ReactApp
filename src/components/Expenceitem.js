import React, {useState} from 'react';
import './ExpenceItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

let ExpenceItem=( props)=>{
  
   const [amount, setAmount]=useState(props.amount);
   const ChangeAmount=()=>{
      setAmount('100');
      console.log(amount);
   };
   return  (

     <div className="expence-item">
     <ExpenseDate date={props.date}></ExpenseDate>
         
        <div className="expence-item_description"> 
       <h2><ExpenseDetails title={props.title}></ExpenseDetails></h2>
        </div>
        <div className="expence-item_price">
       <h3>$<ExpenseDetails amount={amount}></ExpenseDetails></h3> 
         </div>
         <button onClick={ChangeAmount}>Change Expense</button>
      </div>
     )
}
export default ExpenceItem;