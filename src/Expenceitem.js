import './ExpenceItem.css';

function ExpenceItem( props){
   return  (

  
   
    <div className="expence_item">
        <div>{ props.date.toISOString()}</div>   
        <div className="expence-item_description"> 
        <h2>{ props.title}</h2>
        </div>
        <div className="expence-item_price">${ props.amount}</div>
      </div>
      
   )
}
export default ExpenceItem;