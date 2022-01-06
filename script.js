const getTime = () => {
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    
    return [addZero(hour), addZero(minute), addZero(second)]

}
const addZero = (elem) => {
    if (elem < 10){
        return '0' + elem.toString()
    }
    else return elem.toString()
}
const changeTimeToBinary = () =>{
    time = getTime()
    const hour = time[0]
    const minute = time[1]
    const second = time[2]

    const splittedHours = stripTime(hour)
    const splittedMinutes = stripTime(minute)
    const splittedSeconds = stripTime(second)


    let hourBinary = [], minuteBinary = [], secondBinary = []

    splittedHours.forEach(element => hourBinary.push(parseInt(element).toString(2)))
    splittedMinutes.forEach(element => minuteBinary.push(parseInt(element).toString(2)))
    splittedSeconds.forEach(element => secondBinary.push(parseInt(element).toString(2)))

    fullTime = hourBinary.concat(minuteBinary, secondBinary).join('')
    
    const hourTop = document.querySelectorAll('#hours-top > .pointer')
    const hourBottom = document.querySelectorAll('#hours-bottom > .pointer')
    const minuteTop = document.querySelectorAll('#minutes-top > .pointer')
    const minuteBottom = document.querySelectorAll('#minutes-bottom > .pointer')
    const secondTop = document.querySelectorAll('#seconds-top > .pointer')
    const secondBottom = document.querySelectorAll('#seconds-bottom > .pointer')


    select(hourTop, hourBinary[0])
    select(hourBottom, hourBinary[1])
    select(minuteTop, minuteBinary[0])
    select(minuteBottom, minuteBinary[1])
    select(secondTop, secondBinary[0])
    select(secondBottom, secondBinary[1])



    
    



    
}
const stripTime = (time) => {
    newTime = time.split('')
    return [newTime[0], newTime[1]]
    
}
const select = (pointer, time) => { 
    var count = 0
    var reversed = time.split('').reverse().join('')
    pointer.forEach(element => {
        if (reversed[count] == '1'){
            element.classList.add('on')
            element.classList.remove('off')
        }
        else {
            element.classList.add('off')
            element.classList.remove('on')
        }
        count++
    })
}

setInterval(changeTimeToBinary, 1000)