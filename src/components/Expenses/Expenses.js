import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

const Expenses = (props)=> {
  return (
    <Card className='expenses'>
      <ExpenseItem
        title={props.expenseData[0].title}
        date={props.expenseData[0].date}
        price={props.expenseData[0].amount}
      />
      <ExpenseItem
        title={props.expenseData[1].title}
        date={props.expenseData[1].date}
        price={props.expenseData[1].amount}
      />
      <ExpenseItem
        title={props.expenseData[2].title}
        date={props.expenseData[2].date}
        price={props.expenseData[2].amount}
      />
      <ExpenseItem
        title={props.expenseData[3].title}
        date={props.expenseData[3].date}
        price={props.expenseData[3].amount}
      />
    </Card>
  );
}

export default Expenses;
