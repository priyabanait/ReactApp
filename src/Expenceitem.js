import React from 'react';
import './ExpenceItem.css';
import ExpenseDate from './ExpenseDate';



function ExpenceItem( props){

   return (
      React.createElement('div',{className:"expense-item"},
          React.createElement(ExpenseDate,{date :props.date}),
              React.createElement('div',{}),
              React.createElement('h1',{},"Expense 1"),
              React.createElement('h1',{},"Expense 1") 
      )

  )
}
export default ExpenceItem;