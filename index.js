let hour = document.getElementById('hr');
let minute = document.getElementById('min');
let second = document.getElementById('sec');

const Time = () =>{
    let date= new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hourRotate = 30*hh + mm/2;
    let minuteRotate = 6*mm;
    let secondRotate = 6*ss;

    hour.style.transform = `rotate(${hourRotate}deg)`;
    minute.style.transform = `rotate(${minuteRotate}deg)`;
    second.style.transform = `rotate(${secondRotate}deg)`;
    
}
Time();
setInterval(()=>{
    Time()
}, 1000)
