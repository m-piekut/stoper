const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const roundBtn = document.querySelector('.round')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const modalinfo = document.querySelector('.info')
const modal = document.querySelector('.modal-shadow')
const closeBtn = document.querySelector('.close')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')
const green = document.querySelector('.green')
const orange = document.querySelector('.orange')
const blue = document.querySelector('.blue')
const colorPick = document.querySelector('.color-change')
const colors = document.querySelector('.colors')
const body = document.querySelector('body')
let seconds =0;
let addseconds;
let minutes = 0;

const reset = ()=>{
    startBtn.classList.remove('disable')
    roundBtn.classList.add('disable')
}

const stopFN = ()=>{
    minutes = 0;
    seconds = 0;
    clearInterval(addseconds)
    reset()
    stopwatch.textContent = `${minutes}:0${seconds}`
}
const secondsAndMinutes = () => {
    if (seconds < 9) {
        seconds++
        stopwatch.textContent = `${minutes}:0${seconds}`
    } else if (seconds >= 9 && seconds < 59) {
        seconds++
        stopwatch.textContent = `${minutes}:${seconds}`
    } else {
        seconds = 0
        minutes++
        stopwatch.textContent = `${minutes}:0${seconds}`
    }
}




const startCloak = () => {
    clearInterval(addseconds)
    addseconds = setInterval(() => {
        secondsAndMinutes()
    }, 1000);
    startBtn.classList.toggle('disable')
    roundBtn.classList.toggle('disable')
}
const pauseTime = () => {
    clearInterval(addseconds);
    reset()
}

const nextLap = ()=>{
    const lapTime = document.createElement('li')
    timeList.appendChild(lapTime)
    lapTime.textContent = stopwatch.textContent
    time.textContent = stopwatch.textContent
}

const resetAll = () =>{
    reset()
    clearInterval(addseconds)
    seconds= 0;
    minutes = 0;
    stopwatch.textContent = `${minutes}:0${seconds}`
    timeList.innerHTML = '';
    time.textContent ='';
}
const showModal = ()=>{
    if(!(modal.style.display === 'block' )){
        modal.style.display = 'block';
    }else{
        modal.style.display= 'none'
    }
}



roundBtn.addEventListener('click', nextLap)
pauseBtn.addEventListener('click', pauseTime);
stopBtn.addEventListener('click', stopFN);
startBtn.addEventListener('click', startCloak);
historyBtn.addEventListener('click', ()=> timeList.classList.toggle('hide'))
resetBtn.addEventListener('click', resetAll)
modalinfo.addEventListener('click', showModal)
closeBtn.addEventListener('click', showModal)
window.addEventListener('click', (e)=>{
    if(e.target === modal){
        modal.style.display = 'none'
    }
})

colorPick.addEventListener('click', ()=>{
colors.style.visibility= 'visible'
})

blue.addEventListener('click', ()=>{
    body.classList = ''
    colors.style.visibility= 'hidden'
})
orange.addEventListener('click', ()=>{
    body.classList.remove('greentest')
    body.classList.add('orangetest')
    colors.style.visibility= 'hidden'
})
green.addEventListener('click', ()=>{
    body.classList.remove('orangetest')
    body.classList.add('greentest')
    colors.style.visibility= 'hidden'
})

