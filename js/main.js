let money, time,
    startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName ('daybudget-value')[0],
    levelValue = document.getElementsByClassName ('level-value')[0],
    expensesValue = document.getElementsByClassName ('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName ('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName ('income-value')[0],
    monthSavingsValue = document.getElementsByClassName ('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName ('yearsavings-value')[0],
    expensesItemValue = document.getElementsByClassName ('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector ('.choose-income'),
    savings = document.querySelector ('#savings'),
    chooseSum = document.querySelector ('.choose-sum'),
    choosePercent = document.querySelector ('.choose-percent'),
    yearValue = document.querySelector ('.year-value'),
    monthValue = document.querySelector ('.month-value'),
    dayValue = document.querySelector ('.day-value');

startBtn.addEventListener('click', function () {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Дата в формате - YYYY-MM-DD','');

    while (isNaN(money) || money == '' || money == null)
    {
        money = +prompt('Ваш бюджет на месяц', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth()+1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});
expensesBtn.disabled;
expensesBtn.addEventListener('click', function () {
    let sum = 0;
    if (appData.budget != undefined) {
        for (let i = 0; i < expensesItemValue.length; i++) {
            let a = expensesItemValue[i].value;
            b = expensesItemValue[++i].value;

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
                && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
                sum += +b;
            } else {
                i--;
            }
        }

        expensesValue.textContent = sum;
        appData.sum = sum;
    }
});

optionalExpensesBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        for (let i = 0; i < optionalExpensesItem.length; i++) {
            let a = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = a;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    }
});

countBudgetBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - appData.sum) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay <= 100) {
            levelValue.textContent = 'Минимальный достаток';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний достаток';
        } else if (appData.moneyPerDay >= 2000) {
            levelValue.textContent = 'Высокий достаток';
        } else {
            levelValue.textContent = 'Не удалось вычислить';
        }
    }
});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(',');
    incomeValue.textContent = appData.income;

});

savings.addEventListener('click', function () {
   if (appData.savings == false){
       appData.savings = true;
   }
   else {
       appData.savings = false;
   }
});

chooseSum.addEventListener('input', function () {
    if (appData.savings == true){
        let save = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monhtIncome = save/100/12*percent;
        appData.yearIncome = save/100*percent;
    }
    monthSavingsValue.textContent = appData.monhtIncome.toFixed();
    yearSavingsValue.textContent = appData.yearIncome.toFixed();
});

choosePercent.addEventListener('input', function () {
    if (appData.savings == true){
        let save = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monhtIncome = save/100/12*percent;
        appData.yearIncome = save/100*percent;
    }
    monthSavingsValue.textContent = appData.monhtIncome.toFixed();
    yearSavingsValue.textContent = appData.yearIncome.toFixed();
});

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};