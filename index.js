let isim = prompt ("Enter your name")
document.getElementById("myName").textContent= isim

function showTime(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.toLocaleDateString("en", { weekday: 'long' })
    

    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12; 
     }

     hour = (hour < 10) ? "0" + hour : hour;
     minute = (minute < 10) ? "0" + minute : minute;
     second = (second < 10) ? "0" + second : second;

     let time =  hour + ":" + minute + ":" + second + " " + day;

    document.getElementById("myClock").innerText = time;
    let t = setTimeout(function(){ showTime() }, 1000);
}


showTime();