import React from 'react'
import ExpenceItem from './Expenceitem'
import './ExpensesList.css'
export default function ExpensesList(props) {
    if(props.items.length===0){
        return<h2 className='expenses-list_fallback'>No Expnses found.</h2>
    }
if(props.items.length===1){
    return(
    <>
    <ul className='expenses-list'>
    {props.items.map((item) =>(  
       <ExpenceItem 
         key={item.id}
         title={item.title}
        amount={item.amount} 
         date={item.date} ></ExpenceItem>
     ))}
    </ul>
    <h2 className='expenses-list_fallback'>Only single Expense here.</h2> 
    </>
    )
  }

  return (
    <div>
     <ul className='expenses-list'>
     {props.items.map((item) =>(  
        <ExpenceItem 
          key={item.id}
          title={item.title}
         amount={item.amount} 
          date={item.date} ></ExpenceItem>
      ))}
     </ul>
    </div>
  )
}
