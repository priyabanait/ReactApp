import './ExpenceItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenceItem=( props)=>{
   const deletebtn=()=>{
      let a=document.getElementById("object");
       a.innerHTML = "";
      console.log("deleted");
   }
   return  (
  <>
   <ul id="object">
     <li className="expence-item">
     <ExpenseDate date={props.date}></ExpenseDate>
         
        <div className="expence-item_description"> 
       <h2><ExpenseDetails title={props.title}></ExpenseDetails></h2>
        </div>
        <div className="expence-item_price">
       <h3>$<ExpenseDetails amount={props.amount}></ExpenseDetails></h3> 
         </div>
         <button onClick={deletebtn}>Delete Expence</button>
      </li>
      </ul>
     </>
   )
}
export default ExpenceItem;