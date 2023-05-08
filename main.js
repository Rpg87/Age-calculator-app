'use strict';
const btn = document.querySelector('.jsBtn');
const allInputs = document.querySelectorAll('.input');

const warnings = (children) => {
    children[0].classList.add('error');
    children[1].classList.add('error');
    children[2].style.display = "block";
}

const hideWarnings = (children) => {
    children[0].classList.remove('error');
    children[1].classList.remove('error');
    children[2].style.display = "none";
}

const validDate = () => {
    let error = false;
    const inDay = document.getElementById('day').value.padStart(2, '0');
    const inMonth = document.getElementById('month').value.padStart(2, '0');
    const inYear = Number(document.getElementById('year').value);
    let yearTxt = document.querySelector('.yearChange');
    let dayTxt = document.querySelector('.dayChange');
    let monthTxt = document.querySelector('.monthChange');
    const date = new Date();
    let actualYear = date.getFullYear();

    allInputs.forEach((input) => {
        const name = input.name;


        if (name === 'day' && inDay == '') {
            error = true;
            warnings(document.getElementById(name + 'Family').children);
        } else if (name === 'day' && (inDay <= 0 || inDay > 31)) {
            error = true;
            warnings(document.getElementById(name + 'Family') + (dayTxt.innerHTML = 'Must be a valid day').children);
        } else if (name === 'day' && inDay > 30 && (inMonth == 4 || inMonth == 6 || inMonth == 9 || inMonth == 11)) {
            error = true;
            warnings(document.getElementById(name + 'Family').children) + (dayTxt.innerHTML = 'This month only has 30 days')
        } else if (name === 'day' && inDay > 28 && inMonth == 2) {
            error = true;
            warnings(document.getElementById(name + 'Family').children) + (dayTxt.innerHTML = 'This month only has 28 days')
        } else if (name === 'day' && (inDay > 0 || inDay <= 31)) {
            hideWarnings(document.getElementById(name + 'Family').children);

        }
        if (name === 'month' && inMonth == '') {
            error = true;
            warnings(document.getElementById(name + 'Family').children);
        } else if (name === 'month' && (inMonth <= 0 || inMonth > 12)) {
            error = true;
            warnings(document.getElementById(name + 'Family').children) + (monthTxt.innerHTML = ' Must be a valid month');
        } else if (name === 'month' && !(inMonth <= 0 || inMonth > 12)) {
            hideWarnings(document.getElementById(name + 'Family').children);

        }
        if (name === 'year' && inYear == '') {
            error = true;
            warnings(document.getElementById(name + 'Family').children);
            console.log('yPrimero');
        } else if (name === 'year' && (inYear.toString().length > 1 && inYear.toString().length < 4)) {
            error = true;
            warnings(document.getElementById(name + 'Family').children) + (yearTxt.innerHTML = 'Opps! I think you miss a number');
        } else if (name === 'year' && inYear < 1910) {
            error = true;
            warnings(document.getElementById(name + 'Family').children) + (yearTxt.innerHTML = 'REALLY? What\'\s your secret');
        }
        else if (name === 'year' && inYear > actualYear) {
            error = true;
            warnings(document.getElementById(name + 'Family').children) + (yearTxt.innerHTML = 'Must be in the past');
        } else if (name === 'year' && inYear.toString().length == 4) {
            hideWarnings(document.getElementById(name + 'Family').children);

        }

    });
    return { error, inDay, inMonth, inYear };
}

const daysAlive = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);

    birthDate.setHours(0, 0, 0, 0); // Establecer horas, minutos, segundos y milisegundos a cero

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        months += 12;
        years--;
    }

    if (days < 0) {
        const numOfDaysInCurrentMonth = new Date(
            birthDate.getFullYear(),
            birthDate.getMonth() + 1,
            0
        ).getDate();

        const remDaysInBirthMonth = numOfDaysInCurrentMonth - birthDate.getDate();

        const daysElaspsedInCurrentMonth = today.getDate();
        days = remDaysInBirthMonth + daysElaspsedInCurrentMonth;
    }

    const age = {
        years,
        months,
        days,
    };

    return age;
};




const handlebtn = (e) => {
    e.preventDefault();
    validDate();

    const { error, inDay, inMonth, inYear } = validDate();

    let totalYears = document.querySelector('.resultYears');
    let totalMonths = document.querySelector('.resultMonths');
    let totalDays = document.querySelector('.resultDays');

    if (!error) {
        const { days, months, years } = daysAlive(
            `${inMonth}-${inDay}-${inYear}`
        );

        totalYears.innerHTML = years;
        totalMonths.innerHTML = months;
        totalDays.innerHTML = days;
    }

};



btn.addEventListener('click', handlebtn);