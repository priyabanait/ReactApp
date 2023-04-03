import logo from './logo.svg';
import './App.css';


function App() {

  const Expenses=[{
    id:'e1',
    title:'Toilet paper',
    amount:94.12,
    date:new Date(2020,7,14),
  },
{
  id:'e2',
    title:'new TV',
    amount:799.49,
    date:new Date(2020,7,14),
},
{
  id:'e3',
    title:'Car Insurance',
    amount:294.67,
    date:new Date(2020,7,14),
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
     
        <table>  
            <tr>  
                <th>Title</th>  
                <th>Amount</th>  
                <th>Date</th>  
            </tr>  
    
            {Expenses.map((item, index) => (  
              <tr data-index={index}>  
                <td>{item.title}</td>  
                <td>{item.amount}</td>  
                <td>{item.date.toISOString()}</td>  
              </tr>  
            ))}  
    
        </table>  
    
    </div>  
  );  
}

export default App;
