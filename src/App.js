
import React,{useState} from 'react';
import './App.css';
import NewExpense from './components/NewExpence/NewExpense';
import ExpenceItem from './components/Expenceitem';
import ExpenseFilter from './components/ExpenseFilter';


const App=()=> {

  const Expenses=[{
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
    date:new Date(2020,5,14),
},
{
  id:'e4',
    title:'New Desk',
    amount:400,
    date:new Date(2022,8,9),
}
]
const addExpensehandler=(expense)=>{
  console.log('in app.js');
  console.log(expense);
}
const [filteredYear, setFilteredYear]=useState('2020')
const filterChangeHandler=(selectedYear)=>{
  setFilteredYear(selectedYear)
}

  return  (  
    <div>  
        <h1> Expence Item </h1>  
    
            {Expenses.map((item) => (  
              
                <ExpenceItem 
                key={item.id}
                title={item.title}
               amount={item.amount} 
                date={item.date} ></ExpenceItem>
            
            ))}
      <ExpenseFilter selected={filteredYear} onchangeFilter={filterChangeHandler}></ExpenseFilter>
    <NewExpense onAddExpense={addExpensehandler}></NewExpense>
    </div>  
  ) 
}

export default App;
