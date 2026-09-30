let expenseList = [
]


function addExpenses(){

  const inputExpense= document.querySelector('.js-expense-list')
  
  const expense= inputExpense.value ;
  
  const inputAmount= document.querySelector('.js-amount-spent')

  const amount= Number(inputAmount.value);
  if(inputExpense.value === ''){
    document.querySelector('.js-input-not-there').innerHTML=`<div>There is no input given</div>`
    return
  }
  else if(inputAmount.value ===''){
    document.querySelector('.js-amount-not-there').innerHTML=`<div>There is no amount given</div>`
    return
  }
  document.querySelector('.js-input-not-there').innerHTML = ''
  document.querySelector('.js-amount-not-there').innerHTML = ''


  expenseList.push(
    {
      expense: expense,
      amount: amount
    }
  )
  console.log(expenseList);
  inputExpense.value=''
  inputAmount.value=''
  renderExpenseList()

  
}
function renderExpenseList(){
  let expenseListHTML= '';
  for ( let i=0; i< expenseList.length; i++)
  {
    const ExpenseListObject= expenseList[i];
    const {expense,amount} = ExpenseListObject; 
    // basically we are going to make this into first assigning our list to a object then we are adding the values to the object its destructing make sure to rememebr this 
    const html= `
    <div class="htmlshowcase">
    <div class="expensehtmldisplay"> Money spent on ${expense} </div>
    <div class="moneyspentdisplay"> ${amount} </div>
    <div><button onclick="expenseList.splice(${i},1); 
    renderExpenseList();" class="delete-button"> Delete </button> </div> 
    
    </div>
    `
    expenseListHTML += html;
  }
  document.querySelector('.js-expense-list-display').innerHTML= expenseListHTML;
}
function totalDisplay(){
  let total = 0

  for (let i=0; i< expenseList.length; i++){
    total += expenseList[i].amount
  }


  let totalHTML= ''
  const html= `
  <div>${total} is the amount spent inall </div>
  `
  totalHTML += html
  document.querySelector('.js-total-display').innerHTML=totalHTML;
}