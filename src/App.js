
import React,{useState} from 'react';
import './App.css';
import './components/ExpenceItem.css'
import NewExpense from './components/NewExpence/NewExpense';
import ExpenseChart from './components/ExpenseChart';
import ExpenseFilter from './components/ExpenseFilter';
import ExpensesList from './components/ExpensesList';

const DUMMY_EXPENSES=[{
  id:'e1',
  title:'Toilet paper',
  amount:94.12,
  date:new Date(2023,1,14),
},
{
id:'e2',
  title:'New TV',
  amount:799.49,
  date:new Date(2021,7,20),
},
{
id:'e3',
  title:'Car Insurance',
  amount:294.67,
  date:new Date(2022,5,14),
},
{
id:'e4',
  title:'New Desk',
  amount:400,
  date:new Date(2022,8,9),
}
]
const App=()=> {
const[expenses, setExpenses]=useState(DUMMY_EXPENSES) 

const addExpensehandler=(expense)=>{
  setExpenses((prevExpenses)=>{
    return[expense, ...prevExpenses]
  });
};
 
const [filteredYear, setFilteredYear]=useState('2020')
const filterChangeHandler=(selectedYear)=>{
  setFilteredYear(selectedYear)
  }

  const filteredExpenses=expenses.filter((expense)=>{
 return expense.date.getFullYear().toString()===filteredYear;
  })

  return  ( 
    <div>
        <h1> Expence Item </h1> 
       <NewExpense onAddExpense={addExpensehandler}></NewExpense> 
       <div className='expenses'>  
        <ExpenseFilter selected={filteredYear} onchangeFilter={filterChangeHandler}></ExpenseFilter>
        <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
            </div> 
         </div> 
        ) 
       }

export default App;
