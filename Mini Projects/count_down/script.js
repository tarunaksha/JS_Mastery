const endDate = '31 august 2023 4:45 PM'
document.getElementById('end-date').innerText = endDate
const inputs = document.querySelectorAll('input')

const clock = () => {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000 // milli-sec to sec
    // console.log(inputs[0]);
    if(diff < 0) return;
    inputs[0].value = Math.floor(diff/3600/24) // sec to day
    inputs[1].value = Math.floor(diff/3600)%24 // sec to hours
    inputs[2].value = Math.floor(diff/60)%60 // sec to min
    inputs[3].value = Math.floor(diff)%60 // sec
}

setInterval(() => {
    clock()
    
}, 1000)
