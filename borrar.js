// const validDay = () => {
//     let error = false;
//     const inDay = Number(document.getElementById('day').value);
//     const inMonth = Number(document.getElementById('month').value);
//     const inYear = Number(document.getElementById('year').value);

//     allInputs.forEach((input) => {
//         const name = input.name;

//         if (name === 'day' && (inDay <= 0 || inDay > 31)) {
//             error = true;
//             warnings(document.getElementById(name + 'Family').children);
//         } else if (name === 'day' && !(inDay <= 0 || inDay > 31)) {
//             hideWarnings(document.getElementById(name + 'Family').children);
//         }

//         if (name === 'month' && (inMonth <= 0 || inMonth > 12)) {
//             error = true;
//             warnings(document.getElementById(name + 'Family').children);
//         } else if (name === 'month' && !(inMonth <= 0 || inMonth > 12)) {
//             hideWarnings(document.getElementById(name + 'Family').children);
//         }

//         if (name === 'year' && inYear.toString().length !== 4) {
//             error = true;
//             warnings(document.getElementById(name + 'Family').children);
//         } else if (name === 'year' && inYear.toString().length === 4) {
//             hideWarnings(document.getElementById(name + 'Family').children);
//         }
//     });
//     return { error, inDay, inMonth, inYear };

// }


// else if (name === 'day' && inDay > '30' && (inMonth === '4' || inMonth === '6' || inMonth === '9' || inMonth === '11')) {
//     specialMonth(document.getElementById(name + 'Family').children);
// }





