let money, time,
    startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName ('daybudget-value')[0],
    levelValue = document.getElementsByClassName ('level-value')[0],
    expensesValue = document.getElementsByClassName ('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName ('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName ('income-value')[0],
    monthsavingsValue = document.getElementsByClassName ('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName ('yearsavings-value')[0],
    expensesItemValue = document.getElementsByClassName ('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('optionalexpenses-item'),
    chooseIncome = document.querySelector ('.choose-income'),
    savings = document.querySelector ('#savings'),
    chooseSum = document.querySelector ('.choose-sum'),
    choosePercent = document.querySelector ('.choose-percent'),
    yearSavingValue = document.querySelector ('.year-value'),
    monthSavingValue = document.querySelector ('.month-value'),
    daySavingValue = document.querySelector ('.day-value');

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Дата в формате - YYYY-MM-DD','');

    while (isNaN(money) || money == '' || money == null)
    {
        money = +prompt('Ваш бюджет на месяц', '');
    }
}

start();

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true,
    choseExpenses : function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Обязательные статья расходов',''),
                b = prompt('Сумма', '');

            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
                && a != '' && b != '' && a.length < 50){
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    chooseOptExpenses : function () {
        for (let i = 1; i < 3; i++) {
            let a = prompt('Не обязательная статья расходов', '');
            appData.optionalExpenses[i] = a;
        }
    },
    detectDayBudget : function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(appData.moneyPerDay);
    },
    detectLevel : function () {
        if (appData.moneyPerDay <= 100) {
            console.log('Минимальный достаток');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Нормальный достаток');
        } else if (appData.moneyPerDay >= 2000) {
            console.log('Высокий достаток');
        } else {
            console.log('Не удалось вычислить');
        }
    },
    checkSaving : function () {
        if (appData.savings == true){
            let save = +prompt('Сумма Ваших накоплений:', ''),
                percent = prompt('Под какой процент?', '');
            appData.monhtIncome = save/100/12*percent;
            alert('Nakoplenie: ' + appData.monhtIncome.toFixed());
        }
    },
    choseIncome : function () {
        let items = prompt('Ваш дополнительный доход через \', \'' , '');
        while (typeof (items) !== 'string' || items == '' || items == null){
            items = prompt('Ваш дополнительный доход через \', \'' , '');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Дополнительный источник заработка', ''));
        appData.income.sort();
        appData.income.forEach(function (value) {
            alert('Способы подработки: ' + value);
        });
    },
    dump : function () {
        for (let key in appData){
            console.log('Программа включает данные: ' + key);
        }
    }
};
