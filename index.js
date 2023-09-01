let interval
let stoped = true
let measuredSeconds = 0
let measuredMinutes = 0
let measuredHouers = 0
let displayedTime = '00:00:00'

function TimeStop(){
    stoped = true
}

function TimeStart() {
    stoped = false
    if (!interval){
        stoped = false
        interval = setInterval(updateTime, 1000)
    }
    
}

function updateTime() {
    // let time = new Date().getTime()/ 1000
    if (stoped) return
    
    if (measuredMinutes === 59 && measuredSeconds === 59){
        measuredHouers++
        measuredMinutes = 0
        measuredSeconds = 0
    } else if (measuredSeconds === 59) {
        measuredMinutes++
        measuredSeconds = 0
    } else  measuredSeconds++

    displayedTime = `${measuredHouers}`.padStart(2,0) + ':' + `${measuredMinutes}`.padStart(2,0) + ':' + `${measuredSeconds}`.padStart(2,0)
    document.getElementById('Time').innerHTML = displayedTime
   
}

function TimeReset() {
    stoped = true
    measuredSeconds = 0
    measuredMinutes = 0
    measuredHouers = 0
    displayedTime = '00:00:00'
    document.getElementById('Time').innerHTML = displayedTime
}