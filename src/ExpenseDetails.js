const ExpenseDetails=(props)=>{
    const title=props.title;
    const amount=props.amount;

return(
    <div>
        <div>{title}</div>
        <div>{amount}</div>
    </div>
)
}
export default ExpenseDetails;