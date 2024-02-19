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
const todaysDateRaw =`${year}/${month}/${day}`

// console.log(todaysDateObj)
// console.log(todaysDateRaw)

const pMonth        = month.toString().padStart(2,"0");
const pDay          = day.toString().padStart(2,"0");
const todaysDatePad = `${year}/${pMonth}/${pDay}`;
// console.log(todaysDatePad)


// --

button.addEventListener('click', function(e){
    e.preventDefault()

// birthdate 
    const birthDateObj  = new Date()
    const birthMonth    = monthInput.value
    const birthDay      = dayInput.value
    const birthYear     = yearInput.value
    const birthDateRaw  =`${birthYear}/${birthMonth}/${birthDay}`

    // console.log(birthDateObj, 'hi')
    // console.log(birthDateRaw)
    const pBYear        = birthYear.toString()
    const pBMonth       = birthMonth.toString().padStart(2,"0")
    const pBDay         = birthDay.toString().padStart(2,"0")
    const birthDatePad  = `${pBYear}/${pBMonth}/${pBDay}`
    // console.log(birthDatePad)

    // function to calculate age

    calculateAge()
   

    function calculateAge(){
        const ageYear   = year  - pBYear
        const ageMonth  = month - pBMonth
        const ageDay    = day   - pBDay

        console.log(`${ageYear}/${ageMonth}/${ageDay}`)//ugh that does not work with months smaller than birthmonth
    }
    // // checking if date is valid
    // function isDateValid(dateStr) {
    //     return !isNaN(new Date(birthDatePad))
    // } 
    // console.log(isDateValid('2022/12/30'))
})


// function calculateAge(today, bday){

//     console.log(today - bday)
// }

