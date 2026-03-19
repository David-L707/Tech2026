const start = 60;
let time = start * 60;

const countdown = document.getElementById('countdown');

setInterval(update,1000);
function update(){
    const min = Math.floor(time/60);
    let sec = time%60;

    sec = sec < 10 ? "0" + sec : sec;

    countdown.innerHTML=`${min} : ${sec}`;
    time--;
}