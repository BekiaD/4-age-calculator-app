const button        = document.getElementById('btn')
// inputs span
const yearsSpan     = document.getElementById('years')
const monthsSpan    = document.getElementById('months')
const daysSpan      = document.getElementById('days')

// date inputs 
const dayInput      = document.getElementById('day-input')
const monthInput    = document.getElementById('month-input')
const yearInput     = document.getElementById('year-input')

// todays date
const todaysDateObj = new Date()
const month         = todaysDateObj.getUTCMonth() + 1
const day           = todaysDateObj.getUTCDate()
const year          = todaysDateObj.getUTCFullYear()
const todaysDateRaw =`${year}-${month}-${day}`

// console.log(todaysDateObj)
// console.log(todaysDateRaw)

const pMonth        = month.toString().padStart(2,"0");
const pDay          = day.toString().padStart(2,"0");
const todaysDatePad = `${year}-${pMonth}-${pDay}`;
// console.log(todaysDatePad)


// --

button.addEventListener('click', function(e){
    e.preventDefault()

// birthdate 
    const birthMonth    = monthInput.value
    const birthDay      = dayInput.value
    const birthYear     = yearInput.value
    const birthDateRaw  =`${birthYear}-${birthMonth}-${birthDay}`

    // console.log(birthDateObj, 'hi')
    // console.log(birthDateRaw)
    
    const pBYear        = birthYear.toString()
    const pBMonth       = birthMonth.toString().padStart(2,"0")
    const pBDay         = birthDay.toString().padStart(2,"0")
    const birthDatePad  = `${pBYear}-${pBMonth}-${pBDay}`
    // console.log(birthDatePad)

    const isValidDate = checkValidDate(birthDay, birthMonth) 
    // if (isValidDate){
    //     console.log('trutru')
    // } else {
    //     console.log('please good')
    // }

    if(!isValidDate){
        alert('Please add your birthdate')
        return
    } 
    console.log('trutru')

    console.log('useful message')
    // function to calculate age

    const birthdayInDays = 

    // 
})



  // check if birth date exists - number of days/months
  function checkValidDate(day, month){
    // console.log(day, month)
    if (
        day > 31 ||
        month > 12 ||
        (month == 2 && day > 29) ||
        (month == 4 && day > 30) ||
        (month == 6 && day > 30) ||
        (month == 9 && day > 30) ||
        (month == 11 && day > 30)
    ) {
        return false;
    }
    return true;
}