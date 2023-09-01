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
    
    if (measuredSeconds === 59) {
        measuredMinutes++
        measuredSeconds = 0
    } else  measuredSeconds++
    

    if (measuredMinutes === 59){
        measuredHouers++
        measuredMinutes = 0
    } 
    displayedTime = measuredHouers + ':' + measuredMinutes + ':' + measuredSeconds
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