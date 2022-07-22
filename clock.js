let userName=prompt("Adınızı Giriniz");
let info1=document.querySelector("#myName");
userName?info1.innerHTML=userName:info1.innerHTML="Misafir";


function time(){
    let time=new Date();
    let hours=time.getHours()
    let minutes=time.getMinutes()
    let seconds=time.getSeconds()
    let days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    if(hours<10){
        hours="0"+hours;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }


    let info2=document.querySelector("#myClock");
    info2.innerHTML=`${hours} : ${minutes} : ${seconds}  ${days[time.getMonth()]}`

}

setInterval(time,1000)