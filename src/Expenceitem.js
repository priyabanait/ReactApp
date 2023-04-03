import './ExpenceItem.css';

function ExpenceItem( LocationOfExpenditure){
   return  (

  
   
    <div className="expence_item">
        <div>{ LocationOfExpenditure.date.toISOString()}</div>   
        <div className="expence-item_description"> 
        <h2>{ LocationOfExpenditure.title}</h2>
        </div>
        <div className="expence-item_price">${ LocationOfExpenditure.amount}</div>
      </div>
      
   )
}
export default ExpenceItem;