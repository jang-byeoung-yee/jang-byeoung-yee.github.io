const month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function getClock(){
    const date=new Date();
    const hours=(Math.floor(date.getHours()/12)==1)?String(date.getHours()-12):String(date.getHours());
    const minutes= String(date.getMinutes());
    const seconds=String(date.getSeconds());
    const isPM=(Math.floor(date.getHours()/12)==1);
    clock.innerText=`${isPM?"PM":"AM"} ${hours.padStart(2,"0")}:${minutes.padStart(2,"0")}:${seconds.padStart(2,"0")}`;
    mainDate.innerText=`${date.getDate()} ${month[date.getMonth()-1]},${date.getFullYear()}`;
}

const clock=document.querySelector("#clock");
const mainDate=document.querySelector("#maindate");


getClock();
setInterval(getClock,1000);
