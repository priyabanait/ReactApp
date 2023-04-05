
function Expense(props){
    return (
        React.createElement('div',{},"className='expense-item'",
            React.createElement(ExpenseDate,{date :props.date}),
                React.createElement('div',{}),
                React.createElement('h1',{},"Expense 1"),
                React.createElement('h1',{},"Expense 1") 
        )

    )
}
export default Expense;

