import logo from './logo.svg';
import React from 'react';
import './App.css';

import ExpenceItem from './Expenceitem';


const App=()=> {

  const Expenses=[{
    id:'e1',
    title:'Toilet paper',
    amount:94.12,
    date:new Date(2023,1,14),
  },
{
  id:'e2',
    title:'new TV',
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

  return  (  
    <div>  
        <h1> Expence Item </h1>  
    
            {Expenses.map((item) => (  
               
                <ExpenceItem title={item.title}
               amount={item.amount} 
                date={item.date} ></ExpenceItem>
            
            ))}
    
    </div>  
  ) 
}

export default App;
