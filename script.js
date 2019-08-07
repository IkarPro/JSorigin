let money, time;

function start() {
    money = +prompt('Your monthly budget?');
    time = prompt('Your date in format - YYYY-MM-DD');

    while (isNaN(money) || money == '' || money == null)
    {
        money = +prompt('Your monthly budget?');
    }
}

start();

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true
};

function choseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Obyazatelnaya statiya rashodov'),
            b = prompt('Price');

        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && a.length < 50){
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

choseExpenses();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt('Ne obyazatelnaya statiya rashodov'),
            b = prompt('Price');

        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && a.length < 50){
            console.log('done');
            appData.optionalExpenses[i+1] = b;
        } else {
            i--;
        }
    }
}

chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert(appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay <= 100) {
        console.log('minimum');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('norm');
    } else if (appData.moneyPerDay >= 2000) {
        console.log('high');
    } else {
        console.log('error');
    }
}

detectLevel();


function checkSaving() {
    if (appData.savings == true){
        let save = +prompt('Summa nakoplenii'),
            percent = prompt('Procent?');
        appData.monhtIncome = save/100/12*percent;
        alert('Nakoplenie: ' + appData.monhtIncome.toFixed());
    }
}

checkSaving();